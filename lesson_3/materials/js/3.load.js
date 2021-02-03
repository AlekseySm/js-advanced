// DOMContentLoaded – браузер полностью загрузил HTML и построил DOM-дерево.
// load – браузер загрузил все ресурсы.

  // Аналог jQuery $(document).ready()
  document.addEventListener("DOMContentLoaded", function() {
      console.log("DOM fully loaded and parsed");
  });

  window.addEventListener('load', function(){
      var loader = document.querySelector('.loader');
          loader.classList.add('hidden');
  });

  var appendImage = document.getElementById('appendImage');

  appendImage.addEventListener('click', function(){
    var ImageCat = new Image(100, 100);
        console.log(ImageCat);
        ImageCat.onload = function(){
            appendBlock.appendChild(ImageCat);
            ImageCat.classList.add('loadedImage');
        };
        ImageCat.onerror = function(err){
          new Error('Some Error on load', err);
        };
  
        ImageCat.src = 'images/cat4.jpg'; 
  });
