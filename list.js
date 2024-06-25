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
      borderRadius: 80,
      duration: 0.3
    });
    
    gsap.to(cursorDot, {
      width: 310,
      height: 310,
      borderRadius: 80,
      duration: 0.3
    });
    
    gsap.to(cursorImage, {
      width: 300,
      height: 300,
      opacity: 1,
      duration: 0.3,
      borderRadius: 800,
    });

    gsap.to(cursorImage, {
        scale: 1,
        duration: 0.2,
        delay: 0.1,
        zIndex: 1000
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



  const projectnames = document.querySelectorAll(".project-name");

  // Add event listeners to each section
  projectnames.forEach(project => {
          // GSAP animation to follow mouse within section bounds
          gsap.from(project, {
            duration: 0.5,
            x: 50,// Start off-screen to the right
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
              scroller: "body",
              trigger: project,
              start: "bottom 100%",
              end: "bottom 80%",
              toggleActions: "play none none reverse",
            }
        });
  });
