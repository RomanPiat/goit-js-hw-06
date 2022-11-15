const targetFocus = document.querySelector('input');

targetFocus.addEventListener('blur', () => {
    if (targetFocus.value.length == targetFocus.getAttribute('data-length')) {
        targetFocus.className = '';
        targetFocus.classList.add('valid');
    } else {
        targetFocus.className = '';
        targetFocus.classList.add('invalid');
    };
});