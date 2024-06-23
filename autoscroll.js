
function initScrollLetters() {
  let direction = 1; // 1 = forward, -1 = backward scroll
  const rollContainer = roll(".big-name .name-wrap", {duration: 40});

  
  // check the direction of the body and adjust the scrolling direction for the name 
  const scroll = ScrollTrigger.create({
    trigger: document.body,
    onUpdate(scroller) {
      if (scroller.direction !== direction) {
        direction *= -1;
        gsap.to(rollContainer, {timeScale: direction, overwrite: true});
      }
    }
  });

  function roll(targets, vars) {
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    const tl = gsap.timeline({
      repeat: -1,
      onReverseComplete() { 
        this.totalTime(this.rawTime() + this.duration() * 10);
      }
    });
    
    const elements = gsap.utils.toArray(targets);
    const clones = elements.map(el => {
      let clone = el.cloneNode(true);
      el.parentNode.appendChild(clone);
      return clone;
    });

    const positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {
      position: "absolute",
      overwrite: false,
      top: el.offsetTop,
      left: el.offsetLeft + el.offsetWidth
    }));

    positionClones();
    elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: -100, ...vars}, 0));

    window.addEventListener("resize", () => {
      let time = tl.totalTime();
      tl.totalTime(0);
      positionClones();
      tl.totalTime(time);
    });

    return tl;
  }

  rollContainer.play();
}

// Initialize the scroll letters effect
initScrollLetters();
