function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
 const btnCreate = document.querySelector("[data-create]");
 const btnDestroy = document.querySelector("[data-destroy]");
 const boxes = document.querySelector("#boxes");

 btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destoyBoxes);
 

let num = 0;

function createBoxes() {
  const target = input.value;
 for (let i = 0; i <= target -1; i += 1) {
    const boxElement = document.createElement("div");
    boxElement.style.width = 30 + 10*(i+num) + "px"
    boxElement.style.height = 30 + 10*(i+num) + "px"
    boxElement.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(boxElement)
     }
  
   num += Number(target);
  }
 
 function destoyBoxes() {
   boxes.innerHTML = "";
   num = 0;
 }


