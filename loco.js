window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
  
    revealTextAnimation();
    ultraSliderAnimation();
  });
  
  const revealTextAnimation = () => {
    const split = new SplitText(".textreveal-wrapper p", {
      type: "chars,words,lines"
    });
  
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".textreveal-section",
          start: "center center",
          end: "+=150%",
          pin: ".pinme",
          scrub: 0.75
        }
      })
      .set(
        split.chars,
        {
          color: "#000",
          stagger: 0.1
        },
        0.1
      );
  };
  
  const ultraSliderAnimation = () => {
    const section = document.querySelector(".ultra-slider-section");
    const container = document.querySelector(".ultra-slider-container");
  
    const cards = gsap.utils.toArray(".ultra-slider-card-container");
    gsap.to(cards, {
      xPercent: -100 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: 1,
        pin: ".pinme",
        pinnedContainer: ".pinme",
        end: () => "+=" + container.offsetWidth
      }
    });
  
    gsap.set(".ultra-slider-img2", {
      z: -1000
    });
  };
  