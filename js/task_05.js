const nameInputEl = document.querySelector("#name-input");
const nameSpanEl = document.querySelector("#name-output");

function onGettingUser(e) {
  e.preventDefault();
  if (e.currentTarget.value !== "") {
    nameSpanEl.textContent = e.currentTarget.value;
  } else {
    nameSpanEl.textContent = "незнакомец";
  }
}

nameInputEl.addEventListener("input", onGettingUser);
