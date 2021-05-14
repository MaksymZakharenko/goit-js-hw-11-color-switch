const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorsLength = colors.length;

const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".btn2");
const startBtn = document.querySelector('button[data-action="start"]');
const pauseBtn = document.querySelector('button[data-action="pause"]');
const clearBtn = document.querySelector('button[data-action="clear"]');
let timerColor = null;

startBtn.addEventListener("click", () => {
  startBtn.setAttribute("disabled", "disabled");
  timerColor = setInterval(() => {
    let randomColor = randomIntegerFromInterval(1, colorsLength);
    bodyRef.style.backgroundColor = colors[randomColor];
    btnRef.style.backgroundColor = colors[randomColor + 1];
    pauseBtn.style.backgroundColor = colors[randomColor + 1];
    clearBtn.style.backgroundColor = colors[randomColor + 1];

    console.log("start");
  }, 500);
});

pauseBtn.addEventListener("click", () => {
  startBtn.removeAttribute("disabled");
  clearInterval(timerColor);
  console.log("pause!");
});

clearBtn.addEventListener("click", () => {
  startBtn.removeAttribute("disabled");
  clearInterval(timerColor);
  bodyRef.style.backgroundColor = "white";
  console.log("stop!");
});
