const works = {
    "websites": [],
    "design": [],
    "programs": [
        {
            "text": "Inteligent Scissoring and Image Composition",
            "imageSrc": "../src/Programming Projects/imgs/iScissor.png",
            "onClick": "./programs/iScissoring.html",
        },
        {
            "text": "Remote Sensing of Crop Pathology through CV",
            "imageSrc": "./src/Programming Projects/imgs/Yande Research Poster 2019.jpg",
            "onClick": "./programs/sr2019.html",
        },
        {
            "text": "Utilizing Steroscopic Camera to assist the Visually Impaired",
            "imageSrc": "./src/Programming Projects/imgs/Yande Research Poster 2018.jpg",
            "onClick": "./programs/sr2018.html",
        },
        // {
        //     "text": "Reflected Laser Black Ice Detection System for AVs",
        //     "imageSrc": "./src/Programming Projects/imgs/Yande, Rathod Research Poster 2017.jpg",
        //     "onClick": "./pdf.html",
        // }
    ],
    "photography": [
        {
            "text": "",
            "imageSrc": "./photography/0011.jpg",
            "onClick": "./photography/0011.jpg",
        },
        {
            "text": "",
            "imageSrc": "./photography/0010.jpg",
            "onClick": "./photography/0010.jpg",
        },
        {
            "text": "",
            "imageSrc": "./photography/0019.jpg",
            "onClick": "./photography/0019.jpg",
        },
        {
            "text": "",
            "imageSrc": "./photography/0015.jpg",
            "onClick": "./photography/0015.jpg",
        },
        {
            "text": "",
            "imageSrc": "./photography/0021.jpg",
            "onClick": "./photography/0021.jpg",
        },
    ],
    "art": [
        {
            "text": "",
            "imageSrc": "./art/reindeer.jpg",
            "onClick": "./art/reindeer.jpg",
        },
        {
            "text": "",
            "imageSrc": "./art/floating_island.png",
            "onClick": "./art/floating_island.png",
        },
        {
            "text": "",
            "imageSrc": "./art/Robot_Render.png",
            "onClick": "./art/Robot_Render.png",
        },
        {
            "text": "",
            "imageSrc": "./art/Polymath_logo.gif",
            "onClick": "./art/Polymath_logo.gif",
        },
        {
            "text": "",
            "imageSrc": "./art/Uzi.gif",
            "onClick": "./art/Uzi.gif",
        },
    ]
}

// import {works} from './works.js'

const radio = document.getElementsByName("work");
let prev = null;
//first time
window.onload = () => {
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            prev = radio[i];
            workHandler(radio[i].value)
        }
    }
}
//on change
for (var i = 0; i < radio.length; i++) {
    radio[i].addEventListener('change', function () {
        if (this !== prev) {
            prev = this;
            workHandler(this.value)
        }
    });
}

var my_works = document.querySelector(".my-works");
var seeAll = document.querySelector(".see-all");

function workHandler(type) {

    my_works.innerHTML = "";
    seeAll.innerHTML = "";

    if(works[type].length == 0){
        my_works.innerHTML +=`<h4> Coming Soon </h4>`;
        return;
    }

    for (i in works[type]) {
        work = works[type][i];
        my_works.innerHTML += formatCell(work["text"], work["imageSrc"], work["onClick"], (type == "photography" || type == "art"));
    }

    if (type == "photography") {
        seeAll.innerHTML = `<a href="./gallery.html"> <h3 class="hover-underline-animation">See All 👉</h3> </a>`;
    }
    else if (type == "art") {
        seeAll.innerHTML = `<a href="./art.html"> <h3 class="hover-underline-animation">See All 👉</h3> </a>`;
    }
   
}

function formatCell(text, imageSrc, onClick, full) {

    return (
        `<div 
        onclick="location.href='${onClick}'"
        class = "work-cell ${full ? "full-cell" : ""}" 
        tabindex="0"
        >
            <img
                src="${imageSrc}"
            />
            ${text == "" ? `<span></span>` : `<p>${text}</p>`}
        </div>`
    )
}