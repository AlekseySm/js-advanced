  /*

    Браузерные события

    События мыши:
    click – происходит, когда кликнули на элемент левой кнопкой мыши
    contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
    mouseover – возникает, когда на элемент наводится мышь
    mousedown и mouseup – когда кнопку мыши нажали или отжали
    mousemove – при движении мыши

    События на элементах управления:
    submit – посетитель отправил форму <form>
    focus – посетитель фокусируется на элементе, например нажимает на <input>

    Клавиатурные события:
    keydown – когда посетитель нажимает клавишу
    keyup – когда посетитель отпускает клавишу

    События документа:
    DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен
    load - Событие load происходит когда ресурс и его зависимые ресурсы закончили загружаться.

    События CSS:
    transitionend – когда CSS-анимация завершена.
  */


  /*
    Demo 1
    Функция вызывается напрямую из HTML
    onclick="someFunc()"
  */

  let i = 0;
  function CounterAdd(){
    i++;
    console.log('clicked', i);    
  }

  /*
    Demo 2
    Обработчик вешается из кода на элемент
    Syntax: element.onclick = functionRef;
  */

  let block = document.getElementById('fromCode');            
      block.onclick = CounterAdd;

  /*

    Присваивать функцию на ивент нужно в формате element.onclick = myFunc НО НЕ myFunc()
    myFunc() - вызовет функцию и если в функции нет return вернет null.
    Таким образом onclick работать не будет.

  */

  function ExecutionFunc(){
    console.log('exect func');
  }

  let execution = document.getElementById('execution'); 
  // execution.onclick = ExecutionFunc;
  // console.dir(execution) // func
  // execution.onclick = CounterAdd();
  // console.dir(execution) // null

  /*
    Demo 4
    Event Obj
  */

  let eventObj = document.getElementById('eventObj'); 
  // eventObj.onclick = function( event ){
  //   console.log( 'event', event, event.target, event.target.dataset.attr );
  // };
  
  // document.onclick = function( event ){
  //   console.log( event );
  //   if( event.altKey === true ){
  //     console.log('click on cordinate:', event.clientX, event.clientY, event.target);
  //   }
  // };

  /*
    Demo 5
  */

  document.addEventListener("keydown", function(event){
    console.log( event );
    if (event.key == "v") {
      document.body.style.background = "violet";
    }
  });

  window.addEventListener("keyup", function(event){
      document.body.style.background = "";
  });
