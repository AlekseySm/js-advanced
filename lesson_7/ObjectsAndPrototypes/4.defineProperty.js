  /*
    Синтаксис:
    Object.defineProperty(obj, prop, descriptor) - эсновной метод для управления свойствами.
    Он позволяет объявить свойство объекта и, что самое главное, тонко настроить его особые аспекты, которые никак иначе не изменить.

    obj - Объект, в котором объявляется свойство.
    prop - Имя свойства, которое нужно объявить или модифицировать.
    descriptor - Дескриптор – объект, который описывает поведение свойства
      В нём могут быть следующие поля:
  */

  let MyObj = {};
      MyObj.title = "Prop";
      MyObj._ObjHeight = 0;
      MyObj.funcTest = function(){
        return this.name;
      };

  // Object.defineProperty(
  //   MyObj,
  //   "name",
  //   {
  //     // value – значение свойства, по умолчанию undefined
  //     value: "Вася",
  //     // writable – значение свойства можно менять, если true. По умолчанию false.
  //     // writable: true,

  //     // configurable – если true, то свойство можно удалять, а также менять его
  //     // в дальнейшем при помощи новых вызовов defineProperty. По умолчанию false.
  //     // configurable: true,

  //     // enumerable – если true, то свойство просматривается в цикле for..in и
  //     // методе Object.keys(). По умолчанию false.
  //       // enumerable: true,

  //     // get – функция, которая возвращает значение свойства. По умолчанию undefined.
  //     // get: () => { console.log( 'getter'); },
    
  //     // set – функция, которая записывает значение свойства. По умолчанию undefined.
  //     // set: () => { console.log( 'setter'); }
  //   });

    // console.log(MyObj);

    //writable demo ->
    // MyObj.name = 10;
    // console.log('name demo:', MyObj);
    
    // configurable demo ->
    //delete MyObj.name;  
    // Object.defineProperty(MyObj, 'name', {
    //   value: 'test'
    // });
    //console.log( 'MyObj', MyObj );

    // enumerable demo ->
    // for(var key in MyObj) {
    //   console.log(key);
    // }
    // console.log( Object.keys(MyObj) );
    // console.log( 'MyObj', MyObj );

    // get / set
    // // - - - - - - - - - - - - - -
    // MyObj.name = 'test name';
    // Object.defineProperty(MyObj, "fullName", {
    //   get: function() {
    //     return `${this.title} from setter and ${this.name}`;
    //   }
    // });
    
    // console.log('FullName getter:', MyObj.fullName );
    // console.log( MyObj );
    // // // //

    // Object.defineProperty(MyObj, "height", {
    //   get: function() {
    //     return `${this._ObjHeight} cm`;
    //   },
    //   set: function( value ){
    //     this._ObjHeight = value;
    //     console.log( 'ObjHeight setter:', this._ObjHeight );
    //   }
    // });
        
    // MyObj.height = 20;
    // MyObj._ObjHeight = 55;
    // console.log( MyObj.height, 'MyObj.height' );
    // console.log( MyObj, MyObj._ObjHeight );         
