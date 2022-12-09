var type = new Typed(".typed", {
    strings: ["Ian Hendrawan", "Programmer and<br> College Student", "Gamer,<br> 100% Chinese<br> and Non-Smoker<br>"],
    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 10,
    backDelay: 2000,
    loop: true,
    cursorChar: "|",
    contentType: 'html'
});

let input = document.querySelector('.background-dropdown .fa');
let toggle = 0;

function dropdown() {
input.addEventListener('click', () => {
if (toggle == 0) {
document.getElementById("dropdown-mobile-1").style.display="block";
document.getElementById("dropdown-mobile-2").style.display="block";
document.getElementById("dropdown-mobile-3").style.display="block";
var elements = document.getElementsByClassName("background-dropdown");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.width=(480+"px");
}
toggle++;
} else {
document.getElementById("dropdown-mobile-1").style.display="none";
document.getElementById("dropdown-mobile-2").style.display="none";
document.getElementById("dropdown-mobile-3").style.display="none";
var elements = document.getElementsByClassName("background-dropdown");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.width=(80+"px");
}
toggle--;
}
})
}

dropdown();