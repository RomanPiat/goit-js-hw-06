const inputNumber = document.querySelector('#controls>input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const divAddBoxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  const arrayElements = [];
  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement('div');
    divElement.style.width = `${30 + 10 * i}px`;
    divElement.style.height = `${30 + 10 * i}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    arrayElements.push(divElement);
  }
  return (arrayElements);
}

createButton.addEventListener('click', () => {
  let addBoxes = createBoxes(inputNumber.value);
  divAddBoxes.append(...addBoxes);
})

destroyButton.addEventListener('click', () => {
  divAddBoxes.innerHTML = '';
})