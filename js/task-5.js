function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodySet = document.querySelector("body");
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", random);
function random(e) {
  const random = getRandomHexColor();
  bodySet.style.backgroundColor = random;
  span.innerHTML = random;
}
