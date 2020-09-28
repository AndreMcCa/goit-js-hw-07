const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector(".input");
const buttonRender = document.querySelector('[data-action="render"]');
const buttonDestroy = document.querySelector('[data-action="destroy"]');

function getRandomColor() {
  function generateRgb() {
    return Math.floor(Math.random() * (254 - 1) + 1);
  }

  return `rgb(${generateRgb()}, ${generateRgb()}, ${generateRgb()})`;
}

function createBoxes(amount) {
  if (amount <= 100 && amount > 0) {
    let boxes = [];
    let width = 20;

    for (let i = 1; i <= amount; i += 1) {
      let box = document.createElement("div");
      box.style.width = `${width + 10}px`;
      box.style.height = `${width + 10}px`;
      box.style.backgroundColor = getRandomColor();
      box.style.marginTop = `${width / 10}px`;

      width += 10;

      boxes.push(box);
    }

    boxesEl.append(...boxes);

    boxes = [];
    width = 20;
  } else {
    inputEl.value = 1;
  }
}

buttonRender.addEventListener("click", () => {
  const value = Number(inputEl.value);
  createBoxes(value);
});

buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = null;
  inputEl.value = null;
}
