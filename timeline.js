document.addEventListener('DOMContentLoaded', () => {
  
    const timelineContents = gsap.utils.toArray('.timeline-content');
  
    function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
  
    function setupAnimations() {
      const isMobile = window.innerWidth <= 768; // Adjust this breakpoint as needed

  
      timelineContents.forEach((content, i) => {
        let direction;
        if (isMobile) {
          direction = 1; // Always animate from right on mobile
        } else {
          direction = content.parentElement.classList.contains('left') ? -1 : 1;
        }
  
        gsap.set(content, { 
          opacity: 0,
          x: isMobile ? 20 : 50 * direction // Smaller offset for mobile
        });
  
        ScrollTrigger.create({
          trigger: content,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          animation: gsap.to(content, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out"
          })
        });
      });
    }
  
    // Initial setup
    setupAnimations();
  
    // Rerun on window resize with debounce
    window.addEventListener('resize', debounce(setupAnimations, 250));
  });