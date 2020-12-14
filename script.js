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