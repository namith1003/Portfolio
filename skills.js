document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.skill-category', {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out'
    });
  });