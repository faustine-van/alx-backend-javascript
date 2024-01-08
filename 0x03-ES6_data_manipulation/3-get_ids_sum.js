export default function getStudentIdsSum(getListStudents) {
  // get all ids of getListStudents
  const getIds = getListStudents.map((ids) => ids.id);
  // get total id of getListStudents
  const sumOfIds = getIds.reduce((total, currentId) => total + currentId, 0);
  return sumOfIds;
}
