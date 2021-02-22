/*
  PROMISES
  Способ организации асинхронного кода.
*/

  // PROMISES
  // Promise status : Pending | Fulfilled | Rejected

  /*
    FIRST PROMISE
    Статус промиса может изменится только 1 раз
  */


  // Создаётся объект promise

//   let number = Math.random();

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (number > 0.5) {
//       resolve("result" + number);
//     } 

//     reject('didnt work' + number);
    
//   }, 1000);
// });

// promise
//   .then(
//     result => {//       
//       console.log("Fulfilled: " + result); // result - аргумент resolve
//     },
//     error => {
//       console.log("Rejected: " + error); // error - аргумент reject
//     }
//   );


  const successIterOne = ( res ) => {
    console.log('success iteration one', res);
    return res;
  }

  const errorIterOner = (err_data) => {
    console.error('error iteration one', err_data );
    return err_data;
  }

  const successIterTwo = res => {
    console.log(res);
    if( res.length > 1){
      return [{
        error: true
      }]
    } else {
      throw res;
    }
  }

  const successIterThree = res => {
    let newData = res.map( item => {
      item.status = false;

      return item;
    })

    console.log('new data:', newData);
    return newData;
  }

  let TestPromise = new Promise( ( resolve, reject ) => {
      setTimeout( () => {
        resolve([
          { title: '1'},
          { title: '2'}
        ]);
        reject([ { title: '3'} ])
      }, 2000);
  })
  .then( successIterOne, errorIterOner )
  .then( successIterTwo )
  .then( successIterThree )
  .catch( err => {
    console.log('We have a problems', err);
  })

  /* LOAD CAT PROMISE */
  //
  function loadImagePromise( url ){
    return new Promise( (resolve, reject) => {
      let imageElement = new Image();
      imageElement.src = url;

      imageElement.onload = function(){
        console.log('all is good')
        resolve( imageElement );
      };

      imageElement.onerror = function(){
        let message = 'Error on image load at url ' + url;
        console.log(new Error(message));

        let errorImg = new Image();
          errorImg.src = 'images/cat5.jpg';
          reject(
            RenderImage(errorImg)
          );
      };
    });
  }

  loadImagePromise('images/cat1.jpg')
    .then( RenderImage )
    .catch(() => {
      console.log('something went wrong');

    })

  // Promise All

  Promise.all([
    loadImagePromise('images/cat1.jpg'),
    loadImagePromise('images/cat2.jpg'),
    loadImagePromise('images/cat3.jpg'),
    loadImagePromise('images/cat4.jpg'),
    loadImagePromise('images/cat5.jpg'),
    loadImagePromise('images/cat6.jpg'),
    loadImagePromise('images/cat7.jpg')
  ])
  .then( images => {
    console.log( images );
    images.forEach( img => RenderImage( img ) );
  })
  .catch( error => console.log('catched an error'));

  // http://www.json-generator.com/api/json/get/cfWixBRmPS?indent=2


