/* eslint-disable */

function cleanSet(set, startString) {
  if (!startString) return '';

  const filteredElements = Array.from(set)
    .filter((element) => element.startsWith(startString))
    .map((element) => element.slice(startString.length))
    .join('-');

  return filteredElements;
}

export default cleanSet;
