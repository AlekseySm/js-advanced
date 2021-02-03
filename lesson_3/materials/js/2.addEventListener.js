  // addEventListener
  function ChangeBackColor( e ){
    var color = e.target.dataset.color;
        console.log( e.target, color );
        document.body.style.background = color;
  }
  // //
  
  var btn = document.getElementById('test_btn');

  btn.addEventListener('click', ChangeBackColor);

  // // remove eventListener

  // var buttonsSelector = document.querySelectorAll('._changeColor');
  // console.log( buttonsSelector );

  // for (var i = 0; i < buttonsSelector.length; i++) {
  //   buttonsSelector[i].addEventListener('click', ChangeBackColor);
  // }

  // var nButton = document.querySelector('._changeColor');
  //     nButton.removeEventListener('click', ChangeBackColor);

  /*
    Добавление несколько обработчиков на один элемент
  */

  function mFunc1(){ console.log('Log1');}
  function mFunc2(){ console.log('Log2');}
  function mFunc3(){ console.log('Log3');}

  let MultiEvent = document.getElementById('MultiEvent');

  MultiEvent.addEventListener('click', mFunc1);
  MultiEvent.addEventListener('click', mFunc2);
  MultiEvent.addEventListener('click', mFunc3);

  // MultiEvent.onclick = mFunc1;
  // MultiEvent.onclick = mFunc2;
  // MultiEvent.onclick = mFunc3;

  // - - - -
  // В консоли для получения обработчиков (Работает только в хроме)
  // getEventListeners( MultiEvent );

  /*

    Итог:
      Есть 3 способа назнчить обработчик событий:

      Атрибут HTML: onclick="...".
      Свойство: elem.onclick = function.
      Специальный методы: elem.addEventListener // priority :)

  */




