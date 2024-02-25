

let navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.right = "0"
}
function hideMenu() {
    navLinks.style.right = "-200px"
}


let typed = new Typed(".auto-type", {
    strings: ["Frontend Devloper", "Web/Ui Devloper", "Web Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

  AOS.init();