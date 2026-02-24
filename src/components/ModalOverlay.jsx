import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/**
 * ModalOverlay — same structure and behavior as original modals.
 * isActive controls visibility; onClose for overlay/close/escape.
 * Body scroll lock applied when isActive (same as openModal/closeModal).
 */
export default function ModalOverlay({ id, titleId, title, isActive, onClose, children, footerLinkText = 'Solicitar Orçamento' }) {
  const modalRef = useRef(null);
  const savedScrollY = useRef(0);

  useEffect(() => {
    if (!isActive) return;
    savedScrollY.current = window.scrollY;
    document.body.classList.add('modal-open');
    document.body.style.top = `-${savedScrollY.current}px`;
    const focusable = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable?.length) setTimeout(() => focusable[0].focus(), 100);
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.top = '';
      window.scrollTo(0, savedScrollY.current);
    };
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;
    function handleKeydown(e) {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab') return;
      const modal = modalRef.current;
      if (!modal) return;
      const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstFocusable = focusable[0];
      const lastFocusable = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    }
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [isActive, onClose]);

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className={`modal-overlay ${isActive ? 'is-active' : ''}`}
      id={id}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={handleOverlayClick}
    >
      <div className="modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3 className="modal__title" id={titleId}>{title}</h3>
          <button type="button" className="modal__close" aria-label="Fechar" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div className="modal__body">
          {children}
        </div>
        <div className="modal__footer">
          <Link to="/contato" className="btn btn--primary btn--sm" onClick={onClose}>{footerLinkText}</Link>
        </div>
      </div>
    </div>
  );
}
