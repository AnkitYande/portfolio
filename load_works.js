const works = {
    "work": [
        {
            "text": "This Portfolio!",
            "imageSrc": "./assets/cover-imgs/portfolio.jpg",
            "onClick": "./work/MyPortfolio.html",
            "tags": ["website", "frontend", "design", "featured"]
        },
        {
            "text": "MeetApp (iOS Dev)",
            "imageSrc": "./assets/cover-imgs/meetApp.jpg",
            "onClick": "./work/meetApp.html",
            "tags": ["fullstack", "frontend", "featured"]
        },
        {
            "text": "Accessibility Simulator",
            "imageSrc": "./assets/cover-imgs/accessibility.jpg",
            "onClick": "./work/accessibility-sim.html",
            "tags": ["website", "frontend", "design", "featured"]
        },
        {
            "text": "MERN Stack Twitter Clone",
            "imageSrc": "./assets/cover-imgs/twitterClone.jpg",
            "onClick": "./work/TwitterClone.html",
            "tags": ["website", "fullstack", "featured"]
        },
        {
            "text": "CSS Demos",
            "imageSrc": "./assets/cover-imgs/cssDemos.jpg",
            "onClick": "https://ankityande.github.io/CSS-Demos/",
            "tags": ["website", "frontend"]
        },
        {
            "text": "Collaborative Socket Whiteboard",
            "imageSrc": "./assets/cover-imgs/draw.jpg",
            "onClick": "https://github.com/AnkitYande/socket-paint-client",
            "tags": ["website", "frontend", "fullstack"]
        },
        {
            "text": "Flutter Spotify UI Clone",
            "imageSrc": "./assets/cover-imgs/spotifyClone.jpg",
            "onClick": "https://github.com/AnkitYande/SpotifyUIClone",
            "tags": ["frontend"]
        },
        {
            "text": "Interactive Spotify Player",
            "imageSrc": "./assets/cover-imgs/spotifyPlayer.jpg",
            "onClick": "https://github.com/AnkitYande/ReactSpotifyPlayer",
            "tags": ["website", "frontend", "fullstack"]
        },
        {
            "text": "Three.js Stack Game",
            "imageSrc": "./assets/cover-imgs/stack.jpg",
            "onClick": "https://github.com/AnkitYande/StackGame",
            "tags": ["website", "frontend"]
        },
        {
            "text": "Intelligent Scissoring and Image Composition",
            "imageSrc": "./assets/cover-imgs/iScissor.jpg",
            "onClick": "./work/iScissoring.html",
            "tags": ["cv", "featured"]
        },
        {
            "text": "Remote Sensing of Crop Pathology through CV",
            "imageSrc": "./assets/cover-imgs/srPoster2019.jpg",
            "onClick": "./work/sr2019.html",
            "tags": ["cv"]
        },
        {
            "text": "Utilizing Stereoscopic Camera to assist the Visually Impaired",
            "imageSrc": "./assets/cover-imgs/srPoster2018.jpg",
            "onClick": "./work/sr2018.html",
            "tags": ["cv"]
        },
        {
            "text": "Design work for ReView <br> Technology Inc.",
            "imageSrc": "./assets/cover-imgs/reviewLogo.jpg",
            "onClick": "./design/ReView_Work.html",
            "tags": ["design", "featured"]
        },
        {
            "text": "IxD Case Study: <br> The Hybrid Classroom",
            "imageSrc": "./assets/cover-imgs/classroom.jpg",
            "onClick": "./design/HybridClassroom.html",
            "tags": ["design"]
        },
        {
            "text": "Safe Spaces: <br> COVID Safety App Design",
            "imageSrc": "./assets/cover-imgs/safeSpaces.jpg",
            "onClick": "./design/CovidApp.html",
            "tags": ["design"]
        },
        {
            "text": "Web Landing Page Mockup",
            "imageSrc": "./assets/cover-imgs/landingPage.jpg",
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
const my_works = document.querySelector(".my-works");
const featured_works = document.querySelector(".my-works-featured");
const checkboxes = document.getElementsByName("work");

//first time
window.onload = () => {
    if (my_works) {
        for (let i in works["work"]) {
            let work = works["work"][i]
            my_works.innerHTML += formatCell(work["text"], work["imageSrc"], work["onClick"], false);
        }
    }

    if (featured_works) {
        for (let i in works["work"]) {
            let work = works["work"][i]
            if (work["tags"].includes("featured")) {
                // console.log("here", work["text"])
                featured_works.innerHTML += formatCell(work["text"], work["imageSrc"], work["onClick"], false);
            }
        }
    }
}
//on change
if (checkboxes) {
    for (var i = 0; i < checkboxes.length; i++) {
        let checkbox = checkboxes[i]
        checkbox.addEventListener('change', (event) => {
            let selected = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked == true).map(a => a.defaultValue);
            filter(selected)
        })
    }
}

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

function formatCell(text, imageSrc, onClick, full) {

    return (
        `<div 
            onclick="location.href='${onClick}'"
            class = "work-cell ${full ? "full-cell" : ""}" 
            tabindex="0"
        >   
            <div class="work-cell-inner">
                <img src="${imageSrc}"/>
                ${text == "" ? `<span></span>` : `<p>${text}</p>`}
            </div>
        </div>`
    )
}