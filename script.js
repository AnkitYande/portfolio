function expand_menu() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
    var x = document.getElementById("intro");
    if (x.className === "intro") {
        x.className += " responsive";
    } else {
        x.className = "intro";
    }
}

let path = document.querySelector(".cls-4");

/*
125
215
60
315
*/

let length = path.getTotalLength();
console.log(length);
