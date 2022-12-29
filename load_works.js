const works = {
    "work": [
        {
            "text": "This Portfolio!",
            "imageSrc": "./assets/work/portfolio.png",
            "onClick": "./work/MyPortfolio.html",
            "tags": ["website", "frontend", "design"]
        },
        {
            "text": "MeetApp (iOS Dev)",
            "imageSrc": "./assets/work/meetApp.jpg",
            "onClick": "./work/meetApp.html",
            "tags": ["fullstack", "frontend"]
        },
        {
            "text": "Accessibility Simulator",
            "imageSrc": "./assets/work/accessibility.png",
            "onClick": "./work/accessibility-sim.html",
            "tags": ["frontend", "design"]
        },
        {
            "text": "MERN Stack Twitter Clone",
            "imageSrc": "./assets/work/TwitterClone3.png",
            "onClick": "./work/TwitterClone.html",
            "tags": ["website", "fullstack"]
        },
        {
            "text": "Collaborative Socket Whiteboard",
            "imageSrc": "./assets/work/draw.png",
            "onClick": "https://github.com/AnkitYande/socket-paint-client",
            "tags": ["website", "frontend", "fullstack"]
        },
        {
            "text": "Flutter Spotify UI Clone",
            "imageSrc": "./assets/work/SpotifyCloneMockup.png",
            "onClick": "https://github.com/AnkitYande/SpotifyUIClone",
            "tags": ["frontend"]
        },
        {
            "text": "Interactive Spotify Player",
            "imageSrc": "./assets/work/SpotifyPlayer2.png",
            "onClick": "https://github.com/AnkitYande/ReactSpotifyPlayer",
            "tags": ["website", "frontend", "fullstack"]
        },
        {
            "text": "Three.js Stack Game",
            "imageSrc": "./assets/work/Stack.png",
            "onClick": "https://github.com/AnkitYande/StackGame",
            "tags": ["website", "frontend"]
        },
        {
            "text": "Intelligent Scissoring and Image Composition",
            "imageSrc": "./assets/Programming Projects/imgs/iScissor.png",
            "onClick": "./work/iScissoring.html",
            "tags": ["cv"]
        },
        {
            "text": "Remote Sensing of Crop Pathology through CV",
            "imageSrc": "./assets/Programming Projects/imgs/Yande Research Poster 2019.jpg",
            "onClick": "./work/sr2019.html",
            "tags": ["cv"]
        },
        {
            "text": "Utilizing Stereoscopic Camera to assist the Visually Impaired",
            "imageSrc": "./assets/Programming Projects/imgs/Yande Research Poster 2018.jpg",
            "onClick": "./work/sr2018.html",
            "tags": ["cv"]
        },
        {
            "text": "Design work for ReView <br> Technology Inc.",
            "imageSrc": "./assets/Design/review_logo_2.png",
            "onClick": "./design/ReView_Work.html",
            "tags": ["design"]
        },
        {
            "text": "IxD Case Study: The Hybrid Classroom",
            "imageSrc": "./assets/Design/classroom.jpg",
            "onClick": "./design/HybridClassroom.html",
            "tags": ["design"]
        },
        {
            "text": "Safe Spaces: <br> COVID Safety App Design",
            "imageSrc": "./assets/Design/safe_spaces_covid_01.png",
            "onClick": "./design/CovidApp.html",
            "tags": ["design"]
        },
        {
            "text": "Web Landing Page Mockup",
            "imageSrc": "./assets/Design/landing_page.png",
            "onClick": "./design/Landing_Page_Mockup.html",
            "tags": ["design"]
        },
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

//first time
window.onload = () => {
    for (let i in works["work"]) {
        let work = works["work"][i]
        my_works.innerHTML += formatCell(work["text"], work["imageSrc"], work["onClick"], false);
    }
}
//on change
const checkboxes = document.getElementsByName("work");
console.log("boxes:", checkboxes)
for (var i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i]
    checkbox.addEventListener('change', (event) => {
        let selected = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked == true).map(a => a.defaultValue);
        filter(selected)
    })
}

const my_works = document.querySelector(".my-works");
const seeAll = document.querySelector(".see-all");

function filter(filterList) {
    my_works.innerHTML = "";
    let qualified = works["work"]
    for (let i in filterList) {
        let element = filterList[i]
        qualified = qualified.filter(a => a["tags"].includes(element))
        console.log(qualified)
    }
    if (qualified.length == 0) {
        my_works.innerHTML += `<h4 style="margin-top: 2em"> No projects that match your criteria <h4> `;
    } else {
        for (let i in qualified) {
            let work = qualified[i]
            my_works.innerHTML += formatCell(work["text"], work["imageSrc"], work["onClick"], false);
        }
    }
}
// function workHandler(type) {

//     my_works.innerHTML = "";
//     seeAll.innerHTML = "";

//     if (works[type].length == 0) {
//         my_works.innerHTML += `<h4> Coming Soon </h4>`;
//         return;
//     }
//     for (let i in works[type]) {
//         let work = works[type][i];
//         my_works.innerHTML += formatCell(work["text"], work["imageSrc"], work["onClick"], (type == "photography" || type == "art"));
//     }
//     if (type == "photography") {
//         seeAll.innerHTML = `<a href="./gallery.html"> <h3 class="hover-underline-animation">See All 👉</h3> </a>`;
//     }
//     else if (type == "art") {
//         seeAll.innerHTML = `<a href="./art.html"> <h3 class="hover-underline-animation">See All 👉</h3> </a>`;
//     }
//     else {
//         seeAll.innerHTML = "";
//     }
// }

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