const sliderFontSizeControl = document.querySelector('input#font-size-control');
const textFontSizeControl = document.querySelector('span#text');
const startValueSlider = document.querySelector('input');

sliderFontSizeControl.value = startValueSlider.min;

sliderFontSizeControl.addEventListener('change', integerTextSize => {
    textFontSizeControl.style.fontSize = `${integerTextSize.target.value}px`;
});