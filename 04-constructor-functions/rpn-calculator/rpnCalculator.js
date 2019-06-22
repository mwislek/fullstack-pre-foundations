/* eslint-disable no-unused-vars, no-throw-literal*/
function RPNCalculator() {
  this.valueStack = [];
}

RPNCalculator.prototype.push = function(operand) {
  this.valueStack.push(operand);
  return this;
}

RPNCalculator.prototype.plus = function() {
  if (this.valueStack.length < 2) {
    console.log('RPNCalculator.plus(): ERROR: incomplete value stack');
    throw 'rpnCalculatorInstance is empty';
  }

  let rightOperand = this.valueStack.pop();
  let leftOperand = this.valueStack.pop();
  let sum = leftOperand + rightOperand;
  this.valueStack.push(sum);

  return this;
}

RPNCalculator.prototype.value = function() {
  if (this.valueStack.length === 0) {
    console.log('RPNCalculator.value(): ERROR: empty value stack');
  }

  return this.valueStack[0];
}

RPNCalculator.prototype.minus = function() {
  if (this.valueStack.length < 2) {
    console.log('RPNCalculator.minus(): ERROR: incomplete value stack');
    throw 'rpnCalculatorInstance is empty';
  }

  let rightOperand = this.valueStack.pop();
  let leftOperand = this.valueStack.pop();
  let difference = leftOperand - rightOperand;
  this.valueStack.push(difference);

  return this;
}

RPNCalculator.prototype.times = function() {
  if (this.valueStack.length < 2) {
    console.log('RPNCalculator.times(): ERROR: incomplete value stack');
    throw 'rpnCalculatorInstance is empty';
  }

  let rightOperand = this.valueStack.pop();
  let leftOperand = this.valueStack.pop();
  let product = leftOperand * rightOperand;
  this.valueStack.push(product);

  return this;
}

RPNCalculator.prototype.divide = function() {
  if (this.valueStack.length < 2) {
    console.log('RPNCalculator.divide(): ERROR: incomplete value stack');
    throw 'rpnCalculatorInstance is empty';
  }

  let rightOperand = this.valueStack.pop();
  let leftOperand = this.valueStack.pop();
  let division = leftOperand / rightOperand;
  this.valueStack.push(division);

  return this;
}

