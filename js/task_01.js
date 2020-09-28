const categoriesItemsEl = document.querySelectorAll("#categories .item");
console.log(`В списке ${categoriesItemsEl.length} категории.`);

const categoriesTitleEl = [...categoriesItemsEl].map((el) => {
  return `Категория: ${
    el.querySelector("h2").textContent
  }\nКоличество элементов: ${el.querySelectorAll("li").length}`;
});

console.log(categoriesTitleEl.join("\n"));

/*
 *
 *
 *
 *
 *
 * ! private core
 *
 *
 *
 *
 *
 */

const performTaskEl = document.querySelector(".perform");
const resultTextEl = document.querySelector(".js-result-text");

performTaskEl.addEventListener("click", onPerformTask);

function onPerformTask() {
  if (performTaskEl.dataset.reset === "true") {
    const result = `В списке ${categoriesItemsEl.length} категории.`;

    const categoriesTitleEl = [...categoriesItemsEl].map((el) => {
      return `Категория: ${
        el.querySelector("h2").textContent
      }. Количество элементов: ${el.querySelectorAll("li").length}.`;
    });

    console.log(result);
    console.log(categoriesTitleEl);

    const finish = [result, ...categoriesTitleEl].map((el) => {
      const res = document.createElement("p");
      res.textContent = el;
      return res;
    });

    resultTextEl.append(...finish);

    performTaskEl.textContent = "clear";
    performTaskEl.dataset.reset = "false";

    return;
  }

  if (performTaskEl.dataset.reset === "false") {
    performTaskEl.textContent = "perform";
    performTaskEl.dataset.reset = "true";
    resultTextEl.innerHTML = "";

    return;
  }
}
