document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');

    // Initial positions
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let circleX = mouseX;
    let circleY = mouseY;

    const dotSpeed = 0.2; // Speed for the dot
    const circleSpeed = 0.1; // Speed for the circle

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    gsap.ticker.add(() => {
        dotX += (mouseX - dotX) * dotSpeed;
        dotY += (mouseY - dotY) * dotSpeed;
        circleX += (mouseX - circleX) * circleSpeed;
        circleY += (mouseY - circleY) * circleSpeed;

        gsap.set(cursorDot, {
            x: dotX,
            y: dotY
        });

        gsap.set(cursorCircle, {
            x: circleX,
            y: circleY
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.name', { duration: 1, x: -50, opacity: 0, ease: 'power3.out' });
    gsap.from('.nav-item', {
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2, // Staggered animation
        delay: 0.5 // Delay after name animation
    });
});

