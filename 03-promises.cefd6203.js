function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");function u(e,t){Math.random()}const l={delay:document.querySelector("[name='delay']"),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),submit:document.querySelector("button")};function u(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}l.submit.addEventListener("click",(function(t){t.preventDefault();let n=Number(l.delay.value);const o=Number(l.step.value),r=Number(l.amount.value);if(n<0||o<0||r<=0)return void e(i).Notify.warning("Please choose a number more then 0");for(let t=1;t<=r;t+=1)u(t,n).then((({position:t,delay:n})=>{e(i).Notify.success(` Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(` Rejected promise ${t} in ${n}ms`)})),n+=o}));
//# sourceMappingURL=03-promises.cefd6203.js.map