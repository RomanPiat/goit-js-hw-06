const sliderFontSizeControl = document.querySelector('input#font-size-control');
const textFontSizeControl = document.querySelector('span#text');

sliderFontSizeControl.addEventListener('change', integerTextSize => {
    textFontSizeControl.style.fontSize = `${integerTextSize.target.value}px`;
})