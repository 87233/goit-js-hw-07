const bodyColor = document.querySelector("body");
const buttonChange = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

buttonChange.addEventListener("click", () => {
  const color = getRandomHexColor();
  spanColor.textContent = `${color}`;
bodyColor.style.backgroundColor = `${color}`;});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
