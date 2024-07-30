export default function getStudentIdsSum(studentsList) {
  const sumIds = studentsList.reduce((total, student) => total + student.id, 0);
  return sumIds;
}
