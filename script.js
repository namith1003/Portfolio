// Wrap code in a DOMContentLoaded event listener to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".sticky");

    const followStrengthx = 0.3; // Adjust follow strength (higher value = more movement)
    const followStrengthy = 0.6; // Adjust follow strength (higher value = more movement)

    // Add event listeners to each section
    sections.forEach(section => {
        section.addEventListener("mousemove", function(dets){
            // GSAP animation to follow mouse within section bounds
            gsap.to(section, {
                duration: 0.3,
                x: (dets.x - section.offsetLeft - (section.offsetWidth / 2)) * followStrengthx,
                y: (dets.y - section.offsetTop - (section.offsetHeight / 2)) * followStrengthy,
                ease: "back.out"
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
    const waveElements = document.querySelectorAll(".wave");
    const targetColor = "#ff7f50";

    waveElements.forEach(element => {
        let tl = gsap.timeline({ paused: true });

        tl.to(element, {
            duration: 0.3,
            backgroundColor: targetColor,
            ease: "power2.out"
        });

        element.addEventListener("mouseenter", function() {
            tl.play();
        });

        element.addEventListener("mouseleave", function() {
            tl.reverse();
        });
    });
});




gsap.registerPlugin(ScrollTrigger);

const circle = document.querySelector('.circle');
let circleTL = gsap.timeline({
    paused: true,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 85%",
        onEnter: () => {
            circleTL.play();
        },
        onLeaveBack: () => {
            circleTL.reverse();
        },
    }
});

circleTL.to(circle, {
    scale: 2,
    duration: 0.3,
    ease: "ease-in"
});
