const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.querySelector('#clear-board');
let input = document.querySelector('#board-size');
const vqvButton = document.querySelector('#generate-board');
input.min = 1; 


function createForCollors() {
  for (let index = 0; index < 4; index += 1) {
    const elementPalette = document.createElement('li');
    if (index === 1) {
      elementPalette.style.backgroundColor = genereteColor();
      elementPalette.className = 'color';
      colorPalette.appendChild(elementPalette);
    } else if (index === 2) {
      elementPalette.style.backgroundColor = genereteColor();
      elementPalette.className = 'color';
      colorPalette.appendChild(elementPalette);
    } else if (index === 3) {
      elementPalette.style.backgroundColor = genereteColor();
      elementPalette.className = 'color';
      colorPalette.appendChild(elementPalette);
    } else {
      elementPalette.style.backgroundColor = 'black';
      elementPalette.className = 'color';
      colorPalette.appendChild(elementPalette);
    }
  }
}
createForCollors();

function createPixels(value) {
  for (let index = 0; index < value; index += 1) {
    const linePixel = document.createElement('div');
    pixelBoard.appendChild(linePixel);
    for (let index2 = 0; index2 < value; index2 += 1) {
      const columnPixel = document.createElement('div');
      columnPixel.className = 'pixel';
      linePixel.appendChild(columnPixel);
    }
  }
}
createPixels(5);

function selectColorBlack() {
  window.onload = function () {
    const colorBlack = document.querySelector('.color');
    colorBlack.className = 'color selected';
  };
}
selectColorBlack();

function colorSelect() {
  colorPalette.addEventListener ('click', function (event) {
    const itemSelect = document.querySelector('.selected');
    itemSelect.classList.remove('selected');
    if (event.target.className === 'color') {
      event.target.className = 'color selected';
    }
  });
}
colorSelect();

function colorPixelFill() {
  pixelBoard.addEventListener('click', function (event) {
    const selected = document.querySelector('.selected');
    const color = window.getComputedStyle(selected);
    event.target.style.backgroundColor = color.getPropertyValue('background-color');
  });
}
colorPixelFill();

function clearPixels() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearPixels);

function goToGo() {
  let pixels = input.value;
  if (pixels <= 0) {
    window.alert('Board inválido!');
  } else if (pixels <= 4) {
    pixels = 5;
    pixelBoard.innerHTML = '';
    createPixels(pixels);
  } else if (pixels > 50) {
    pixels = 50;
    pixelBoard.innerHTML = '';
    createPixels(pixels);
  } else {
    pixelBoard.innerHTML = '';
    createPixels(pixels);
  }
}
vqvButton.addEventListener('click', goToGo);

function genereteColor(opacidade = 1) {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  
  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}
// A função genereteColor foi retirada do site: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
