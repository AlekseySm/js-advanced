
    /*
      Objects in JS
    */


    /*
      Что являеться обьектом в JavaScript
      Оператор typeof возвращает тип аргумента
    */

    // function getTypeAndLogIt( variable ){
    //   console.log( 'variable', variable, typeof(variable) );
    // }

    // var string = 'String';
    // var number = 12;
    // var fn = function(){};
    // var und = undefined;

    // var nu = null;
    // var array = [];
    // var obj = {};

    // getTypeAndLogIt(string);
    // getTypeAndLogIt(number);
    // getTypeAndLogIt(und);
    // getTypeAndLogIt(fn);

    // getTypeAndLogIt(nu);      // null is -> obj
    // getTypeAndLogIt(array);   // array is -> obj
    // getTypeAndLogIt(obj);     // obj is -> obj

    /*
      Пример обычного обьекта в JavaScript с которым мы будем работать.
      Имеет свои свойства и методы.
    */
    // var DemoObject = {
    //   id: 213,                     // свойство обьекта
    //   someAction: function(){}     // Метод обьекта
    // }

    // /*
    //   Создать обьект можно 2 способами:
    // */

    // var Demo1 = new Object();
    // var Demo2 = {}; // <-- Более короткий вариант, де факто, стандарт на сегодня.

    // /*
    //   Присвоение свойств и методов
    // */

    // Более динамический вариант, когда значение присваивается по ключу (может использоваться например в ф-ях)
    // var myObj = {};
    //     myObj.name = "Cat";
    //     myObj.sound = "Hello";
    //     myObj.sayName = function(){
    //       console.log( this.sound + ' my name is ' + this.name);
    //     }
        
    //     console.log('Dynamic Obj', myObj  );
    //     myObj.sayName();

    // // // Статический вариант объявления обьекта (например обьект с конфигурацией)
    // var staticObject = {
    //     images: ['...', '...', '...'],
    //     rotate: true,
    //     arrows: false
    // };      
    // console.log('staticObject', staticObject)

    // var cat = {};
    // // присвоение свойств
    // cat.number = 12;
    // cat.method = function(){};
    // // // Можем присваивать вложенные обьекты
    // cat.test = {
    //   value: 1,
    //   obj: {
    //     name: 123
    //   }
    // };
    // console.log( 'cat.test.obj.name', cat, cat.test.obj.name )

    // var someVariable = "talk";
    // cat.someVariable = "Dance-Dance-Dance"; // cat.someVariable -> Dance-Dance-Dance
    // cat[someVariable] = "Dance-Dance-Dance"
    // console.log( 'cat after cat[variable]', cat );


    // /*
    //   У обьекта как у примитива есть несколько методов которые мы можем использовать:
    // */
    
    // // Object.keys() - Возвращает все ключи обьекта
    // var catKeys = Object.keys(cat);
    // console.log( 'catKeys', catKeys );
    // // Object.values() - Возвращает все значения из обьекта   
    // var catValues = Object.values(cat);
    // console.log( 'catValues', catValues);
    // // Object.entries() - Cоздает вложенный массив пар «ключ-значение» объекта
    // var objArr = Object.entries(cat);

    // console.log('cat object', cat);

    // // Обьект можно перебрать при помощи for и конструкции for( key in obj){}
    // for (var key in cat) {
    //   /* ... делать что-то с obj[key] ... */
    //   console.log('cat prop:', key, cat[key] );
    // }
