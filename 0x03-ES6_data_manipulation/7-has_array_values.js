/* eslint-disable */

function hasValueFromArray(set, arr) {
  return set.isSupersetOf(new Set(arr));
}

export default hasValueFromArray;
