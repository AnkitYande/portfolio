function expand_menu() {
    var x = document.getElementById("nav-left");
    if (x.className === "nav-left") {
        x.className += "-active";
    } else {
        x.className = "nav-left";
    }
    // console.log(x.className)
    // var x = document.getElementById("intro");
    // if (x.className === "intro") {
    //     x.className += " responsive";
    // } else {
    //     x.className = "intro";
    // }
}
