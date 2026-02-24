/**
 * SIMALIAN PROJECTS — Init effects (same logic as original JS modules)
 * Called from useEffect after mount.
 */

import { CONFIG } from './config.js';

export function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  if (CONFIG.reducedMotion) {
    reveals.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  reveals.forEach(el => observer.observe(el));
}

export function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  if (CONFIG.reducedMotion) {
    el.textContent = target + (target >= 90 ? '%' : '+');
    return;
  }
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current + (target >= 90 ? '%' : '+');
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + (target >= 90 ? '%' : '+');
  }
  requestAnimationFrame(update);
}

export function initSmoothScroll() {
  const handler = (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navHeight = 100;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
    if (CONFIG.reducedMotion || !('scrollBehavior' in document.documentElement.style)) {
      window.scrollTo(0, targetPosition);
    } else {
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    history.pushState(null, '', href);
  };
  document.addEventListener('click', handler);
  return () => document.removeEventListener('click', handler);
}

export function initModalGallery() {
  const handler = (e) => {
    const thumb = e.target.closest('.modal-gallery__thumb');
    if (!thumb) return;
    const gallery = thumb.closest('.modal-gallery');
    if (!gallery) return;
    const mainImg = gallery.querySelector('.modal-gallery__main img');
    const thumbImg = thumb.querySelector('img');
    if (!mainImg || !thumbImg) return;
    const fullSrc = thumbImg.dataset.full || thumbImg.src;
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = fullSrc;
      mainImg.alt = thumbImg.alt || mainImg.alt;
      mainImg.style.opacity = '1';
    }, 150);
    gallery.querySelectorAll('.modal-gallery__thumb').forEach(t => t.classList.remove('is-active'));
    thumb.classList.add('is-active');
  };
  document.addEventListener('click', handler);
  return () => document.removeEventListener('click', handler);
}

export function initVideoFallback() {
  const video = document.querySelector('.hero__video');
  const fallback = document.querySelector('.hero__video-fallback');
  if (!video || !fallback) return () => {};
  if (CONFIG.reducedData || CONFIG.reducedMotion) {
    video.style.display = 'none';
    fallback.style.display = 'block';
    return () => {};
  }
  const onError = () => { video.style.display = 'none'; fallback.style.display = 'block'; };
  const onCanplay = () => { video.style.display = 'block'; fallback.style.display = 'none'; };
  video.addEventListener('error', onError);
  video.addEventListener('canplay', onCanplay);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play().catch(() => { video.style.display = 'none'; fallback.style.display = 'block'; });
        } else video.pause();
      });
    },
    { threshold: 0.1 }
  );
  observer.observe(video);
  return () => {
    video.removeEventListener('error', onError);
    video.removeEventListener('canplay', onCanplay);
    observer.disconnect();
  };
}

export function initCinematicScroll() {
  const hero = document.querySelector('.hero');
  const videoWrap = document.querySelector('.hero__video-wrap');
  const content = document.querySelector('.hero__content');
  if (!hero || !videoWrap || !content || CONFIG.reducedMotion) return () => {};
  let ticking = false;
  function updateScroll() {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;
    if (scrollY < heroHeight) {
      const progress = scrollY / heroHeight;
      const scale = 1 + progress * 0.15;
      const opacity = 1 - progress * 0.8;
      videoWrap.style.transform = `scale(${scale})`;
      content.style.transform = `translateY(${scrollY * 0.3}px)`;
      content.style.opacity = opacity;
    }
    ticking = false;
  }
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}

export function initTechNav() {
  const techLinks = document.querySelectorAll('.tech-nav__link');
  if (!techLinks.length) return () => {};
  const sections = [];
  techLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const section = document.getElementById(href.substring(1));
      if (section) sections.push({ link, section });
    }
  });
  if (!sections.length) return () => {};
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          techLinks.forEach(l => l.classList.remove('tech-nav__link--active'));
          const match = sections.find(s => s.section === entry.target);
          if (match) match.link.classList.add('tech-nav__link--active');
        }
      });
    },
    { threshold: 0.2, rootMargin: '-100px 0px -60% 0px' }
  );
  sections.forEach(({ section }) => observer.observe(section));
  return () => observer.disconnect();
}

export function initMobileKeyboard() {
  if (!CONFIG.isTouchDevice) return () => {};
  const nav = document.querySelector('.nav-float');
  if (!nav || !window.visualViewport) return () => {};
  const onResize = () => {
    const heightDiff = window.innerHeight - window.visualViewport.height;
    nav.style.display = heightDiff > 150 ? 'none' : '';
  };
  window.visualViewport.addEventListener('resize', onResize);
  return () => window.visualViewport.removeEventListener('resize', onResize);
}
