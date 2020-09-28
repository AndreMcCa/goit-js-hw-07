const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("change", onFocusInputValidator);

function onFocusInputValidator(e) {
  if (Number(e.currentTarget.value.length) === Number(inputEl.dataset.length)) {
    inputEl.classList.contains("invalid")
      ? inputEl.classList.replace("invalid", "valid")
      : inputEl.classList.add("valid");
  } else if (Number(e.currentTarget.value.length) === 0) {
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
    }

    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
  } else {
    inputEl.classList.contains("valid")
      ? inputEl.classList.replace("valid", "invalid")
      : inputEl.classList.add("invalid");
  }
}
