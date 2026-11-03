import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from '../i18n/LanguageContext';
import '../styles/ImageLightbox.css';

export default function ImageLightbox(props) {
  return <LightboxDialog key={props.image.fullImage} {...props} />;
}

function LightboxDialog({ image, credit, creditLabel, onClose }) {
  const { t } = useTranslation();
  const [status, setStatus] = useState('loading');
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
      if (event.key === 'Tab') {
        const elements = [...dialogRef.current.querySelectorAll('a[href], button:not([disabled])')];
        const first = elements[0];
        const last = elements.at(-1);
        if (event.shiftKey && (document.activeElement === first || !dialogRef.current.contains(document.activeElement))) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !dialogRef.current.contains(document.activeElement))) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [onClose]);

  return createPortal(
    <div className="lightbox" onClick={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div ref={dialogRef} className="lightbox-content" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="lightbox-image-container" aria-busy={status === 'loading'}>
          {status === 'error' ? (
            <p className="lightbox-error" role="status">
              {t.lightbox.loadError}
              <a href={image.fullImage} target="_blank" rel="noopener noreferrer">{t.lightbox.viewOriginal}</a>
            </p>
          ) : (
            <img src={image.fullImage} alt={image.title} className="lightbox-image"
              onLoad={() => setStatus('loaded')} onError={() => setStatus('error')}
              style={{ opacity: status === 'loaded' ? 1 : 0, transition: 'opacity 0.3s ease' }} />
          )}
        </div>
        <div className="lightbox-info">
          <h3 id={titleId}>{image.title}</h3>
          {credit && (
            <div className="lightbox-author">
              <span className="author-label">{creditLabel}:</span>
              <a href={credit.url} target="_blank" rel="noopener noreferrer" className="author-name">{credit.name}</a>
            </div>
          )}
          {image.description && <p className="lightbox-description">{image.description}</p>}
        </div>
        <button ref={closeRef} className="lightbox-close" onClick={onClose} aria-label={t.lightbox.close}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M15 1L1 15M1 1L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>, document.body,
  );
}
