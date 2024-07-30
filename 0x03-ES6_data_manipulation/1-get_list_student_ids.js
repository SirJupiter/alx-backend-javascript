/* eslint-disable */

function getListStudentIds (arrObject) {
  if (!Array.isArray(arrObject)) return [];

  const idArray = arrObject.map(eachObj => eachObj.id);
  return idArray;
}

export default getListStudentIds;
