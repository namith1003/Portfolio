// Wrap code in a DOMContentLoaded event listener to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".sticky");

    

    // Add event listeners to each section
    sections.forEach(section => {
        const followStrengthx = section.getAttribute('xspeed');
        const followStrengthy = section.getAttribute('yspeed');
        section.addEventListener("mousemove", function(dets){
            // GSAP animation to follow mouse within section bounds
            gsap.to(section, {
                duration: 0.3,
                x: (dets.x - section.offsetLeft - section.offsetWidth/2) * followStrengthx,
                y: (dets.y - section.offsetTop - section.offsetHeight/2) * followStrengthy,
                ease: "ease.out"
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
    const sections = document.querySelectorAll(".sticky-image");

    

    // Add event listeners to each section
    sections.forEach(section => {
        const followStrengthx = section.getAttribute('xspeed');
        const followStrengthy = section.getAttribute('yspeed');
        section.addEventListener("mousemove", function(dets){
            // GSAP animation to follow mouse within section bounds
            gsap.to(section, {
                duration: 0.3,
                x: (dets.x - section.offsetLeft) * followStrengthx,
                y: (dets.y - section.offsetTop) * followStrengthy,
                ease: "ease.out"
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
        start: "top 70%",
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






