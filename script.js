// Smooth scrolling functionality for navigation links
document.addEventListener('DOMContentLoaded', function() {
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
});
