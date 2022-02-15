const colorPalette = document.querySelector('#color-palette');
const pixelBord = document.querySelector('#pixel-board');

function createForCollors() {
  for (let index = 0; index < 4; index += 1) {
    let elementPalette = document.createElement('li');
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
  for (index = 0; index < 5; index += 1) {
    let linePixel = document.createElement('div');
    pixelBord.appendChild(linePixel);
    for (index2 = 0; index2 < 5; index2 += 1) {
      let columnPixel = document.createElement('div');
      columnPixel.className = 'pixel';
      linePixel.appendChild(columnPixel);
    }
  }
}
createPixels();
