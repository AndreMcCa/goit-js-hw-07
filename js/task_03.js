const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector("#gallery");
const performTaskEl = document.querySelector(".perform");

const createGallery = (array, link) => {
  const elements = [];
  array.map((obj) =>
    elements.push(
      `<li><img src="${obj.url}" alt="${obj.alt}" width="480px"></li>`
    )
  );

  link.insertAdjacentHTML("beforeend", elements.join(""));

  galleryEl.style.justifyContent = "space-around";
};

//! private code

performTaskEl.addEventListener("click", onPerformTask);

function onPerformTask() {
  if (performTaskEl.dataset.reset === "true") {
    createGallery(images, galleryEl);

    performTaskEl.textContent = "clear";
    performTaskEl.dataset.reset = "false";

    return;
  }

  if (performTaskEl.dataset.reset === "false") {
    performTaskEl.textContent = "perform";
    performTaskEl.dataset.reset = "true";
    galleryEl.innerHTML = "";

    return;
  }
}
