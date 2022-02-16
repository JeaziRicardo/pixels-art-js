const colorPalette = document.querySelector('#color-palette');
const pixelBord = document.querySelector('#pixel-board');
const button = document.querySelector('#clear-board');

function createForCollors() {
  for (let index = 0; index < 4; index += 1) {
    const elementPalette = document.createElement('li');
    if (index === 1) {
      elementPalette.style.backgroundColor = 'blue';
      elementPalette.className = 'color';
      colorPalette.appendChild(elementPalette);
    } else if (index === 2) {
      elementPalette.style.backgroundColor = 'red';
      elementPalette.className = 'color';
      colorPalette.appendChild(elementPalette);
    } else if (index === 3) {
      elementPalette.style.backgroundColor = 'green';
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

function createPixels() {
  for (let index = 0; index < 5; index += 1) {
    const linePixel = document.createElement('div');
    pixelBord.appendChild(linePixel);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const columnPixel = document.createElement('div');
      columnPixel.className = 'pixel';
      linePixel.appendChild(columnPixel);
    }
  }
}
createPixels();

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
  pixelBord.addEventListener('click', function (event) {
    let selected = document.querySelector('.selected');
    let color = window.getComputedStyle(selected);
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
button.addEventListener('click', clearPixels);
