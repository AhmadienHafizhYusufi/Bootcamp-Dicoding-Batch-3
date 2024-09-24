let awesomeComponentEl = document.querySelector("awesome-component");

const changeColorButton = document.querySelector("#changeColor");
const changeSizeButton = document.querySelector("#changeSize");
const removeElementButton = document.querySelector("#removeElement");

changeColorButton.onclick = () => {
  awesomeComponentEl.setAttribute("color", "lightBlue");
};

changeSizeButton.onclick = () => {
  awesomeComponentEl.setAttribute("size", "250");
};

removeElementButton.onclick = () => {
  awesomeComponentEl.remove();
};
