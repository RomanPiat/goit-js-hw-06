const targetIn = document.querySelector('input#name-input');
const targetOut = document.querySelector('span#name-output');
const firstAttributeValue = targetOut.textContent;

targetIn.addEventListener('input', () => {
    targetOut.textContent = targetIn.value;
    if (targetIn.value == '') targetOut.textContent = firstAttributeValue;
});