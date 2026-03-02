/**
 * Init effects — scroll reveal, counters, smooth scroll, modal gallery.
 * Called from App useEffect after route change.
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
