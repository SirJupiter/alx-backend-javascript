/* eslint-disable */

function getStudentsByLocation(studentsArray, city) {
  return studentsArray.filter((studentObj) => studentObj.location === city);
}

export default getStudentsByLocation;
