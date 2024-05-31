var crsr = document.querySelector("#cursor")


document.addEventListener("mousemove" , function(dets){
crsr.style.left = dets.x+30+"px",
crsr.style.top = dets.y+"px"

// for the blur parts 
crsrb.style.left = dets.x - 250 +"px"
   
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
    var h2 = document.querySelector("#h11 ")
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
    
    duration: 0.5,
    height: "10vh",
    scrollTrigger: {
      trigger: "#page1",
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

  


  var w1 = gsap.timeline()

  w1.from("#loader h1 , #loader img" , {
    x:90,
    opacity:0,
    duration:2,
    stagger:0.3,
      
  })

  w1.to("#loader",{
    opacity:0,
   
  })

  w1.to("#loader",{
    display:"none",
   
  })
 


  w1.from(" #stagger",{
    y:30,
    opacity:0,
    duration:1,
    stagger:0.1
    
  })

  gsap.from("#page1 h1",{
    y: 190,
  opacity: 0,
  delay:3,
  duration: 3,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#page1",
    // markers:true,
    start: "top 75%",
    end: "top 60%",
    scrub: 2,
  },
  })



gsap.from("#video-call-img img , .left-page3 ",{
  y: 190,
 
opacity: 0,
duration: 3,
scrollTrigger: {
  trigger: "#page3",
  scroller: "body",
  // markers:true,
  start: "top 75%",
  end: "top 60%",
  scrub: 2,
},
})

gsap.from("#upper video , #middle h2  ",{
  y: 190,
opacity: 0,
delay:0.3,
duration: 3,
scrollTrigger: {
  trigger: "#page2",
  scroller: "body",
  // markers:true,
  start: "top 75%",
  end: "top 60%",
  scrub: 2,
},
})

gsap.from("#lower video ",{
  y: 30,
opacity: 0,
delay:0.3,
duration: 3,
scrollTrigger: {
  trigger: "#lower ",
  scroller: "body",
  // markers:true,
  start: "top 75%",
  end: "top 60%",
  scrub: 2,
},
})

gsap.from(".left-page4 ,#txt , #scroller ,#scroller-last h4  ",{
  y: 190,
opacity: 0,
duration: 3,
scrollTrigger: {
  trigger: "#page4",
  scroller: "body",
  // markers:true,
  start: "top 75%",
  end: "top 60%",
  scrub: 3,
},
})


gsap.from(" #left-page5 ,#right-page5  ",{
  y: 190,

opacity: 0,
duration: 3,
scrollTrigger: {
  trigger: "#page5",
  scroller: "body",
  // markers:true,
  start: "top 75%",
  end: "top 60%",
  scrub: 2,
},
})

gsap.from(" .container-page6 ",{
  y: 190,

opacity: 0,
duration:3 ,
scrollTrigger: {
  trigger: "#page6",
  scroller: "body",
  stagger:1,
  // markers:true,
  start: "top 75%",
  end: "top 60%",
  scrub: 2,
},
})

gsap.from("  .project-section-container",{
  y: 190,

opacity: 0,
duration:3 ,
scrollTrigger: {
  trigger: "#page7",
  scroller: "body",
  stagger:0.1,
  // markers:true,
  start: "top 75%",
  end: "top 60%",
  scrub: 1,
},
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



gsap.from("#cards-container",{
  y: 190,
 
opacity: 0,
duration: 3,
scrollTrigger: {
  trigger: "#page7",
  scroller: "body",
  // markers:true,
  start: "top 75%",
  end: "top 60%",
  scrub: 2,
},
})
