let colorPalette = document.querySelector('#color-palette');

function createForCollors(){
  for (let index = 0; index < 4; index += 1) {
    let elementPalette = document.createElement('li');
    if (index === 1) {
      elementPalette.style.backgroundColor = 'blue';
      elementPalette.className = 'color'
      colorPalette.appendChild(elementPalette);
    } else if (index === 2) {
      elementPalette.style.backgroundColor = 'red';
      elementPalette.className = 'color'
      colorPalette.appendChild(elementPalette);
    } else if (index === 3) {
      elementPalette.style.backgroundColor = 'green';
      elementPalette.className = 'color'
      colorPalette.appendChild(elementPalette);
    } else {
      elementPalette.style.backgroundColor = 'black';
      elementPalette.className = 'color'
      colorPalette.appendChild(elementPalette);
    }
  } 
}
createForCollors();