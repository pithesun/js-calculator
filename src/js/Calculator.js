import { ERROR_MESSAGES } from "../const/constants.js";

Calculator.prototype.setPrev = function (num) {
  this.prev = num;
};

Calculator.prototype.getPrev = function () {
  return this.prev || 0;
};

Calculator.prototype.setCur = function (num) {
  this.cur = num;
};

Calculator.prototype.getCur = function () {
  return this.cur || 0;
};

Calculator.prototype.setOperator = function (operator) {
  this.operator = operator;
};

Calculator.prototype.getOperator = function () {
  return this.operator;
};

Calculator.prototype.getOperator = function () {
  return this.operator;
};

Calculator.prototype.setRoundingModeDown = function (func) {
  return function () {
    const result = func.call(this);
    return Math.floor(result);
  };
};

Calculator.prototype.cal = Calculator.prototype.setRoundingModeDown(
  function () {
    if (!this.prev || !this.cur) throw new Error(ERROR_MESSAGES.PARAM_MISSING);

    switch (this.operator) {
      case "+":
        return this.sum();
      case "-":
        return this.abstract();
      case "X":
        return this.multiply();
      case "/":
        return this.divide();
    }
  }
);

Calculator.prototype.sum = function () {
  return this.getPrev() + this.getCur();
};
Calculator.prototype.abstract = function () {
  return this.getPrev() - this.getCur();
};
Calculator.prototype.multiply = function () {
  return this.getPrev() * this.getCur();
};
Calculator.prototype.divide = function () {
  return this.getPrev() / this.getCur();
};

export default function Calculator() {
  this.prev, this.cur, this.operator;

  if (!new.target) {
    throw new Error(ERROR_MESSAGES.WRONG_INSTANCE("calculator", "Calculator"));
  }
}
