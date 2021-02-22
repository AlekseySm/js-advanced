// Простая функция которая в блоке с id tagert отрисовывает нам картинку с указаным урл.
let RenderImage = (image) => {
  let TargetBlock = document.getElementById("target");
      TargetBlock.appendChild(image);
};
