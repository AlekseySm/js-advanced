

    /*
      call, bind, apply

      Apply:
        fun.apply(thisArg, [argsArray]);
        fun.call(thisArg, a, b, c);
        fun.bind(thisArg, a, b, c);
    */

    // function add(c, d ) {
    //   console.log('add context', this);
    //   console.log('add sum', this.a + this.b + c + d );
    // }
    // //
    // add(3,4); //NaN
    // var ten = {
    //   a: 1,
    //   b: 2,
    // };
    // /add.call(ten, 3, 4 ); // 10
    // //
    // var x = [1, 2];
    // add.apply(ten, x);

    /*
      Bind
    */

//
    // var meowButton = document.getElementById('meowButton');
    // console.log( meowButton );

    // var myObj = {
    //   sound: 'Guten Morgen',
    //   talk: function(){
    //     console.log('myObj', this, this.sound );
    //   }
    // }

    // myObj.talk();
    // var bindedTalk = myObj.talk.bind(myObj);

    // meowButton.addEventListener( 'click', myObj.talk );
    // meowButton.addEventListener( 'click', bindedTalk );

//     var vampire = {
//       sound: 'grrrr'
//     }

//     var Sasha = { name: 'Sasha', sound: 'Sasha say hello!'};
//     var bindedSahsa = myObj.talk.bind(Sasha);
//     testBtn.addEventListener('click', bindedSahsa);

    /*
      Частичный вызов функции
    */

    // function hardCarrying(a,b,c,d,e){
    //   console.log( arguments )
    //   console.log(a,b,c,d,e);
    // }
    // var simpeFunc = hardCarrying.bind(null, 1,2,3,4);
    // simpeFunc(15);
    // // //
    // function SimlpleFunc( a, b, message ){
    //   console.log(  a, b, message, this );
    // }
    // var SimpleCarrying = SimlpleFunc.bind(null, 1);

    // var context = { test: true }
    // var TestFunc = SimlpleFunc.bind(context, 1, 2, "test");

    //     SimlpleFunc(5, 6, 'bye')
    //     SimpleCarrying(6, 'hello');
    //     TestFunc();

    // function ManyArgyments( another, brick, in_the, wall){
    //   console.log('ManyArgyments', another, brick, in_the, wall);
    // }
    
    // var CarryingFunc = ManyArgyments.bind(null, 'We', 'don\'t', 'need', 'no education');
    //     CarryingFunc();        
