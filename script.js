function expand_menu() {
    const width  = window.innerWidth;
    const x = document.getElementById("nav-left");
    const symbol = document.getElementById("symbol");

    if (x.style.width == "0px"){
        symbol.innerHTML = `<i class="fas fa-times"></i>`
        if(width>=500)
            x.style.width =  "500px";
        else
            x.style.width = `${width}px`
        document.body.style.overflow = "hidden";
    } else {
        symbol.innerHTML = `<i class="fa fa-bars"></i>`
        x.style.width = "0px"
        document.body.style.overflow = "auto";
    }
}

var radio = document.getElementsByName( "work" );
var prev = null;
//first time
window.onload = () =>{
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            prev = radio[i];
            workHandler(radio[i].value)
        }
    }
}
//on change
for (var i = 0; i < radio.length; i++) {
    radio[i].addEventListener('change', function() {
        if (this !== prev) {
            prev = this;
            workHandler(this.value)
        }
    });
}

works = {
    "frontend" : [],
    "backend" : [
        {
            "text" : "Remote Sensing of Crop Pathology through CV",
            "imageSrc" : "./src/Programming Projects/imgs/Yande Research Poster 2019.jpg",
            "onClick" : "./pdf.html",
        },
        {
            "text" : "Utilizing Steroscopic Camera to assist the Visually Impaired",
            "imageSrc" : "./src/Programming Projects/imgs/Yande Research Poster 2018.jpg",
            "onClick" : "./pdf.html",
        },
        {
            "text" : "Reflected Laser Black Ice Detection System for AVs",
            "imageSrc" : "./src/Programming Projects/imgs/Yande, Rathod Research Poster 2017.jpg",
            "onClick" : "./pdf.html",
        }
    ],
    "photography" : [],
    "art" : []
}

var my_works = document.querySelector( ".my-works" );
function workHandler(type){
    my_works.innerHTML = ""
    console.log("here");
    for(i in works[type]){
        work = works[type][i];
        my_works.innerHTML += formatCell(work["text"],work["imageSrc"],work["onClick"])
    }
    if(type == "photography" || type == "art"){
        my_works.innerHTML += ` <a href="./gallery.html"> <h3 class="hover-underline-animation">See All 👉</h3> </a>`
    }
}

function formatCell(text, imageSrc, onClick){

    return(
        `<div class = work-cell tabindex="0">
            <img
                src="${imageSrc}"
                onclick="location.href='${onClick}'"
            />
            <p>${text}</p>
        </div>`
    )
}