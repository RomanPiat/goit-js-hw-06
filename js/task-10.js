const inputNumber = document.querySelector('#controls>input')
const createButton = document.querySelector('button[data-create]')
const destroyButton = document.querySelector('button[data-destroy]')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

