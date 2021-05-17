const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const colorsLength = colors.length - 1;
const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".btn2");
const startBtn = document.querySelector('button[data-action="start"]');
const pauseBtn = document.querySelector('button[data-action="pause"]');
const clearBtn = document.querySelector('button[data-action="clear"]');
let timerColor = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnDisable = () => {
  startBtn.removeAttribute("disabled");
  clearInterval(timerColor);
};

startBtn.addEventListener("click", () => {
  startBtn.setAttribute("disabled", "disabled");
  timerColor = setInterval(() => {
    let randomColor = randomIntegerFromInterval(1, colorsLength);
    bodyRef.style.backgroundColor = colors[randomColor];
    if (colors[randomColor] == colors.length) {
      newcolorBtn = colors[randomColor - 2];
    } else {
      newcolorBtn = colors[randomColor + 1];
    }

    btnRef.style.backgroundColor = newcolorBtn;
    pauseBtn.style.backgroundColor = newcolorBtn;
    clearBtn.style.backgroundColor = newcolorBtn;

    console.log("start");
  }, 500);
});

pauseBtn.addEventListener("click", () => {
  btnDisable();
});

clearBtn.addEventListener("click", () => {
  btnDisable();
  bodyRef.style.backgroundColor = "white";
});
