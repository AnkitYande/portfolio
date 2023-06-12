let width = window.innerWidth;
let x = document.getElementById("nav-left");
let symbol = document.getElementById("symbol");

//first time
if(width && symbol){
    if (width < 1100) {
        symbol.innerHTML = `<i class="fas fa-bars"></i>`
        x.style.width = "0px"
    }
    else
        x.style.width = "40%";
}

// any time the window is resized
window.addEventListener("resize", () => {
    width = window.innerWidth;
    if (width < 1100) {
        symbol.innerHTML = `<i class="fas fa-bars"></i>`
        x.style.width = "0px"
    }
    else
        x.style.width = "40%";
}, true);


function toggle_menu() {
    width = window.innerWidth;
    x = document.getElementById("nav-left");
    symbol = document.getElementById("symbol");
    console.log(x.style.width)
    if (!x.style.width || x.style.width == "0px") {
        expand_menu()
    } else {
        collapse_menu()
    }
}

function expand_menu() {
    symbol.innerHTML = `<i class="fas fa-times"></i>`
    if (width >= 500)
        x.style.width = "500px";
    else
        x.style.width = `${width}px`
    document.body.style.overflow = "hidden";
    for (let child of x.querySelectorAll('a')) {
        child.setAttribute('tabindex', 0)
    }
}

function collapse_menu() {
    symbol.innerHTML = `<i class="fas fa-bars"></i>`
    x.style.width = "0px"
    document.body.style.overflow = "auto";
    for (let child of x.querySelectorAll('a')) {
        child.setAttribute('tabindex', -1)
    }
}