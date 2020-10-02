const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onСhangesFontSize);

function onСhangesFontSize(e) {
  textEl.style.fontSize = `${e.target.value}px`;
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

inputEl.oninput = function () {
  sliderEl.style.left = `${this.value * 1.2820512821}%`;
  sliderBeforeEl.style.left = `${this.value * 1.2820512821}%`;
  sliderValueEl.textContent = `${this.value}px`;
};
