import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours'),
  dataMinutes: document.querySelector('[data-minutes'),
  dataSeconds: document.querySelector('[data-seconds'),
};

refs.startBtn.addEventListener('click', onCountdown);

let selectedDate = '';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    refs.startBtn.disabled = true;

    if (selectedDate < Date.now()) {
      Notiflix.Notify.warning('Please choose a date in the future');

      return;
    }
    refs.startBtn.disabled = false;
    console.log(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);

function onCountdown() {
  const intervalID = setInterval(() => {
    const timeDifference = selectedDate - Date.now();

    if (timeDifference < 0) {
      clearInterval(intervalID);
      Notiflix.Notify.success('The timer has been closed');
      return;
    }

    const timeData = convertMs(timeDifference);

    updateClockface(timeData);
  }, 1000);
}

function updateClockface({ days, hours, minutes, seconds }) {
  refs.dataDays.textContent = `${addLeadingZero(days)}`;
  refs.dataHours.textContent = `${addLeadingZero(hours)}`;
  refs.dataMinutes.textContent = `${addLeadingZero(minutes)}`;
  refs.dataSeconds.textContent = `${addLeadingZero(seconds)}`;
}

function addLeadingZero(number) {
  return String(number).padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
