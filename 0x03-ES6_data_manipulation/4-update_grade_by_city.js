/* eslint-disable */

function upgradeStudentGradeByCity(studentsArray, city, gradeArray) {
  return studentsArray
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeRecord = gradeArray.find(
        (element) => element.studentId === student.id
      );
      // console.log(gradeRecord);
      student.grade = gradeRecord ? gradeRecord.grade : 'N/A';
      return student;
    });
}

export default upgradeStudentGradeByCity;
