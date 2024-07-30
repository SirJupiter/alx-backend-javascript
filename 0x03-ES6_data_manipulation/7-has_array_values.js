/* eslint-disable */

function hasValueFromArray(set, arr) {
  return arr.every((value) => set.has(value));
  // return set.isSupersetOf(new Set(arr));
}

export default hasValueFromArray;
