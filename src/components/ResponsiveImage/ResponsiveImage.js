// src/components/ResponsiveImage/ResponsiveImage.js
import React, { useState, useEffect } from 'react';
import './ResponsiveImage.css';

const ResponsiveImage = ({ 
  src, 
  alt, 
  mobileSrc, 
  tabletSrc, 
  desktopSrc,
  className = '',
  lazy = true,
  onClick,
  onLoad,
  fallbackSrc = '/assets/img/placeholder.jpg'
}) => {
  const [imageSrc, setImageSrc] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const updateImageSrc = () => {
      const width = window.innerWidth;
      let newSrc = src;

      if (width <= 480 && mobileSrc) {
        newSrc = mobileSrc;
      } else if (width <= 768 && tabletSrc) {
        newSrc = tabletSrc;
      } else if (desktopSrc) {
        newSrc = desktopSrc;
      }

      setImageSrc(newSrc);
    };

    updateImageSrc();
    window.addEventListener('resize', updateImageSrc);

    return () => window.removeEventListener('resize', updateImageSrc);
  }, [src, mobileSrc, tabletSrc, desktopSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setError(true);
    setImageSrc(fallbackSrc);
  };

  return (
    <div className={`responsive-image-container ${className}`}>
      {!isLoaded && !error && (
        <div className="image-placeholder">
          <div className="placeholder-shimmer"></div>
        </div>
      )}
      <img
        src={error ? fallbackSrc : imageSrc}
        alt={alt}
        className={`responsive-image ${isLoaded ? 'loaded' : 'loading'}`}
        loading={lazy ? 'lazy' : 'eager'}
        onClick={onClick}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default ResponsiveImage;