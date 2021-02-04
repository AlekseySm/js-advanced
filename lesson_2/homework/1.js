
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick


      element.onclick = function(event) {
        // do stuff ...
      }

  */
  let btns = document.querySelectorAll('button'),
      buttonContainer = document.getElementById('buttonContainer'),
      tabContainer = document.getElementById('tabContainer');

  let singleTab = tabContainer.querySelectorAll('.tab');

  const foreach = (arr, dataset) => {
      arr.forEach((items, i) => {
          if(items.dataset.tab === dataset && items.classList.contains('active') != true) {
              console.log(items.classList.contains('active'));
              items.classList.toggle('active');
          } else {
              items.classList.remove('active');
          }
      })
  }

  const tab = (dataset) => {
      foreach(btns, dataset);
      foreach(singleTab, dataset);
      return false;
  }

  buttonContainer.addEventListener('click', (e) => {
      if(e.target.localName != 'header'){
          tab(e.target.dataset.tab)
      }
  })
