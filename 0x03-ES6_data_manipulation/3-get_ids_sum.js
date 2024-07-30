/* eslint-disable */

function getStudentIdsSum(studentsArray) {
  return studentsArray.map((student) => student.id).reduce((a, b) => a + b, 0);
}

export default getStudentIdsSum;
