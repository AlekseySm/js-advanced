/*
  Bubbling
  При наступлении события обработчики сначала срабатывают
  на самом вложенном элементе, затем на его родителе,
  затем выше и так далее, вверх по цепочке вложенности.
*/
  var wrap = document.getElementById('wrap');
  var bubbleParent = document.getElementById('bubbleParent');
  var bubbleChild = document.getElementById('bubbleChild');

  bubbleParent.onclick = function (event) {
      event.preventDefault();
      //event.stopPropagation();
      console.log("onclick в родителе bubbleParent");
      console.log('child', this);
  };

  bubbleChild.onclick = function (event) {
      event.stopPropagation();
      console.log("onclick в потомке bubbleChild");
      console.log('child', this);
      // this ссылается на элемент на котором висит обработчик
      // event.target ссылается на тот элемент на котором был сделан клик
  };

  wrap.onclick = function(){ console.log('this is wrap');}
  /*
    event.stopPropagation() - прекращает всплытие событий вверх по дом дереву
    Рекомендуется использовать механику отмены всплытия очень осторожно
  */
