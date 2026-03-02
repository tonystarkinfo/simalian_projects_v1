import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WHATSAPP_NUMBER = '351000000000'; // Número sem + ou espaços para wa.me

export default function WhatsAppFloat() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [initialSent, setInitialSent] = useState(false);
  const chatRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    setInitialSent(false);
    const t1 = setTimeout(() => setInitialSent(true), 400);
    const t2 = setTimeout(() => inputRef.current?.focus(), 500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e) {
      if (chatRef.current && !chatRef.current.contains(e.target) && !e.target.closest('.whatsapp-float__btn')) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  function handleSend(e) {
    e.preventDefault();
    const text = message.trim();
    if (!text) return;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setMessage('');
    setOpen(false);
  }

  return (
    <div className="whatsapp-float" ref={chatRef}>
        {open && (
          <div className="whatsapp-float__chat">
            <header className="whatsapp-float__chat-header">
              <div className="whatsapp-float__chat-avatar">
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
              </div>
              <div className="whatsapp-float__chat-info">
                <span className="whatsapp-float__chat-name">{t('whatsapp.companyName')}</span>
                <span className="whatsapp-float__chat-status">{t('whatsapp.status')}</span>
              </div>
              <button
                type="button"
                className="whatsapp-float__chat-close"
                onClick={() => setOpen(false)}
                aria-label={t('whatsapp.close')}
              >
                <i className="fa-solid fa-times" aria-hidden="true"></i>
              </button>
            </header>
            <div className="whatsapp-float__chat-body">
              {initialSent && (
                <div className="whatsapp-float__msg whatsapp-float__msg--in">
                  <span className="whatsapp-float__msg-bubble">{t('whatsapp.initialMessage')}</span>
                </div>
              )}
            </div>
            <form className="whatsapp-float__chat-footer" onSubmit={handleSend}>
              <input
                ref={inputRef}
                type="text"
                className="whatsapp-float__input"
                placeholder={t('whatsapp.placeholder')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-label={t('whatsapp.placeholder')}
              />
              <button
                type="submit"
                className="whatsapp-float__send"
                disabled={!message.trim()}
                aria-label={t('whatsapp.send')}
              >
                <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        )}
        <button
          type="button"
          className="whatsapp-float__btn"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? t('whatsapp.close') : t('whatsapp.open')}
          aria-expanded={open}
        >
          <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
        </button>
      </div>
  );
}
