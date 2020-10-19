const intro = document.querySelector(".intro");
const myimg = document.querySelector("img");
const aloha = document.querySelector("h2");

const headder = document.querySelector(".headder");


var controller = new ScrollMagic.Controller();

var images = [
    "./AY_svg_seq/AY_svg_seq0001.svg",
    "./AY_svg_seq/AY_svg_seq0002.svg",
    "./AY_svg_seq/AY_svg_seq0003.svg",
    "./AY_svg_seq/AY_svg_seq0004.svg",
    "./AY_svg_seq/AY_svg_seq0005.svg",
    "./AY_svg_seq/AY_svg_seq0006.svg",
    "./AY_svg_seq/AY_svg_seq0007.svg",
    "./AY_svg_seq/AY_svg_seq0008.svg",
    "./AY_svg_seq/AY_svg_seq0009.svg",
    "./AY_svg_seq/AY_svg_seq0010.svg",
    "./AY_svg_seq/AY_svg_seq0011.svg",
    "./AY_svg_seq/AY_svg_seq0012.svg",
    "./AY_svg_seq/AY_svg_seq0013.svg",
    "./AY_svg_seq/AY_svg_seq0014.svg",
    "./AY_svg_seq/AY_svg_seq0015.svg",
    "./AY_svg_seq/AY_svg_seq0016.svg",
    "./AY_svg_seq/AY_svg_seq0017.svg",
    "./AY_svg_seq/AY_svg_seq0018.svg",
    "./AY_svg_seq/AY_svg_seq0019.svg",
    "./AY_svg_seq/AY_svg_seq0020.svg",
    "./AY_svg_seq/AY_svg_seq0021.svg",
    "./AY_svg_seq/AY_svg_seq0022.svg",
    "./AY_svg_seq/AY_svg_seq0023.svg",
    "./AY_svg_seq/AY_svg_seq0024.svg",
    "./AY_svg_seq/AY_svg_seq0025.svg",
    "./AY_svg_seq/AY_svg_seq0026.svg",
    "./AY_svg_seq/AY_svg_seq0027.svg",
    "./AY_svg_seq/AY_svg_seq0028.svg",
    "./AY_svg_seq/AY_svg_seq0029.svg",
    "./AY_svg_seq/AY_svg_seq0030.svg",
    "./AY_svg_seq/AY_svg_seq0031.svg",
    "./AY_svg_seq/AY_svg_seq0032.svg",
    "./AY_svg_seq/AY_svg_seq0033.svg",
    "./AY_svg_seq/AY_svg_seq0034.svg",
    "./AY_svg_seq/AY_svg_seq0035.svg",
    "./AY_svg_seq/AY_svg_seq0036.svg",
    "./AY_svg_seq/AY_svg_seq0037.svg",
    "./AY_svg_seq/AY_svg_seq0038.svg",
    "./AY_svg_seq/AY_svg_seq0039.svg",
    "./AY_svg_seq/AY_svg_seq0040.svg",
    "./AY_svg_seq/AY_svg_seq0041.svg",
    "./AY_svg_seq/AY_svg_seq0042.svg",
    "./AY_svg_seq/AY_svg_seq0043.svg",
    "./AY_svg_seq/AY_svg_seq0044.svg",
    "./AY_svg_seq/AY_svg_seq0045.svg",
    "./AY_svg_seq/AY_svg_seq0046.svg",
    "./AY_svg_seq/AY_svg_seq0047.svg",
    "./AY_svg_seq/AY_svg_seq0048.svg",
    "./AY_svg_seq/AY_svg_seq0049.svg",
    "./AY_svg_seq/AY_svg_seq0050.svg",
    "./AY_svg_seq/AY_svg_seq0051.svg",
    "./AY_svg_seq/AY_svg_seq0052.svg",
    "./AY_svg_seq/AY_svg_seq0053.svg",
    "./AY_svg_seq/AY_svg_seq0054.svg",
    "./AY_svg_seq/AY_svg_seq0055.svg",
    "./AY_svg_seq/AY_svg_seq0056.svg",
    "./AY_svg_seq/AY_svg_seq0057.svg",
    "./AY_svg_seq/AY_svg_seq0058.svg",
    "./AY_svg_seq/AY_svg_seq0059.svg",
    "./AY_svg_seq/AY_svg_seq0060.svg",
    "./AY_svg_seq/AY_svg_seq0061.svg",
    "./AY_svg_seq/AY_svg_seq0062.svg",
    "./AY_svg_seq/AY_svg_seq0063.svg",
    "./AY_svg_seq/AY_svg_seq0064.svg",
    "./AY_svg_seq/AY_svg_seq0065.svg",
    "./AY_svg_seq/AY_svg_seq0066.svg",
    "./AY_svg_seq/AY_svg_seq0067.svg",
    "./AY_svg_seq/AY_svg_seq0068.svg",
    "./AY_svg_seq/AY_svg_seq0069.svg",
    "./AY_svg_seq/AY_svg_seq0070.svg",
    "./AY_svg_seq/AY_svg_seq0071.svg",
    "./AY_svg_seq/AY_svg_seq0072.svg",
    "./AY_svg_seq/AY_svg_seq0073.svg",
    "./AY_svg_seq/AY_svg_seq0074.svg",
    "./AY_svg_seq/AY_svg_seq0075.svg",
    "./AY_svg_seq/AY_svg_seq0076.svg",
    "./AY_svg_seq/AY_svg_seq0077.svg",
    "./AY_svg_seq/AY_svg_seq0078.svg",
    "./AY_svg_seq/AY_svg_seq0079.svg",
    "./AY_svg_seq/AY_svg_seq0080.svg",
    "./AY_svg_seq/AY_svg_seq0081.svg",
    "./AY_svg_seq/AY_svg_seq0082.svg",
    "./AY_svg_seq/AY_svg_seq0083.svg",
    "./AY_svg_seq/AY_svg_seq0084.svg",
    "./AY_svg_seq/AY_svg_seq0085.svg",
    "./AY_svg_seq/AY_svg_seq0086.svg",
    "./AY_svg_seq/AY_svg_seq0087.svg",
    "./AY_svg_seq/AY_svg_seq0088.svg",
    "./AY_svg_seq/AY_svg_seq0089.svg",
    "./AY_svg_seq/AY_svg_seq0090.svg",
    "./AY_svg_seq/AY_svg_seq0091.svg",
    "./AY_svg_seq/AY_svg_seq0092.svg",
    "./AY_svg_seq/AY_svg_seq0093.svg",
    "./AY_svg_seq/AY_svg_seq0094.svg",
    "./AY_svg_seq/AY_svg_seq0095.svg",
    "./AY_svg_seq/AY_svg_seq0096.svg",
    "./AY_svg_seq/AY_svg_seq0097.svg",
    "./AY_svg_seq/AY_svg_seq0098.svg",
    "./AY_svg_seq/AY_svg_seq0099.svg",
    "./AY_svg_seq/AY_svg_seq0100.svg",
    "./AY_svg_seq/AY_svg_seq0101.svg",
    "./AY_svg_seq/AY_svg_seq0102.svg",
    "./AY_svg_seq/AY_svg_seq0103.svg",
    "./AY_svg_seq/AY_svg_seq0104.svg",
    "./AY_svg_seq/AY_svg_seq0105.svg",
    "./AY_svg_seq/AY_svg_seq0106.svg",
    "./AY_svg_seq/AY_svg_seq0107.svg",
    "./AY_svg_seq/AY_svg_seq0108.svg",
    "./AY_svg_seq/AY_svg_seq0109.svg",
    "./AY_svg_seq/AY_svg_seq0110.svg",
    "./AY_svg_seq/AY_svg_seq0111.svg",
    "./AY_svg_seq/AY_svg_seq0112.svg",
    "./AY_svg_seq/AY_svg_seq0113.svg",
    "./AY_svg_seq/AY_svg_seq0114.svg",
    "./AY_svg_seq/AY_svg_seq0115.svg",
    "./AY_svg_seq/AY_svg_seq0116.svg",
    "./AY_svg_seq/AY_svg_seq0117.svg",
    "./AY_svg_seq/AY_svg_seq0118.svg",
    "./AY_svg_seq/AY_svg_seq0119.svg",
    "./AY_svg_seq/AY_svg_seq0120.svg"
];

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: intro, triggerHook: 0, duration: 1700})
    //.addIndicators()
    .setPin(intro)
    .addTo(controller);

let scrollpos = 0;

scene.on("update", e=>{
    scrollpos = e.scrollPos*0.06;
    scrollpos = scrollpos > 119 ? 119 : Math.round(scrollpos);
});

setInterval(() => {
    myimg.src = images[scrollpos]
    aloha.style.opacity = (100-scrollpos*1.5)/100 < 0 ? 0 : (100-scrollpos*1.5)/100
},0);


const sizeTween = TweenMax.fromTo(intro, 1, {height:'90vh'}, {height:'10vh'} )

var scene2 = new ScrollMagic.Scene({triggerElement: headder, triggerHook: headder, duration: 550})
    //.addIndicators()
    .offset(-280)
    .setTween(sizeTween)
    .addTo(controller)
    .on("enter", function () {
        intro.style.position = 'fixed';
});


scene.on("update", e=>{
    scrollpos = e.scrollPos*0.06;
    scrollpos = scrollpos > 119 ? 119 : Math.round(scrollpos);
});

