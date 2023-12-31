//Variaveis
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

//Funçoes callback
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    screen2(" h2").innerText = `acertou em ${xAttempts} tentativas`;
    xAttempts = 0;
  } else {
    inputNumber.value = "";
    xAttempts++;
  }
  console.log(inputNumber.value);
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
