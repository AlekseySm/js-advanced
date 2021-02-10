/*
  Prototypes (Прототипы) - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.
*/
 
// var testObj = {
//   someData: 'data',
//   someValue: 'value'
// }

// console.log( 'string', testObj, Object.prototype );

var myArray = [1,2,3,4,5];
    myArray.push(6);
    myArray.map( function(){});

console.log( 'array', myArray, Array.prototype)

var num = 10.512;
console.log( num, num.toFixed(1), Number.prototype );

// ###########################################################

function talk(){
  console.log('Play sound:', this.sound);
}

var animal = {
  du: 'hiiiii',
  color: 'blue',
  talk
  // тоже самое что и talk: talk
};

console.log( animal );
var cat = {
  sound: 'meow',
  // color: 'yellow'
};



// Object.setPrototypeOf позволяет установить или изменить прототип указанному объекту
Object.setPrototypeOf( cat, animal );

console.log( cat );
// console.log( cat.color );
// console.log( cat.du );

// cat.talk();

// var dog = {
//   sound: 'woof'
// };
// Object.setPrototypeOf( dog, cat );
// console.log(dog, dog.color);

// dog.talk();






