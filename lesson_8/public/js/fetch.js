/*
  FETCH - fetch(url, [options])
*/

// function FetchDemo(){
//   let url = 'http://test.api.com.ua';
//   Без options это простой GET-запрос, скачивающий содержимое по адресу url

//  let options = {
      // Все опции:
      // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
      // method: 'POST', // GET, PUT, DELETE etc.
      // headers: headers,
      /*
        https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
        Заголовки HTTP позволяют клиенту и серверу передавать дополнительную информацию с помощью HTTP-запроса или ответа.
        Сюда можно передать любые http headers как просто обьектом:
        {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
        Или через конструктор

        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "text/plain");
            myHeaders.append("Content-Length", 255);
            myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

        https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers
        https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
      */

      // body: body, // Любые данные для вашего запроса
      // mode: 'nocors',

    /*
      CORS: Cross-Origin Resourse Shairing
      Если просто: то в каком режиме кросс-доммености будет сделан запрос
      Если сложно: доки: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    */
  //};

  // fetch('http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2')
  //   .then(
  //     (res) => {
  //       console.log(res);
  //       return res.json();
  //     }
  //   )
  //   .then( 
  //     (res) => {
  //       res.forEach( item => {
  //         console.log(item);
  //       })
  //     }
  //   )

    // //ASYNC PROMISE
    // let url = "http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2";

    // let myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "text/plain");
  
    // const ConvertToJSON = ( response ) => response.json();

    // function DataHandler( json ){
    //     console.log( 'json', json );
    //     json.map( item => {
    //       let elem = document.createElement('div');
    //           elem.innerHTML = `
    //             <div>
    //               ${item.name}, ${item.age}
    //             </div>
    //           `
    //         document.body.appendChild(elem);
    //     } )
    // }

    // let testFetch = fetch( url, { method: 'POST', headers: myHeaders} )
    //     .then( ConvertToJSON )
    //     .then( DataHandler );