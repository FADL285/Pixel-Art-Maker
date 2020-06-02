// Select color input
const color = document.getElementById('colorPicker');
// Select size input
const heightSize = document.getElementById('inputHeight');
const widthSize = document.getElementById('inputWidth');
// sizePicker from
const form = document.getElementById('sizePicker');
const canvasTable = document.getElementById('pixelCanvas');

// MakeGrid function
function makeGrid(e) {
  let content = '';
  // Your code goes here!
  e.preventDefault();
  for (let i = 0; i < heightSize.value; i++) {
    content += '<tr>';
    for (let j = 0; j < widthSize.value; j++) {
      content += `
      <td></td>
      `;
    }
    content += '</tr>';
  }
  canvasTable.innerHTML = content;
}

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', makeGrid);

canvasTable.addEventListener('click', (e) => {
  if (e.target.nodeName.toLowerCase() === 'td') {
    e.target.style.backgroundColor = color.value;
  }
});
