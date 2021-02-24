/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/

document.addEventListener('DOMContentLoaded', () => {
    console.log('script init');
    let obj = {};

    let App = document.getElementById('app');
    let data = localStorage.getItem('data');

    const renderForm = () => {
        let form = document.createElement('form');
        form.setAttribute('id', 'form');

        let inputName = document.createElement('input');
        inputName.setAttribute('name', 'name');
        inputName.setAttribute('placeholder', 'name');
        inputName.setAttribute('type', 'text');

        let inputPass = document.createElement('input');
        inputPass.setAttribute('name', 'password');
        inputPass.setAttribute('placeholder', 'password');
        inputPass.setAttribute('type', 'password');

        let btnSubmit = document.createElement('button');
        btnSubmit.innerText = 'Submit';

        form.append(inputName, inputPass, btnSubmit)
        App.append(form);

        form.addEventListener('submit' , (e) => {
            e.preventDefault();
            let input = e.target.querySelectorAll('input');
            input.forEach((input) => {
                obj[input.name] = input.value;
            });

            localStorage.setItem('data', JSON.stringify(obj) );

            App.innerHTML = '';
            let data = JSON.parse(localStorage.getItem('data'));
            alert(`Hello ${data.name}`);
            renderBtn();
        })
    }

    const renderBtn = () => {
        let cleanBtn = document.createElement('button');
        cleanBtn.innerText = 'Clean form';
        App.append(cleanBtn);
        cleanBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('data');
            App.innerHTML = '';
            renderForm();
        })
    }

    console.log(data);

    if(data !== null) {
        App.innerHTML = '';
        data = JSON.parse(data);
        alert(`Hello ${data.name}`);
        renderBtn();
    } else {
        App.innerHTML = '';
        renderForm();
    }
})