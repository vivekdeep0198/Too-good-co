// 1. Locomotive Scroll ya Smooth Scrolling Setup (Optional but recommended)
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// 2. Loader Animation
function loaderAnimation() {
    let tl = gsap.timeline();
    tl.from("#loader h3", {
        x: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    });
    tl.to("#loader h3", {
        opacity: 0,
        x: -40,
        duration: 1,
        stagger: 0.1
    });
    tl.to("#loader", {
        opacity: 0,
        display: "none"
    });
}

// 3. Custom Cursor Follower (Jo aapke CSS mein .cursor class hai)
function cursorAnimation() {
    let page1Content = document.querySelector(".page1");
    let cursor = document.querySelector(".cursor");

    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
            scale: 1,
            opacity: 1
        });
    });

    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        });
    });
}

// 4. Video Play Button Animation (Cursor ke saath move hona)
function videoAnimation() {
    let videoCon = document.querySelector(".video-container");
    let playbtn = document.querySelector(".play-btn");

    videoCon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        });
    });

    videoCon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        });
    });

    videoCon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 70,
            top: dets.y - 80
        });
    });
}

// 5. Hero Text Animation (Page 1 Heading)
function heroAnimation() {
    gsap.from(".page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3
    });
}

// Sabhi functions ko call karna
loaderAnimation();
cursorAnimation();
videoAnimation();
heroAnimation();
