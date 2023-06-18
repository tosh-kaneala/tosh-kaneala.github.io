// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Toggle mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Dynamic year in the footer
const footerYear = document.querySelector('.footer-year');
const currentYear = new Date().getFullYear();
footerYear.textContent = currentYear;

// Intersection Observer for scroll animations
const sections = document.querySelectorAll('section');

const sectionOptions = {
  threshold: 0.5
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, sectionOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});

// Lightbox for project images
const projectImages = document.querySelectorAll('.project-image');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

projectImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    lightbox.classList.add('show');
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    document.body.classList.add('lightbox-open');
    document.addEventListener('keydown', handleLightboxKeydown);

    // Enable image navigation with keyboard arrow keys
    const previousImageIndex = (index + projectImages.length - 1) % projectImages.length;
    const nextImageIndex = (index + 1) % projectImages.length;

    lightboxImage.setAttribute('data-previous', previousImageIndex);
    lightboxImage.setAttribute('data-next', nextImageIndex);
  });
});

lightboxClose.addEventListener('click', closeLightbox);

function closeLightbox() {
  lightbox.classList.remove('show');
  document.body.classList.remove('lightbox-open');
  document.removeEventListener('keydown', handleLightboxKeydown);
}

function handleLightboxKeydown(event) {
  if (event.key === 'Escape') {
    closeLightbox();
  }

  if (event.key === 'ArrowLeft') {
    const previousImageIndex = lightboxImage.getAttribute('data-previous');
    const previousImage = projectImages[previousImageIndex];
    lightboxImage.src = previousImage.src;
    lightboxImage.alt = previousImage.alt;
    lightboxImage.setAttribute('data-previous', (parseInt(previousImageIndex) + projectImages.length - 1) % projectImages.length);
    lightboxImage.setAttribute('data-next', lightboxImage.getAttribute('data-next'));
  }

  if (event.key === 'ArrowRight') {
    const nextImageIndex = lightboxImage.getAttribute('data-next');
    const nextImage = projectImages[nextImageIndex];
    lightboxImage.src = nextImage.src;
    lightboxImage.alt = nextImage.alt;
    lightboxImage.setAttribute('data-previous', lightboxImage.getAttribute('data-previous'));
    lightboxImage.setAttribute('data-next', (parseInt(nextImageIndex) + 1) % projectImages.length);
  }
}

// Particle background
// particlesJS.load('particles-js', 'particles.json', function() {
  // console.log('Particles loaded');
});

// Scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});
