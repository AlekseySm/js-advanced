document.addEventListener('DOMContentLoaded', () => {

  const myUploadForm = document.forms.upload;
        myUploadForm.onsubmit = function(e){
          e.preventDefault();
          let input = myUploadForm.elements.myfile;
          let file = input.files[0];

          if (file) {
            upload(file);
          }
          return false;
        }
});

const upload = (file) => {
  let xhr = new XMLHttpRequest();
  console.log('xhr', xhr);
  // обработчик для закачки
   console.log('READYSTATE.START:', xhr.readyState);

    // xhr.addEventListener('readystatechange', (e) => {
    // //   /*
    // //     Значение	Состояние	           Описание
    // //     0	        UNSENT	             Объект был создан. Метод open() ещё не вызывался.
    // //     1	        OPENED	             Метод open() был вызван.
    // //     2	        HEADERS_RECEIVED	   Метод send() был вызван, доступны заголовки (headers) и статус.
    // //     3	        LOADING	             Загрузка; responseText содержит частичные данные.
    // //     4	        DONE	               Операция полностью завершена.
    // //   */
    //   console.warn('readyStateChange:', e);
    //     if( xhr.readyState === 4){
    //       console.log('DONE',  xhr.readyState);
    //     } else {
    //       console.log('readyStateChange:', xhr.readyState);
    //       // console.log('readyStateChange:', e.target.readyState);
    //       console.log('SOME ERROR');
    //     }
    // })

    xhr.addEventListener('loadstart', (e) => console.log('loadstart', e) );
    xhr.addEventListener('loadend', (e) => console.log('loadend', e) );

    xhr.open("POST", "/");
    // console.log('xhr.open("POST", "/");');
    xhr.send(file);
    // console.log('xhr.send(file);');
};
