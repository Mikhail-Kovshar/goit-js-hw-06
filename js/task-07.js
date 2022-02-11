const textSise = document.querySelector("#text");
const inputValue = document.querySelector("#font-size-control");

inputValue.addEventListener("input", fontTextSize);
textSise.style.fontSize = `${inputValue.value}px`
function fontTextSize() {
    textSise.style.fontSize = `${inputValue.value}px`;
}