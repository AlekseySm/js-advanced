const Demo = () => {

  let number = 10;

  function first() {
    // number берется из контекста ф-и Demo

    return number + 5;
  }

  function second(){
    // number переопреопределяется локально в функции и именно это значение будет
    // использовать ф-я first
    number = 2;
    return first();
  }

  function main(){
    console.log( first() ); // => 15
    console.log( second() ); // => 7
  };

  console.log('number', number );
  main();

}

document.addEventListener('DOMContentLoaded', Demo);
