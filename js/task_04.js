const valueEl = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

incrementBtn.addEventListener("click", () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});

decrementBtn.addEventListener("click", () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});
