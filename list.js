gsap.registerPlugin(ScrollTrigger);

const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
const cursorCircle = document.querySelector('.cursor-circle');
const cursorImage = document.querySelector('.cursor-image');
const projects = document.querySelectorAll('.project');

// project hover effect
projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    const imageUrl = project.getAttribute('data-image');
    
    gsap.to(cursor, {
      width: 100,
      height: 100,
      duration: 0.3
    });

    gsap.to(cursorCircle, {
      width: 320,
      height: 320,
      borderRadius: 0,
      duration: 0.3
    });
    
    gsap.to(cursorDot, {
      width: 310,
      height: 310,
      borderRadius: 0,
      duration: 0.3
    });
    
    gsap.to(cursorImage, {
      width: 300,
      height: 300,
      opacity: 1,
      duration: 0.3,
    });

    gsap.to(cursorImage, {
        scale: 1,
        duration: 0.2,
        delay: 0.1,
      });
    
    cursorImage.style.backgroundImage = `url(${imageUrl})`;
  });

  project.addEventListener('mouseleave', () => {

    cursorImage.style.backgroundImage = `none`;
    gsap.to(cursor, {
      width: 20,
      height: 20,
      duration: 0.3
    });

    gsap.to(cursorCircle, {
      width: 25,
      height: 25,
      borderRadius: '50%',
      duration: 0.3
    });
    
    gsap.to(cursorDot, {
      width: 6,
      height: 6,
      borderRadius: '50%',
      duration: 0.3
    });
    
    gsap.to(cursorImage, {
      width: 0,
      height: 0,
      opacity: 0,
      duration: 0,
      scale: 0,
    });

    
  });
});