  /*

    preventDefault

    Стандартные ивенты браузера:
    mousedown – нажатие кнопкой мыши в то время как курсор находится на тексте начинает его выделение.
    click на <input type="checkbox"> – ставит или убирает галочку.
    submit – при нажатии на <input type="submit"> в форме данные отправляются на сервер.
    wheel – движение колёсика мыши инициирует прокрутку.
    contextmenu – при правом клике показывается контекстное меню браузера.
  */

  let preventEventBlock = document.getElementById('preventEventBlock');

  preventEventBlock.addEventListener('click', function(event){
    event.preventDefault();
    event.target.style.background = 'yellow';
    event.target.style.color = 'red';
    console.log('YOU SHALL NOT PASS');
  });

  preventEventBlock.addEventListener('contextmenu', function(event){
    event.preventDefault();
    console.log('MY CONTEXT MENU', event.target);
  });
