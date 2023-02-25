refs= {
    startBTN :document.querySelector('[data-start]'),
    stopBTN : document.querySelector('[data-stop]'),
    backGround: document.querySelector('body'), 
}

refs.startBTN.addEventListener('click', onChangeColor);
refs.stopBTN.addEventListener('click', onStopColor);


let timerInt = null;

function onChangeColor () {

   timerInt= setInterval(() => {
        let color = getRandomHexColor();
        refs.backGround.style.backgroundColor =`${color}`},1000
);
        refs.startBTN.disabled = true;
}

function onStopColor () {
        clearInterval(timerInt);
        refs.startBTN.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// goit-js-hw-09/01-color-switcher.js at main · KaterinaUrizko/goit-js-hw-09

