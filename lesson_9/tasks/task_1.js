/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/

document.addEventListener('DOMContentLoaded', () => {
    console.log('hello');

    let min = 0;
    let max = 255;

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function RGBToHex(r, g, b) {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);

        if (r.length == 1)
            r = '0' + r;
        if (g.length == 1)
            g = '0' + g;
        if (b.length == 1)
            b = '0' + b;

        return '#' + r + g + b;
    }


    let main = document.querySelector('main');
    let button = document.createElement('button');
    button.innerText = 'click';
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let color = RGBToHex(getRandomIntInclusive(min, max), getRandomIntInclusive(min, max), getRandomIntInclusive(min, max));
        console.log(color)
        localStorage.setItem('color', color);
    });
    main.append(button);
});