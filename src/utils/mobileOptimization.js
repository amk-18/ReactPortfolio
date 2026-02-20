// src/utils/mobileOptimization.js

// Detect if device is mobile
export const isMobile = () => {
  return window.innerWidth <= 768;
};

// Detect if device is tablet
export const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024;
};

// Get responsive font size based on viewport
export const getResponsiveFontSize = (baseSize) => {
  const viewportWidth = window.innerWidth;
  if (viewportWidth <= 480) return baseSize * 0.8;
  if (viewportWidth <= 768) return baseSize * 0.9;
  return baseSize;
};

// Debounce function for resize events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Smooth scroll to element
export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 70;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Format date for mobile display
export const formatDateForMobile = (date) => {
  const d = new Date(date);
  const now = new Date();
  const diffTime = Math.abs(now - d);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

// Touch event handlers for mobile
export const handleTouchStart = (e) => {
  const touch = e.touches[0];
  return {
    x: touch.clientX,
    y: touch.clientY
  };
};

export const handleTouchMove = (startX, startY, e) => {
  if (!startX || !startY) return null;
  
  const touch = e.touches[0];
  const diffX = touch.clientX - startX;
  const diffY = touch.clientY - startY;
  
  return {
    diffX,
    diffY,
    isHorizontal: Math.abs(diffX) > Math.abs(diffY),
    isVertical: Math.abs(diffY) > Math.abs(diffX)
  };
};

// Mobile menu management
export class MobileMenuManager {
  constructor(menuElement, toggleButton) {
    this.menu = menuElement;
    this.toggle = toggleButton;
    this.isOpen = false;
    this.init();
  }
  
  init() {
    this.toggle.addEventListener('click', () => this.toggleMenu());
    document.addEventListener('click', (e) => this.handleOutsideClick(e));
    window.addEventListener('resize', () => this.handleResize());
  }
  
  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menu.classList.toggle('nav-open', this.isOpen);
    document.body.style.overflow = this.isOpen ? 'hidden' : '';
  }
  
  handleOutsideClick(e) {
    if (this.isOpen && !this.menu.contains(e.target) && !this.toggle.contains(e.target)) {
      this.toggleMenu();
    }
  }
  
  handleResize() {
    if (window.innerWidth > 768 && this.isOpen) {
      this.toggleMenu();
    }
  }
}

// Lazy loading for images
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
};

// Performance monitoring
export const monitorPerformance = () => {
  if ('performance' in window) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const domReadyTime = perfData.domComplete - perfData.domInteractive;
    
    console.log('📊 Performance Metrics:', {
      pageLoadTime: `${pageLoadTime}ms`,
      domReadyTime: `${domReadyTime}ms`,
      networkLatency: `${perfData.responseEnd - perfData.requestStart}ms`
    });
  }
};