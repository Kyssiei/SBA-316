// moving banner
const strip = document.querySelector(".moving-strip p");

const textWidth = strip.offsetWidth;
const screenWidth = window.innerWidth;
const duration = (screenWidth + textWidth) / 100;

strip.style.animation = `moveText ${duration}s linear infinate`;

// "Join the club" Form
const button = document.getElementById("joinButton")
const par = document.getElementById("par")
const title = document.getElementById("con2title")
const formPopup = document.getElementById("formPopup")


console.log(button);
console.log(par);
console.log(title);
console.log(formPopup);



button.onclick = function () {
    con2title.textContent = "Hey Girl!";
    par.textContent = "Please fill out the form below and press submit.";
    formPopup.style.display = 'block';
    button.style.display = 'none'


}
