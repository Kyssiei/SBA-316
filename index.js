document.
const strip = document.querySelector(".moving-strip p");

const textWidth = strip.offsetWidth;
const screenWidth = window.innerWidth;
const duration = (screenWidth + textWidth) / 100;

strip.style.animation = `moveText ${duration}s linear infinate`;