const intro = document.querySelector(".intro");
const video = intro.querySelector("video");

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: intro, 
    triggerHook: 0,
    duration: 1000
})
    .addIndicators() // add indicators (requires plugin)
    .setPin(intro)
    .addTo(controller);

let scrollpos = 0;

    
scene.on("update", e=>{
    scrollpos = e.scrollPos/1000;
})

setInterval(() => {
    video.currentTime = scrollpos;
}, 100);
