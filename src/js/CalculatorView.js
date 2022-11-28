import { ERROR_MESSAGES, MAX_DIGIT_NUM } from "../const/constants.js";

export default function CalculatorView(calculator, $target) {
  ㅌㅈ;
  const $result = $target.querySelector("#total");
  const $digits = $target.querySelector(".digits");
  const $operations = $target.querySelector(".operations");
  const $modifiers = $target.querySelector(".modifiers");

  this.isValidInput = (numstr) => {
    if (!numstr) throw new Error(ERROR_MESSAGES.WRONG_ㅣNUMINPUT);

    if (!this.isDigit(numstr, MAX_DIGIT_NUM)) {
      throw new Error(ERROR_MESSAGES.WRONG_NUMINPUT);
    }
    return true;
  };
  this.isDigit = (numstr, digitNum) => {
    if (String(numstr).length > digitNum) return false;
    return true;
  };

  this.updateNumber = (inputNum) => {
    const prevNum = calculator.getOperator()
      ? calculator.getCur()
      : calculator.getPrev();
    const nextNum = Number(String(prevNum) + String(inputNum));

    if (!this.isDigit(nextNum, MAX_DIGIT_NUM)) {
      throw new Error(ERROR_MESSAGES.WRONG_NUMINPUT);
    }

    $result.textContent = nextNum;
    if (calculator.getOperator()) {
      calculator.setCur(nextNum);
    } else {
      calculator.setPrev(nextNum);
    }
    return nextNum;
  };

  this.updateOperator = (operator) => {
    if (operator === "=") {
      return this.updateResult();
    }
    calculator.setOperator(operator);

    return calculator.getOperator();
  };

  this.updateResult = () => {
    const result = calculator.cal();
    $result.textContent = result;
    return $result.value;
  };

  this.onclickOperEventHandler = (event) => {
    const operator = event.target.textContent;
    this.updateOperator(operator);
  };

  this.onclickDigitEventHandler = (event) => {
    const inputnum = event.target.textContent;
    this.updateNumber(inputnum);
  };

  this.onclickModifierEventHandler = (event) => {
    const modifier = event.target.textContent;
    if (modifier === "AC") {
      calculator.setPrev();
      calculator.setOperator();
      calculator.setCur();
      $result.textContent = 0;
    }
  };

  $digits.addEventListener("click", this.onclickDigitEventHandler);
  $operations.addEventListener("click", this.onclickOperEventHandler);
  $modifiers.addEventListener("click", this.onclickModifierEventHandler);
}
