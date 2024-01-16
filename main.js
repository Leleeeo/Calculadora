const previousOperatorText = document.querySelector("#previousOperator");
const currentOperatorText = document.querySelector("#currentOperator");

class calculator {
  constructor(previousOperatorText, currentOperatorText) {
    this.previousOperatorText = previousOperatorText;
    this.currentOperatorText = currentOperatorText;
    this.currentOperartion = "";
  }
  //add digit to calculator screen
  addDigit(digit) {
    this.currentOperartion += digit;
    this.updateScreen();
  }

  // Change values of calculator screen
  updateScreen() {
    this.currentOperatorText.innerText += this.currentOperartion;
  }
}

const calc = new calculator(previousOperatorText, currentOperatorText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      console.log("op:" + value);
    }
  });
});
