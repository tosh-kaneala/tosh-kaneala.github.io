document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling on anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection Observer for fade-in animation
  const sections = document.querySelectorAll('.section');

  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn-animation');
        observer.unobserve(entry.target);
      }
    });
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // Scroll to top button
  const scrollToTopButton = document.querySelector('.scroll-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
