function expand_menu() {
    const width = window.innerWidth;
    const x = document.getElementById("nav-left");
    const symbol = document.getElementById("symbol");

    if (x.style.width == "0px") {
        symbol.innerHTML = `<i class="fas fa-times"></i>`
        if (width >= 500)
            x.style.width = "500px";
        else
            x.style.width = `${width}px`
        document.body.style.overflow = "hidden";
    } else {
        symbol.innerHTML = `<i class="fa fa-bars"></i>`
        x.style.width = "0px"
        document.body.style.overflow = "auto";
    }
}


works = {
    "websites": [],
    "programs": [
        {
            "text": "Remote Sensing of Crop Pathology through CV",
            "imageSrc": "./src/Programming Projects/imgs/Yande Research Poster 2019.jpg",
            "onClick": "./pathology.html",
        },
        {
            "text": "Utilizing Steroscopic Camera to assist the Visually Impaired",
            "imageSrc": "./src/Programming Projects/imgs/Yande Research Poster 2018.jpg",
            "onClick": "./pdf.html",
        },
        {
            "text": "Reflected Laser Black Ice Detection System for AVs",
            "imageSrc": "./src/Programming Projects/imgs/Yande, Rathod Research Poster 2017.jpg",
            "onClick": "./pdf.html",
        }
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




var radio = document.getElementsByName("work");
var prev = null;
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

    my_works.innerHTML = ""
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
    else {
        seeAll.innerHTML = "";
    }
}

function formatCell(text, imageSrc, onClick, full) {

    return (
        `<div class = "work-cell ${full ? "full-cell" : ""}" tabindex="0">
            <img
                src="${imageSrc}"
                onclick="location.href='${onClick}'"
            />
            ${text == "" ? `<span></span>` : `<p>${text}</p>`}
        </div>`
    )
}