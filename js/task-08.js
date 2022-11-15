const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value == '' || password.value == '') {
        return alert("Всі поля повинні бути заповнені !");
    } 
    const regInfoUser = {
        email: email.value,
        password: password.value
    }
    console.log(regInfoUser);
    event.currentTarget.reset();
}

