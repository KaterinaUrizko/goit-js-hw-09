function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
import Notiflix from 'notiflix';

const refs = {
  
  delay: document.querySelector("[name='delay']"),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  submit: document.querySelector("button"),

};

// refs.submit.addEventListener('submit', onSubmitForm);


refs.submit.addEventListener('click', onClickBtn);



function onClickBtn(event) {

  event.preventDefault();

    let delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);

   if (delay < 0 || step < 0 || amount <= 0) {
        Notiflix.Notify.warning('Please choose a number more then 0');
      
     return;
    } 
   
   
  for (let position = 1; position <= amount; position += 1) {
    
        
        createPromise(position, delay)
      .then(({ position, delay }) => {
               
          Notiflix.Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
  });
    
    delay += step;
    
};
}

// генератора промісів додайте будь ласка перевірку якщо delay < 0 або step < 0 або amount <= 0
// https://prnt.sc/w78tFTVgY0fv то показуємо повідомлення що значення мають бути більші за 0"

function createPromise(position, delay) {


  const shouldResolve = Math.random() > 0.3;


        return new Promise((resolve, reject) => {

        setTimeout(() => {
      
          if (shouldResolve) {
    
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};



// function onSubmitForm(e) {

// const step = Number(refs.step.value);
// const amount = Number(refs.amount.value);
//   let delay = Number(refs.delay.value);
  
//   e.preventDefault();

//   console.log("click");
  
//   for (let position = 0; position < amount; position = +1)
//   {
//       createPromise(position, delay)
//       .then(({ position, delay }) => {
  
//        Notiflix.Notify.success(`Hurra! position  ${position}`)
//       }).catch(({ position, delay }) => {
//         Notiflix.Notify.failure("So sad!")
//       })
    
//     delay += step;
//   }  
  
// };  
  

// let { delay, step, amount } = Object.fromEntries (
//   new FormData(e.currentTarget)
// );

// amount = Number(amount);
// step = Number(step);
// delay = Number(delay);

// amount += amount;
// step += step;
// delay += delay;


// console.log (step, position, delay);




