// /*
//   Углубляемся в прототипы
//   Вспомним что и себя представляют прототипы в JS
// */

//   let cat = {
//     breed: 'Balinese',
//     eats: true,
//     test: () => {
//       console.log( '123 ')
//     }
//   };

//   // cat.prototype.test2 = 'fchg';
//   // console.log(cat);

//   let myCat = { name: 'Luna', value: '123'};
//   Object.setPrototypeOf(myCat, cat);

//   // console.log( myCat.name );  // Luna
//   // console.log('myCat.breed', myCat.breed ); // Balinese
//   // console.log('myCat.eats', myCat.eats );  // true
//   // console.log('myCat', myCat );       // { name: Luna, __proto__: Object }

//   /*
//     JS - Прототипный, обьекто-ориентированный язык.
//     Прототип является просто ссылкой которая указывает на обьект "Родителя"
//     И может предствлять собой бесконечную вложеность их друг в друга
//     Пишется в свойство __proto__ любого обьекта
//     Что же собой являет сам прототип
//   */

//   //console.log( Object.prototype );

//   /*
//     Каждый наш прототип, который мы создаем наследует все свои методы с
//     "Родительского" обьекта. Проверим это:
//   */

//   // console.log('cat proto equal to obj.prototype', cat.__proto__ === Object.prototype ); // true

//   /*
//     Убедимся в этом - модифицируем наш Object.prototype;
//   */

//   //Object.prototype.learning = true;


//   // // //
//   // console.log( 'cat.__proto__.learning', cat ); 
//   // console.log( cat, cat.learning );

//   // let test = {};

//   // console.log(test)

//   /*
//     Разница между __proto__ и prototype в том, что:
//     Первый является свойством, которое указывает на обьект который является прототипом для текущего обьекта.
//     А второй, это свойство ФУНКЦИИ,которое применяется только к функциям конструкторам
//     и будет использовано для создания нового обьекта с приставкой new Fn/
//   */
//   //

//   // 

//   let Hamster = function( name, count ){
//     this.name = name;
//     this.count = count;
//     let test = '';
//     this.addCounter = function( num ){
//       this.count += num;
//       console.log('new count', this.count);
//     }
//   };

//   Hamster.prototype.animal = 'mammal';
//   Hamster.prototype.addCounter = function( num ){
//     this.count += num;
//     console.log('new count', this.count);
//   }

//   let myNewHamster = new Hamster("test1", 1);
//   let myNewHamster2 = new Hamster("test2", 100);
  
//   console.log( 'myNewHamster.animal:', myNewHamster, myNewHamster2 );
//   myNewHamster2.addCounter(10);
//   myNewHamster.addCounter(20);
//   // // // // //
//   let myNewHamster3 = new Hamster("test2", 10);
//       myNewHamster3.addCounter(20);

//     /*
//       Метод Object.create() создаёт новый объект с указанными объектом прототипа
//       и свойствами.

//       Object.create(proto, [propertiesObject])
//     */

//   let Human = {
//     asd: "123",
//     eat: function(){
//       console.log('Human eat food:', this.food);
//     }
//   };

//   let Jessie2 = Object.create( Human );
//       // Jessie2 = {};
//       Jessie2.food = 'Tako';
//       console.log( Jessie2 );
//     Jessie2.eat();

//   function objectCreate( proto ){
//     let obj = {};
//     Object.setPrototypeOf(obj, proto);
//     return obj;
//   }

//   let Jessie3 = objectCreate(Human);

//   console.log(Jessie3);

//     /*
//     Разберем немного работу с ключевым словом new
//   */

//   /*
//     Что делает ключевое слово New:
//     1. Создаётся новый пустой объект, и он присваивается this.
//     2. Выполняется код функции. Обычно он модифицирует this, добавляет туда новые свойства.
//     3. Возвращается значение this.
//   */

//   // код только для примера

      // function User(name) {
      //   // this = {};  (неявно)

      //   // добавляет свойства к this
      //   this.name = name;
      //   this.isAdmin = false;

      //   // return this;  (неявно)
      // }
//   }


//   function Test(name) {
//     this.name = name;
//   }

//   Test.prototype.test = 'some test text';
//   Test.prototype.doSmth = function() {
//     alert('working');
//   }


//   const test = customNew(Test, 'some name');

//   console.log(test);



function Person(name){
  this.name = name;
}

Person.prototype.human = true;
Person.prototype.sayMyName = function(){
  console.log('My name is', this.name);
};

let heisenberg = new Person('Haisenberg');
    heisenberg.sayMyName();
console.log( heisenberg );

