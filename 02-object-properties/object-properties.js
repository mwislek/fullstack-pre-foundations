/* eslint-disable no-unused-vars */
function setPropsOnObj(object) {
  object.x = 7;
  object.y = 8;
  object.onePlus = (operand) => ++operand;

  return object;
}

function setPropsOnArr(array) {
  array.hello = () => 'Hello!';
  array.full = 'stack';
  array[0] = 5;
  array.twoTimes = (operand) => operand * 2;
}

function setPropsOnFunc(func) {
  func.year = '20??';
  func.divideByTwo = (operand) => operand / 2;
}

function shallowCopy(first, second) {
  if (Array.isArray(first)) return [...first, ...second];
  else return {...first, ...second};
}