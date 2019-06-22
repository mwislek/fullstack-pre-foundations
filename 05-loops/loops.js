/* eslint-disable no-unused-vars */
function repeat(string, count) {
  let returnString = '';

  for (let i = 0; i < count; ++i){
    returnString += string;
  }

  return returnString;
}

function sum(array) {
  let returnSum = 0;

  // array.reduce((s, e) => s + e, 0);//
  for (let i = 0; i < array.length; ++i) {
    returnSum += array[i];
  }
  
  return returnSum;
}

function join(array, delimiter = '') {
  let returnString = '';
 
  // array.join(delimeter);
  for (let i = 0; i < array.length; ++i) {
    returnString += array[i];

    // no delimeter at the end of the string...
    if ((i + 1) !== array.length) returnString += delimiter;
  }

  return returnString;
}

function gridGenerator(gridSize) {
  let returnGrid = '';
  for (let row = 0; row < gridSize; ++row) {
    for (let col = 0; col < gridSize; ++col) {
      // even numbered rows start with #; odd numbered rows start with ' '
      if (row % 2 === 0) {
        returnGrid += (col % 2 === 0) ? '#' : ' ';
      }
      else {
        returnGrid += (col % 2 === 0) ? ' ' : '#';
      }
    }
    returnGrid += '\n';
  }

  return returnGrid;
}

function paramify(object) {
  let parmArray = [];
  
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      parmArray.push(key + '=' + object[key]);
    }
  }
  parmArray.sort();

  return join(parmArray, '&');
}

function paramifyObjectKeys(object) {
  // let parmArray = [];

  // for (let key of Object.keys(object)) {
  //   parmArray.push(key + '=' + object[key]) ;
  // }
  let parmArray = Object.keys(object).map((key) => key + '=' + object[key]);

  parmArray.sort();

  return join(parmArray, '&');

}

function sort(input) {
  for (let i = 0; i < input.length; ++i) {
    for (let j = i + 1; j < input.length; ++j) {
      if (input[i] > input[j]) {
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }
    }
  }

  return input;
}

