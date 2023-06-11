const nav = document.querySelector(".navbar");
const intro = document.querySelector(".intro");
const aloha = document.querySelector(".aloha");
const arrow = document.querySelector(".down-arrow");
const bio = document.querySelector(".bio");
const fog = document.querySelector(".fog");
const nav_left = document.getElementById("nav-left");


images = []
for (let i = 1; i <= 120; i++) {
    let image = new Image();
    image.src = `./AY_svg_seq/AY_svg_seq${i.toString().padStart(4, '0')}.svg`;
    images.push(image);
}

// init controller
var controller = new ScrollMagic.Controller();

/** PLAY SLIDING ANIMATION **/ 

var scene = new ScrollMagic.Scene({ triggerElement: intro, triggerHook: 0, duration: 1500 })
    // .addIndicators()
    .setPin(intro)
    .addTo(controller)
    .on("enter", function () {
        fog.style.opacity = 1;
    })
    .on("leave", function () {
        document.body.style.overflow = "auto";
        intro.style.position = 'fixed';
        // nav_left.style.width = "0px";
    })

// image index
let scrollpos = 0;
scene.on("update", e => {
    scrollpos = e.scrollPos * 0.09;
    scrollpos = scrollpos > 119 ? 119 : Math.round(scrollpos);
});

setInterval(() => {
    let myImg = intro.children[1];
    let newImg = images[scrollpos];
    if (newImg.src != myImg.src) {
        intro.replaceChild(newImg, myImg);
        aloha.style.opacity = (100 - scrollpos * 1.5) / 100 < 0 ? 0 : (100 - scrollpos * 1.5) / 100
        aloha.style.display = (100 - scrollpos * 1.5) / 100 < 0 ? "none" : "block"
        arrow.style.display = scrollpos > 10 ? "none" : "block"
    }
}, 0);



/** TURN SEQ INTO NAV **/ 

var tween = new TimelineMax()
    .fromTo(intro, 1, { height: '90vh' }, { height: '60px' })
    // .fromTo(imageContainer, 1, { height: '90vh' }, { height: '60px' })
    .fromTo(nav, 1, { display: 'none' }, { display: 'flex' })
    .fromTo(nav, 1, { opacity: '0' }, { opacity: '1' })
    .fromTo(intro, 1, { backgroundColor: 'rgba(255, 255, 255, 0)' }, { backgroundColor: 'rgba(255, 255, 255, 0.95)' })

var scene2 = new ScrollMagic.Scene({ triggerElement: intro, triggerHook: 0, duration: 600 })
    // .addIndicators()
    .offset(1500)
    .setTween(tween)
    .addTo(controller)
    .on("enter", function () {
        fog.style.opacity = 0;
        // nav_left.style.width = "0px";
    });
