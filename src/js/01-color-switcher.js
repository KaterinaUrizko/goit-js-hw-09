const startBTN = document.querySelector('[data-start]');
const stopBTN = document.querySelector('[data-stop]');
const backGround = document.querySelector('body');

startBTN.addEventListener('click', onChangeColor);
stopBTN.addEventListener('click', onStopColor);

let timerInt = null;

function onChangeColor() {
  timerInt = setInterval(() => {
    let color = getRandomHexColor();
    backGround.style.backgroundColor = `${color}`;
  }, 1000);
  startBTN.disabled = true;
}

function onStopColor() {
  clearInterval(timerInt);
  startBTN.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// goit-js-hw-09/01-color-switcher.js at main · KaterinaUrizko/goit-js-hw-09
