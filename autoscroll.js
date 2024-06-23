gsap.registerPlugin(ScrollTrigger);

const text = document.querySelector('.autoscroll');
const container = document.querySelector('.scroll-container');

let lastScrollTop = 0;
let direction = 1;
let position = -51.7; // first move to the end position

gsap.to (text,{
  transform: `translateX(${position}%)`,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top 0%",
    end: "bottom 99%",
    scrub: 5,
  }
});
