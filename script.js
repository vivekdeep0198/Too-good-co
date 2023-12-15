// function scrollbar(){
// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
// gsap.to(".nav1 svg",{
//     transform:'translateY(-100%)',
//     scrollTrigger:{
//         trigger:".page2",
//         scroller:".main",
//         markers:true,
//         start:"top -2%",
//         end:"top 5%",
//         scrub:2
//     }
// })


const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
  
  
  
  const videoContainer = document.querySelector(".video-container");
    const playBtn = document.querySelector(".play-btn")
    const page2 = document.querySelector(".page2")

    //when mouse enter the video container to dikhna suru ho jayega 
    function mousEnter(){
    videoContainer.addEventListener("mouseenter",function(){
    //   alert(".hey");
    //   playBtn.style.opacity = 1,
    //   playBtn.style.scale =1
       gsap.to(playBtn,{
        scale:1,
        opacity:1
       });
    })
}
mousEnter();

//when mouse leave the video container wo gayab ho jayega 
    
    function mouseLeave(){
    videoContainer.addEventListener("mouseleave",function(){
        gsap.to(playBtn,{
            scale:0,
            opacity:0
        })
    })
}
mouseLeave();

//when mouse moving on the video container 
function mousemoving(){
videoContainer.addEventListener("mousemove",function(dets){
    gsap.to(playBtn,{
        left:dets.x,
        top:dets.y
    })
})
}
mousemoving();

// page1 h1 content loading animation 
function page1h1animation(){
gsap.from(".page1 h1",{
    y:100,
    opacity:0,
    delay:5.2,
    stagger:0.2,
    duration:0.8
})
}
page1h1animation();

function page4CardAnimation(){
document.addEventListener("mousemove", function(elem){
    gsap.to(".cursor",{
        left:elem.x,
        top:elem.y
    })
})

document.querySelector("#card1").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
        transform: 'translate(-50%,-50%) scale(1)',
    })
})
document.querySelector("#card1").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
        transform: 'translate(-50%,-50%) scale(0)'
    })
})
document.querySelector("#card2").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
        transform: 'translate(-50%,-50%) scale(1)',
    })
})
document.querySelector("#card2").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
        transform: 'translate(-50%,-50%) scale(0)'
    })
})
document.querySelector("#card3").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
        transform: 'translate(-50%,-50%) scale(1)'
    })
})
document.querySelector("#card3").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
        transform: 'translate(-50%,-50%) scale(0)'
    })
})
document.querySelector("#card4").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
        transform: 'translate(-50%,-50%) scale(1)',
    })
})
document.querySelector("#card4").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
        transform: 'translate(-50%,-50%) scale(0)'
    })
})
}
page4CardAnimation();

const timeline = gsap.timeline()

function loaderAnimation(){
    timeline.from("#loader h3",{
      x:40,
      opacity:0,
      duration:2,
      stagger: 0.2
    })
    timeline.to("#loader h3",{
      opacity:0,
      x:-40,
      duration:2,
      stagger:0.2
    })
    timeline.to("#loader",{
      opacity:0,
      display:"none"
    })
    }
    loaderAnimation();
