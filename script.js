const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.buttons button');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const invert = document.querySelector('.invert');
const erase = document.querySelector('.erase');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    result.innerText += button.value
  });
});

clear.addEventListener('click', () => {
  result.innerText = '';
});

equal.addEventListener('click', () => {
  result.innerText = eval(result.innerText);
});

invert.addEventListener('click', () => {
  soma = result.innerText;
  if (soma[0] === '-') {
    array = soma.split("");
    array.shift();
    array = array.join("")
    result.innerText = array;
  } else {
    let number = Number(soma) * -1
    result.innerText = String(number)
  }
})

erase.addEventListener('click', () => {
  array = result.innerText.split("");
  array.pop();
  array = array.join("");
  result.innerText = array;
})