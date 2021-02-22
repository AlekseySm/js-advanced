/*
  ASYNC-AWAIT

  Внутри функции которая помеченая как async вы можете поместить
  ключевое слово await перед выражением которое вернет promise.
  Во время выполнения асинхронной функции она останавливается пока
  промис не станет выполненным.

  Задача конструкции async-await писать асинхронный код, который
  будет читаться так же просто как и синхронный

*/

// 1. Возвращает промис
  // async function PlayGame(){
  //   let rand = Math.floor(  Math.random() *  100 );
  //   return rand % 2 === 0 ? true : false;
  // }

  // let GameResult = PlayGame();
  // console.log(GameResult);

  // GameResult.then(
  //   function(res){
  //     res === true ?
  //       console.log('YOU WON') :
  //       console.log('YOU LOSE')
  //     }
  //   );



  // Demo with Response Awaiting

  function resolveAfter( number, ms) {
    return new Promise(
      function( resolve ){
        setTimeout(() => {
          resolve(number);
        }, ms);
      });
  }

  //const returnRes = res => res
  // async function CombineNumbers(){
  //   console.log('before a')
  //   let a = await resolveAfter( 70, 1000 );
  //   console.log(a);
  //   console.log('before b');
  //   let b = await resolveAfter( 40, 3000 );
  //   console.log(b)
  //   return a + b; 
  // }
  // let sixteen = CombineNumbers();
  //     sixteen.then( res => console.log( 'Final Result', res ));



  // // Combine User
  async function getUserWithFriends(){
    const getUserResponse = await fetch("http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2")
    const users = await getUserResponse.json();

    const selectedUserName = users[0];
    console.log('main user', selectedUserName);

    const getUserFriends = await fetch("http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2");
    const UserFriends = await getUserFriends.json();
  
    console.log('user frineds', UserFriends);

    let { age, name, gender } = selectedUserName;
    const CombinedUser = {
      age,
      name,
      gender,
      friends: UserFriends[0].friends
    };
    return CombinedUser;
  }
  // //
  let UserWithFriends = getUserWithFriends();
      UserWithFriends.then( data => console.log('Final Person:', data));
