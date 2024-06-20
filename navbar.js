document.addEventListener('DOMContentLoaded', () => {
    gsap.from('#nav #sections #section', {
        duration: 1,
        x: 100, // Start off-screen to the right
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2, // Staggered animation
        delay: 0.3, // Delay after name animation
    });
});