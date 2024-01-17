const previousOperationText = document.querySelector("#previousoperation");
const currentOperationText = document.querySelector("#currentoperation");
const buttons = document.querySelectorAll("#buttonscontainer button");

class calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }
  //adiciona os digitos na tela da calculadora
  addDigit(digit) {
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }

    this.currentOperation = digit;
    this.updateScreen();
  }

  //process all calculator operations
  processOperation(operation) {
    // get current and previous value
    let opeartionValue
    let previous = +this.previousOperationText.innerText;
    let currrent = +this.currentOperationText.innerText;
  }

  //
  updateScreen() {
    this.currentOperationText.innerText += this.currentOperation;
  }
}

const calc = new calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else calc.processOperation(value);
  });
});
