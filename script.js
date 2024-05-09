// locomotive.js code 
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp:0.3,
});

var crsr = document.querySelector("#cursor")
var crsrb = document.querySelector("#cursor-blur")

document.addEventListener("mousemove" , function(dets){
crsr.style.left = dets.x+30+"px",
crsr.style.top = dets.y+"px"

// for the blur parts 
crsrb.style.left = dets.x - 250 +"px",
crsrb.style.top = dets.y - 250 +"px"
   
})



document.addEventListener("mousemove" , function(dets){

   
})


// on hover image will  be shown on  the page 

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });

// logo animation 

function breakTheText() {
    var h2 = document.querySelector("#h11")
var h2Text  = h2.textContent

var splitedtext = h2Text.split("")

var clutter =""

splitedtext.forEach(function(elem){
clutter += `<span>${elem}</span>`
})
h2.innerHTML = clutter

  }

  // we call the breakTheText()
  breakTheText()

   gsap.from("#h11 span", { 
    y: 50, // End position along the x-axis
    opacity:0,
    duration:0.7,
    delay:0.5,
    stagger:0.15,
    repeat: -1, // Infinite repeat
    repeatDelay: 1, // Delay between repeats (in seconds)
    yoyo: true

   
  });


  // nav bar
  gsap.to("#nav-bar", {
    backgroundColor: "#fcf5ebc9",
    duration: 0.5,
    height: "10vh",
    scrollTrigger: {
      trigger: "#nav-bar",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  // hamburger making 
  var menu = document.querySelector("#hamburger i")
  var cross = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full",{
  left:"0",
  duration:0.7,

})

tl.from("#full h4",{
  y:140,
  duration:0.7,
  stagger:0.2,
  opacity:0,
})

tl.from("#full i", {
  opacity:0,
  
})
tl.pause()

menu.addEventListener("click", function(){
tl.play()
})

cross.addEventListener("click", function(){
  tl.reverse()
  })
  
