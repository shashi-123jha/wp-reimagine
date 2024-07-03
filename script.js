var crsr = document.querySelector("#cursor")


document.addEventListener("mousemove" , function(dets){
crsr.style.left = dets.x+30+"px",
crsr.style.top = dets.y+"px"

// for the blur parts 
crsrb.style.left = dets.x - 250 +"px"
   
})

document.addEventListener("mousemove" , function(dets){

   
})


const targetDiv = document.querySelector('#video-call-img img');

// page3 

targetDiv.addEventListener('mouseenter', () => {
  crsr.style.scale=3
  crsr.style.border = "1px solid #fff"
  crsr.style.backgroundColor = "transparent"
  crsr.innerHTML = '<h6> Video call </h6>'
  crsr.style.fontSize = '8px'
  crsr.style.display = 'flex';
  crsr.style.justifyContent = 'center'
 crsr.style.alignItems = 'center';
 crsr.style.paddingLeft = '0.3vw';
 crsr.style.placeItems = 'center';
 crsr.style.color= '#1C1E21'

 

});

targetDiv.addEventListener('mouseleave', () => {
  crsr.style.scale=1
  crsr.style.border = "1px solid #fff"
  crsr.style.backgroundColor = "green"
  crsr.innerHTML = '';
  

});

// page4 
const targetDiv4 = document.querySelector('.left-page4 ');


targetDiv4.addEventListener('mouseenter', () => {
  crsr.style.scale=4
  crsr.style.border = "1px solid #fff"
  crsr.style.backgroundColor = "transparent"
  crsr.innerHTML = '<h6>privacy</h6>'
  crsr.style.fontSize = '8px'
  crsr.style.display = 'flex';
  crsr.style.justifyContent = 'center'
 crsr.style.alignItems = 'center';
 crsr.style.paddingLeft = '0.1vw';
 crsr.style.placeItems = 'center';
 crsr.style.color= '#25D366'
});

targetDiv4.addEventListener('mouseleave',  () => {
  crsr.style.scale=1
  crsr.style.border = "1px solid #fff"
  crsr.style.backgroundColor = "green"
  crsr.innerHTML = '';
  

});

// page 5

const targetDiv5 = document.querySelector('#chat-call-img img');


targetDiv5.addEventListener('mouseenter', () => {
  crsr.style.scale=3
  crsr.style.border = "1px solid #fff"
  crsr.style.backgroundColor = "transparent"
  crsr.innerHTML = '<h6> group chat </h6>'
  crsr.style.fontSize = '8px'
  crsr.style.display = 'flex';
  crsr.style.justifyContent = 'center'
 crsr.style.alignItems = 'center';
 crsr.style.paddingLeft = '0.3vw';
 crsr.style.placeItems = 'center';
});

targetDiv5.addEventListener('mouseleave', () => {
  crsr.style.scale=1
  crsr.style.border = "1px solid #fff"
  crsr.style.backgroundColor = "green"
  crsr.innerHTML = '';
  

});    


// go down
document.querySelector('#arrow').addEventListener('click', function() {
  window.location.href = '#page8';
});

document.querySelector('#arrow1').addEventListener('click', function() {
  window.location.href = '#page1';
});

// ham burger 

document.querySelector('#hamburger i').addEventListener('click', function() {
  window.location.href = '#page1';
});


// page6 
const targetDiv6 = document.querySelector('#webimg ');


targetDiv6.addEventListener('mouseenter', () => {
  crsr.style.scale=4
  crsr.style.border = "1px solid #fff"
  crsr.style.backgroundColor = "transparent"
  crsr.innerHTML = '<h6>Web</h6>'
  crsr.style.fontSize = '8px'
  crsr.style.display = 'flex';
  crsr.style.justifyContent = 'center'
 crsr.style.alignItems = 'center';
 crsr.style.paddingLeft = '0.1vw';
 crsr.style.placeItems = 'center';
 crsr.style.color= '#1C1E21'
});

targetDiv6.addEventListener('mouseleave',  () => {
  crsr.style.scale=1
  crsr.style.border = "1px solid #fff"
  crsr.style.backgroundColor = "#25D366"
  crsr.innerHTML = '';
  

});


// on hover the video on page 2 will pause 
document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('pau');
  var pauseTimeout;

  video.addEventListener('mouseover', function () {
      pauseTimeout = setTimeout(function () {
          video.pause();
      }, 0.6); // 2000 milliseconds = 2 seconds
  });

  video.addEventListener('mouseout', function () {
      clearTimeout(pauseTimeout);
      video.play();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('pal');
  var pauseTimeout;

  video.addEventListener('mouseover', function () {
      pauseTimeout = setTimeout(function () {
          video.pause();
      }, 0.6); // 2000 milliseconds = 2 seconds
  });

  video.addEventListener('mouseout', function () {
      clearTimeout(pauseTimeout);
      video.play();
  });
});



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

tl.from("#full h4 , #meta",{
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
  trigger: "#page2 ",
  scroller: "body",
  // markers:true,
  start: "top 75%",
  end: "top 60%",
  scrub: 2,
},
})

/*
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
*/



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



// page7 scroll
document.getElementById('forward-page7').addEventListener('click', function() {
  var scrollContainer = document.getElementById('rignt-page7');
  scrollContainer.scrollBy({
    top: 0,
    left: 400, // Amount to scroll by (change as needed)
    behavior: 'smooth' // Smooth scrolling
  });
});
document.getElementById('back-page7').addEventListener('click', function() {
  var scrollContainer = document.getElementById('rignt-page7');
  scrollContainer.scrollBy({
    top: 0,
    left: -400, // Amount to scroll by (negative value for left direction)
    behavior: 'smooth' // Smooth scrolling
  });
});

// hamburger screen scroll off 


// pge5exp scroll in horozontal direction 
