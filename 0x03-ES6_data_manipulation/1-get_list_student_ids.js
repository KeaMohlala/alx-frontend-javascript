export default function getListStudentIds(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }
  const ids = studentsArray.map((student) => student.id);
  return ids;
}
