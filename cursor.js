document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    const cursorImage = document.querySelector('.cursor-image');

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
            y: dotY,
        });

        gsap.set(cursorCircle, {
            x: circleX,
            y: circleY,
        });

        const halfSize = 15.5 * (Math.max(window.innerWidth, window.innerHeight) / 100) / 2;

        gsap.set(cursorImage, {
        x: dotX - halfSize,
        y: dotY - halfSize
        });
    });
});