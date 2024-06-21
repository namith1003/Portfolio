document.addEventListener('DOMContentLoaded', () => {
    gsap.from('#nav #sections #section', {
        duration: 1,
        x: 100, // Start off-screen to the right
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1, // Staggered animation
        delay: 0.2, // Delay after name animation
    });
});

// Wrap code in a DOMContentLoaded event listener to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".hover-cursor h4");

    const followStrengthx = 0.3; // Adjust follow strength (higher value = more movement)
    const followStrengthy = 0.5; // Adjust follow strength (higher value = more movement)

    // Add event listeners to each section
    sections.forEach(section => {
        section.addEventListener("mousemove", function(dets){
            // GSAP animation to follow mouse within section bounds
            gsap.to(section, {
                duration: 0.3,
                x: (dets.x - section.offsetLeft - (section.offsetWidth / 2)) * followStrengthx,
                y: (dets.y - section.offsetTop - (section.offsetHeight / 2)) * followStrengthy,
                ease: "power3.out"
            });
        });

        section.addEventListener("mouseleave", () => {
            // Return section to original position on mouseleave
            gsap.to(section, {
                duration: 0.4,
                x: 0,
                y: 0,
                ease: "bounce.out"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const btnClick = document.querySelector('.name-bar');
    const cbd = document.querySelector('.cbn');

    btnClick.addEventListener('mouseenter', () => {
        gsap.to(cbd, { x: -128, duration: 1, ease: "power1.inOut" }); // Adjust to ensure it stops before the copyright symbol
    });

    btnClick.addEventListener('mouseleave', () => {
        gsap.to(cbd, { x: 0, duration: 1, ease: "bounce.out" });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('#sections h4');

    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            gsap.to(section, { opacity: 1, duration: 0.4 });
        });

        section.addEventListener('mouseleave', () => {
            gsap.to(section, { opacity: 0.6, duration: 0.4 });
        });
    });
});









