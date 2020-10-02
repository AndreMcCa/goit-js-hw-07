const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsItemsEl = document.querySelector("#ingredients");
const performTaskEl = document.querySelector(".perform");

const generateItems = (array, link) => {
  const elements = array.map((arr) => {
    const elements = document.createElement("li");
    elements.textContent = arr;

    return elements;
  });
  link.append(...elements);
};

performTaskEl.addEventListener("click", onPerformTask);

function onPerformTask() {
  if (performTaskEl.dataset.reset === "true") {
    generateItems(ingredients, ingredientsItemsEl);

    performTaskEl.textContent = "clear";
    performTaskEl.dataset.reset = "false";

    return;
  }

  if (performTaskEl.dataset.reset === "false") {
    performTaskEl.textContent = "perform";
    performTaskEl.dataset.reset = "true";
    ingredientsItemsEl.innerHTML = "";

    return;
  }
}
