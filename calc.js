const fields = [
   { txt: 0, col: 1 / 3, row: 5 },
   { txt: 1, col: 1, row: 4 },
   { txt: 2, col: 2, row: 4 },
   { txt: 3, col: 3, row: 4 },
   { txt: 4, col: 1, row: 3 },
   { txt: 5, col: 2, row: 3 },
   { txt: 6, col: 3, row: 3 },
   { txt: 7, col: 1, row: 2 },
   { txt: 8, col: 2, row: 2 },
   { txt: 9, col: 3, row: 2 },
   { txt: 'C', col: 4, row: 2 },
   { txt: '+', col: 4, row: 3 },
   { txt: '-', col: 4, row: 4 },
   { txt: '=', col: 4, row: 5 },
   { txt: '.', col: 3, row: 5 },
   { txt: 'Display', col: 1 / 5, row: 1 },
   '1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '+', '-', '=', '.', 'Display'];

let buffer = 0;
let op = 0;
let clarFlag = false;

const handleClick = ev => {
   const d = document.getElementById('display');
   const keyCode = ev.target.textContent;
   switch (keyCode) {
      case 'C':
         d.textContent = '0';
         buffer = 0;
         op = 0;
         break;

      case '+':
      case '-':
         if (op === 0) {
            buffer = parseFloat(d.textContent);
         } else {
            buffer += op * parseFloat(d.textContent);
         }
         clearFlag = true;
         op = keyCode === '+' ? 1 : -1;
         break;

      case '=':
         if (op === 0) {
            buffer = parseFloat(d.textContent);
         } else {
            buffer += op * parseFloat(d.textContent);
         }
         d.textContent = buffer;
         op = 0;

         break;
      default:
         if (keyCode === '0' && d.textContent === '0') return;
         if (keyCode === '.' && d.textContent.includes('.')) return;
         if (d.textContent === '0' || clearFlag) {
            clearFlag = false;
            d.textContent = keyCode;
         } else {
            d.textContent += keyCode;
         }
         break;
   }
};
const init = () => {
   const container = document.createElement('div');
   container.id = 'container';

   fields.forEach(el => {
      const div = document.createElement('div');
      div.textContent = el.txt;
      div.style.gridColumn = el.col;
      div.style.gridRow = el.row;
      if (el.txt === 'Display') {
         div.id = 'display';
         div.textContent = '0';

      } else {
         div.addEventListener('click', handleClick);
      }
      container.appendChild(div);
   });
   document.body.appendChild(container);
}

window.addEventListener('DOMContentLoaded', init);