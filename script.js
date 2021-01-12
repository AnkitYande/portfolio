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

function list_files() {
    console.log("loading");
    const testFolder = './src/';
    const fs = require('fs');

    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    });
}

// let path = document.querySelector(".cls-13");
// let length = path.getTotalLength();
// console.log(length);
