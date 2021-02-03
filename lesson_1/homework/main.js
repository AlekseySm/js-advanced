document.addEventListener("DOMContentLoaded", function(event) {
    let app = document.getElementById('app');

    let div = document.createElement('div'),
        btn = document.createElement('button'),
        p   = document.createElement('p');

    btn.innerText = "Change color!";
    div.className = "my-div";

    let Color = RGBToHex(getRandomIntInclusive(0, 255), getRandomIntInclusive(0, 255), getRandomIntInclusive(0, 255));

    p.innerText = Color;

    div.style.background = Color;


    let styleBtn = "text-transform: uppercase;color: #fff;width: 350px;padding: 20px; font-size: 25px; margin-bottom: 50px;";
    btn.style.cssText = styleBtn;
    div.append(btn, p);
    app.append(div);

    btn.addEventListener('click', (event) => {
        let newColor = RGBToHex(getRandomIntInclusive(0, 255), getRandomIntInclusive(0, 255), getRandomIntInclusive(0, 255));
        document.querySelector('.my-div').style.background = newColor;
        p.innerText = newColor;
    })

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function RGBToHex(r,g,b) {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);

        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;

        return "#" + r + g + b;
    }

});
/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода 
      
      Number.toString( ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/
