/*

    Документация:

    https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation

    form.checkValidity() > Проверка всех полей формы на валидость
    form.reportValidity() > Проверяет все поля на валидность и выводит сообщение с ошибкой

    formElement.validity > Объект с параметрами валидности поля
    formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
        сообщения выведет message в браузерный попал

    Классы для стилизации состояния элемента
    input:valid{}
    input:invalid{}


    Задание:

    Используя браузерное API для валидации форм реализовать валидацию следующей формы:


    - Имя пользователя: type:text -> validation: required; minlength = 2;
        Если пустое выввести сообщение: "Как тебя зовут дружище?!"
    - Email: type: email -> validation: required; minlength = 3; validEmail;
        Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
    - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
        Если пустой вывести сообщение: "Я никому не скажу наш секрет";
    - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
        Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
    - Напиши спасибо за яблоки: type: text -> validation: required;
        Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

    - Согласен на обучение: type: checkbox -> validation: required;
        Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

    Внизу две кнопки:

    1) Обычный submit который отправит форму, если она валидна.
    2) Кнопка Validate(Проверить) которая запускает методы:
        - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
        - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть

*/
window.addEventListener('load', () => {
    let myForm = document.querySelector('form');

    let name = document.getElementById('name'),
        email = document.getElementById('email'),
        pass = document.getElementById('pass'),
        apple = document.getElementById('number'),
        thankyou = document.getElementById('thankyou'),
        check = document.getElementById('check');

    let validMess = document.createElement('p');
        validMess.className = 'validation-message';
        myForm.append(validMess);

    const validName = () => {
        if (name.validity.tooShort) {
            name.setCustomValidity('Как тебя зовут дружище?!');
        } else {
            name.setCustomValidity('');
        }
    }

    const validEmail = () => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity('Ну и зря, не получишь бандероль с яблоками!');
            myForm.reportValidity();
        } else {
            email.setCustomValidity('');
        }
    }

    const validPass = () => {
        if (pass.value === '') {
            pass.setCustomValidity('Я никому не скажу наш секрет');
            myForm.reportValidity();
        } else {
            pass.setCustomValidity('');
        }
    }

    const validApple = () => {
        if (Number(apple.value) === 0) {
            apple.setCustomValidity('Ну хоть покушай немного... Яблочки вкусные');
            myForm.reportValidity();
        } else {
            apple.setCustomValidity('');
        }
    }

    const validThakyou = () => {
        if (thankyou.value !== 'спасибо') {
            thankyou.setCustomValidity('Фу, неблагодарный(-ая)!');
            myForm.reportValidity();
        } else {
            thankyou.setCustomValidity('');
        }
    }

    const validCheck = () => {
        if (!check.checked) {
            check.setCustomValidity('Необразованные живут дольше! Хорошо подумай!');
            myForm.reportValidity();
        } else {
            check.setCustomValidity('');
        }
    }

    name.addEventListener('input', () => {
        validName()
    });

    email.addEventListener('input', () => {
        validEmail()
    });

    pass.addEventListener('input', () => {
        validPass()
    });

    apple.addEventListener('input', () => {
        validApple()
    });

    thankyou.addEventListener('input', () => {
        validThakyou()
    });

    check.addEventListener('input', () => {
        validCheck()
    });

    myForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!myForm.checkValidity()){
            validMess.innerHTML = 'не отправил.... заполни форму дружище';
        } else {
            validMess.innerHTML = 'отправил. дело сделано, теперь ждем ответ ...';
        }
    });

    document.getElementById('validBtn').addEventListener('click', () => {
        if (!myForm.checkValidity()){
            validMess.innerHTML = 'Результат проверки формы: НЕПРОШЛА, сорян ;) ';
        } else {
            validMess.innerHTML = 'Результат проверки формы: ПРОШЛА, а ты хорош !! ) ';
        }

        myForm.reportValidity();
    })
});