
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'

*/
document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('form');
    let data = {};
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        data = {};
        let input = e.target.querySelectorAll('input');
        input.forEach((input) => {
            data[input.name] = input.value;
        })
        data = JSON.stringify(data);
        console.log(data);
        document.getElementById('parse')[0].value = data;
    })

    let arr = '{"name" : "23123", "age": "15", "password": "*****" }';
    document.getElementById('parse')[0].value = arr;

    document.getElementById('parse').addEventListener('submit', (e) => {
        e.preventDefault();
        let pars = JSON.parse(e.target[0].value)
        console.log(pars)
    })
})
