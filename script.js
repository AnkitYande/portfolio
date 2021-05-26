function expand_menu() {
    const width  = window.innerWidth;
    var x = document.getElementById("nav-left");
    var symbol = document.getElementById("symbol");

    if (x.style.width == "0px"){
        symbol.innerHTML = `<i class="fas fa-times"></i>`
        if(width>=500)
            x.style.width =  "500px";
        else
            x.style.width = `${width}px`
    } else {
        symbol.innerHTML = `<i class="fa fa-bars"></i>`
        x.style.width = "0px"
    }
}
