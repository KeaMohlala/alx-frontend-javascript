export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentsByCity = studentList.filter((student) => student.location === city);
  const updatedStudents = studentsByCity.map((student) => {
    const studentCopy = { ...student };
    const gradeUpdate = newGrades.find(({ studentId }) => studentId === student.id);
    const newGrade = gradeUpdate ? gradeUpdate.grade : 'N/A';
    studentCopy.grade = newGrade;
    return studentCopy;
  });
  return updatedStudents;
}
