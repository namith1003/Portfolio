gsap.registerPlugin(ScrollTrigger);

const text = document.querySelector('.autoscroll');
const container = document.querySelector('.scroll-container');

let lastScrollTop = 0;
let direction = 1;
let position = -51.5; // first move to the end position

const startPos = 0.82; // position to go to when scrolling up
const endPos = -51.5; // position to go to when scrolling down

gsap.to (text,{
  transform: `translateX(${position}%)`,
  duration: 10,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top 0%",
    end: "bottom 90%",
    scrub: 5,
  }
});
