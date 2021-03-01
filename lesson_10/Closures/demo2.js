const Demo = () => {

  function sayPhrase(){
    const say = function(){ console.log( Phrase ) };

    const Phrase = 'Hey, this is the 7th Lesson on JS Advanced Course!';
    /*
      Phrase - локальная переменная которая доступна только из функции
      sayPhrase. Мы возвращаем из этой функции - другую функцию say
      которая использует переменную phrase.
    */
    
    return say;
  }
  /*
    На момент инициализации, функция say знает о существовании переменной Phrase
    и может её использовать за пределами её лексического
    окружения.
  */
  const ClosurePhrase = sayPhrase();
        // console.log( Phrase ); // <- error
        ClosurePhrase();

}

document.addEventListener('DOMContentLoaded', Demo);
