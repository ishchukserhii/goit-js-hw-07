function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input')
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const container = document.querySelector('#boxes')

createButton.addEventListener('click', create);

function create(){
  const amount = input.value
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } 
  input.value = '';
}

function createBoxes(amount){
  container.innerHTML = ""
  for(let i = 0; i < amount; i++){
    const box = document.createElement('div')
    const wh = 30 + i * 10
    box.style.width = `${wh}px`;
    box.style.height = `${wh}px`;
    box.style.backgroundColor = getRandomHexColor()
    container.appendChild(box)
}
}

destroyButton.addEventListener('click', destroyBoxes)

function destroyBoxes(amount){
  container.innerHTML = ""
}

