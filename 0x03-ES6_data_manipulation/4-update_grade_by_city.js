export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const getStudentByCity = getListStudents.filter((c) => c.location === city);
  const newStudents = getStudentByCity.map((cur) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === cur.id);
    if (matchingGrade) {
      return { ...cur, grade: matchingGrade.grade };
    }
    return { ...cur, grade: 'N/A' };
  });
  return newStudents;
}
