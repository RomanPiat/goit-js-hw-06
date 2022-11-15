const bodyStyle = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');
const classColor = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonChangeColor.addEventListener('click', () => {
  bodyStyle.style.backgroundColor = getRandomHexColor();
  classColor.textContent = getRandomHexColor();
})