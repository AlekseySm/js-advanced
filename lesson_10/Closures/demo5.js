const Demo = () => {
  /*
    Этот паттерн использует механику замыканий для инкапсуляции.
  */
  (function(){
    function ITEA( value ){
      console.log('Root Block of SuperModule');
      console.log('This data is incapsulated!');
    }

    var version = '1.0.1';
    function jsIsEasyToLearn(){
      console.log('Yeap, closures is the easiest part', version);
    }

    ITEA.jsIsEasyToLearn = jsIsEasyToLearn;

    window.ITEA = ITEA;
  })();

}

document.addEventListener('DOMContentLoaded', Demo);

