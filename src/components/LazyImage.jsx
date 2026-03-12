import { useState, useEffect } from 'react';

/**
 * Imagem com placeholder suave e transição de fade-in ao carregar.
 * Reduz sensação de travamento enquanto as imagens carregam.
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  loading = 'lazy',
  width,
  height,
  fetchPriority,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  function handleLoad() {
    setLoaded(true);
  }

  return (
    <span className={`lazy-img-wrap ${loaded ? 'is-loaded' : ''} ${wrapperClassName}`.trim()}>
      <span className="lazy-img-placeholder" aria-hidden="true" />
      <img
        className={`lazy-img ${className}`.trim()}
        src={src}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        fetchPriority={fetchPriority}
        decoding="async"
        onLoad={handleLoad}
        {...rest}
      />
    </span>
  );
}
