const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onСhangesFontSize);

function onСhangesFontSize() {
  textEl.style.fontSize = `${this.value}px`;
}

//
//
//
//
//
//! private-code

const sliderEl = document.querySelector(".slider");
const sliderBeforeEl = document.querySelector(".js-slider-before");
const sliderValueEl = document.querySelector(".slider-value");

console.log(sliderBeforeEl);

inputEl.oninput = function () {
  sliderEl.style.left = `${this.value * 1.2820512821}%`;
  sliderBeforeEl.style.left = `${this.value * 1.2820512821}%`;
  sliderValueEl.textContent = `${this.value}px`;
};
