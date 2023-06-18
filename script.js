document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling functionality for navigation links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
  for (let smoothScrollLink of smoothScrollLinks) {
    smoothScrollLink.addEventListener('click', function(event) {
      event.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  }
  
  // Lazy loading for project images
  const projectImages = document.querySelectorAll('.project-grid img');
  
  const lazyLoad = target => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          img.setAttribute('src', src);
          img.classList.add('fade-in');
          
          observer.unobserve(img);
        }
      });
    });
    
    observer.observe(target);
  };
  
  projectImages.forEach(lazyLoad);
  
  // Scroll reveal animation for project overlays
  const projectOverlays = document.querySelectorAll('.project-overlay');
  
  const scrollReveal = target => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const overlay = entry.target;
          overlay.classList.add('reveal');
          
          observer.unobserve(overlay);
        }
      });
    });
    
    observer.observe(target);
  };
  
  projectOverlays.forEach(scrollReveal);
});
