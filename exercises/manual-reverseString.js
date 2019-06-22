const reverseString = (str) => {
  let reversedString = '';

  for (let lastIndex = str.length - 1; lastIndex >= 0; lastIndex--) {
    reversedString += str[lastIndex];
  }

  return reversedString;
}

const isFunction = typeof reverseString === 'function';
const str = 'Stranger Things';
const returnTypeString = typeof reverseString(str) === 'string';
const expectedOutput = 'sgnihT regnartS';
const stringArgument = typeof str === 'string';

console.log(`We expect reverseString to return a string: ${returnTypeString}`);
console.log(`When we invoke reverseString('StrangerThings'), the value 'sgnihT regnartS' is returned: ${expectedOutput}`);
console.log(`We expect reverseString to be a function: ${isFunction}`);
console.log(`We expect the reverseString function is called with a string argument: ${stringArgument}`);
