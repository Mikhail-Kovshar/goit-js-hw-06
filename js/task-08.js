
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (password.length === 0 || mail.length === 0) {
    alert("Все поля должны быть заполнены!!!");
  } else {
    const formData = { password, mail };
    console.log(formData);

    form.reset();
  }
}