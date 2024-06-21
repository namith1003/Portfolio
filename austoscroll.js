gsap.registerPlugin(ScrollTrigger);

const text = document.querySelector('.autoscroll');
const textWidth = text.offsetWidth;
const windowWidth = window.innerWidth;

// Calculate the distance to move
const distance = textWidth - windowWidth;

// Create the timeline
const tl = gsap.timeline({
  repeat: -1, // Repeat indefinitely
  yoyo: true, // Reverse the animation
  ease: "linear"
});

// Add the animation to the timeline
tl.to(text, {
  x: -1000,
  duration: 15, // Adjust this value to change the speed
  ease: "linear"
});

// Play the timeline
tl.play();