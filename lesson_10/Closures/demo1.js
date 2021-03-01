const Demo = () => {

  /*
    Lexical Environment - Лексическая область видимости
  */

  var counter = 12; // Переменная объявленная в "глобальной" области видимости

  function addCounter(){

    /*
      Каждая функция при её инициализации создает свою лексическую область видимости.
      В данном примере, ф-я addCounter не имеет никаких переменных, и использует
      переменную counter из области видимости выше и изменение этой переменной
      влияет на то, какой результат будет возвразать ф-я addCounter;
    */
    return counter++;
  }

  console.log( addCounter() );
  console.log( addCounter() );
  console.log( addCounter() );
  counter = 55;
  console.log( addCounter() );
  console.log( addCounter() );


}


document.addEventListener('DOMContentLoaded', Demo);
