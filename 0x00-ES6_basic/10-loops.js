/* eslint-disable */

export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    // Find the index using the findIndex method
    const index = array.indexOf(value);
    array[index] = appendString + value;
  }

  return array;
}
