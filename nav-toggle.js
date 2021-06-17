const width = window.innerWidth;
const x = document.getElementById("nav-left");
const symbol = document.getElementById("symbol");

x.style.width = "0px"

function expand_menu() {

    if (x.style.width == "0px") {
        symbol.innerHTML = `<i class="fas fa-times"></i>`
        if (width >= 500)
            x.style.width = "500px";
        else
            x.style.width = `${width}px`
        document.body.style.overflow = "hidden";
    } else {
        symbol.innerHTML = `<i class="fas fa-bars"></i>`
        x.style.width = "0px"
        document.body.style.overflow = "auto";
    }
}