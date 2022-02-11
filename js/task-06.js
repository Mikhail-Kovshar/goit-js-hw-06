const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onInputCange);

function onInputCange(event) {
  if (
    Number(validationInput.dataset.length) === event.currentTarget.value.length
  ) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}