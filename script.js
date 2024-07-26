const numberCollector = document.querySelector("#nmbr");
const btnEl = document.querySelector("#btnFactorial");
const resetBtn = document.querySelector("#reset");
const resultScreen = document.querySelector(".result");

function factorialFinder(n) {
  let prod = 1;
  let i;
  for (i = n; i >= 1; i--) {
    prod *= i;
  }
  return prod;
}
// console.log(factorialFinder(10));

// factorial displayer

function factorialDisplayer(a) {
  resultScreen.innerHTML = `the facotrial of ${a} is   
        <b>${factorialFinder(a)}</b>`;
}
btnEl.addEventListener("click", () => {
  let val = Number(numberCollector.value);
  if (val) {
    factorialDisplayer(val);
    numberCollector.value = "";
    // console.log(val);
  } else {
    console.log("please enter the value");
  }
  numberCollector.value = "";
});
function reset() {
  numberCollector.value = "";
  resultScreen.innerHTML = "";
}
resetBtn.addEventListener("click", function () {
  reset();
});
