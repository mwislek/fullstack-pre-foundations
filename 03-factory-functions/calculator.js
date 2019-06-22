/* eslint-disable no-unused-vars */
function createCalculator() {
  return {
    initialValue: 0,
    total: 0,

    value() {
      return this.total;
    },

    add(operand) {
      this.total += operand;

      return this;
    },

    subtract(operand) {
      this.total -= operand;
    },

    clear() {
      this.total = this.initialValue;
    }
  };
}

function addSquareMethod(calculators) {
  for (let calculator of calculators) {
    calculator.square = function() {
      this.total *= this.total;

      return this.total;
    }
  }
  return calculators;
}

function createHumanCalculator() {
  let newHumanCalculator = Object.create(createCalculator());

  newHumanCalculator.initialValue = -10;
  newHumanCalculator.total = -10;

  return newHumanCalculator;
}
