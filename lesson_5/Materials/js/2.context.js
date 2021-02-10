
    /*
        Контекст в JS определяется в момент вызова функции.
    */

    // function testThis(){
    //     // "use strict";
    //     //Присвоение не объявленной переменной
    //     // x = 5;
    //     //Использование большего словаря зарезервированых слов
    //     //var let;
    //     //Обьект this не возвращает глобальный обьект
    //     // return this;
    // }
    // console.log( testThis() );


    // пример работы с this
    // var myObj = {
    //   name: 'Dexter',
    //   setName: function( newName ){
    //     console.log('context', this);
    //     this.name = newName;
    //   },
    //   talk: function(){
    //     console.log('this obj:', this);
    //     console.log('My name is ', this.name );
    //   }
    // }    

    // myObj.talk();
    // myObj.setName('Woopie')
    // console.log( myObj );
    // myObj.talk();

    // - - - - - - - - - - - - - - - - - - 

    // function talk(){
    //   console.log( 'talk:', this.sound, this );
    // }

    // var cat = {
    //     sound: 'meow',
    //     talk: function(){ console.log('cat talk:', this.sound )}
    //     //talk: talk
    // }

    // talk();
    // cat.talk(); // 'talk', 'meow' 'obj cat'
   
    // var outerTalk = cat.talk;

    // console.log(cat.talk)
    // outerTalk();
    // window.sound = "brbrbr";
    // outerTalk();

    // // - - - - - - - - - - - - - - - - - - 

    // var boromir = {
    //   speak: talk,
    //   sound: "Нельзя просто так взять и..."
    // };
    // boromir.speak();
 
    // var gollum = {
    //    blab: boromir.speak,
    //    sound: "Моя прелесть...."
    // };
    // console.log( gollum.blab );

    // gollum.blab();

    // - - - - - - - - - - - - - - - - - - 

    // Контекст выполнения this
    // var Human = {
    //   name: 'Peter',
    //   sayName: function(){
    //     console.log( ' my name is ' + this.name );
    //   },
    //   personTwo: {
    //     name: 'Jackson',
    //     sayName: function(){
    //       console.log( ' my name is ' + this.name );
    //     }
    //   }
    // };
    
    // Human.sayName();
    // Human.personTwo.sayName();

    // Ссылки на объект

    // var a = Human;
    //     a.test = 123;
    //     var b = Human;
    //     console.log( b );   
        
    //     console.log( a === b )
        
    //     var test = { ...a }
    //     console.log('test === a ' + test === a);
    //     console.log('test ', test)
    //     console.log('a ', a );
    // var test2 = {a: 'test'}