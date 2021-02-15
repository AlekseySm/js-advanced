/*
  Arrow functions + default values
  Docs: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
    // const MyArrowFunction = ( a, b, c ) => {
    //   console.log( a, b ,c );
    // }
    
    // MyArrowFunction(1,2,3);

    // ##############################################
    //Es6

    // function test(){
    //   console.log('test')
    // }

    // const test = () => {
    //   console.log('test');
    // }

    // ##############################################    
    // const y = ( param, param2 ) => {
    //   console.log( param, param2 );
    //   ///...
    //   return 'hello';
    // };

    // let fTest = y(1, 2);
    // console.log(  fTest );

    // ...

    // ##############################################
    // const shortFunc = (a, b) => {
    //   return a + b;
    // }
    // const shortFunc = (param, param2) => param + param2;
    // console.log(shortFunc('test1 ', 'test2'));


    // const Test = (one, two) => {
    //   console.log( one, two );
    //   return one + two;
    // }
    // //
    // console.log( Test(10, 5) );

    // ##############################################

    // const Double = ( a ) => a * 2
  
    // const Double = a => a * 2;
    // console.log( Double(4) );

    // ##############################################

    // let obj = {
    //   test: 123
    // }

    // const returnObj = name => {
    //   name
    // }
    
    // const returnObj = name => ({
    //   name
    // })
    // console.log( returnObj('petya') );

    // let group = {
    //   title: "Our Group",
    //   students: ["John", "Pete", "Alice"],
    
    //   showList: function() {
    //     this.students.forEach(
    //       function(student) {
    //         console.log(this)
    //         console.log(this.title + ': ' + student)
    //       }
    //       //student => console.log(this.title + ': ' + student)
    //     );
    //   }
    // };
    
    // group.showList();
