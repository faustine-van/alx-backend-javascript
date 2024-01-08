function getStudentsByLocation(getListStudents, city) {
  const cities = getListStudents.filter((element) => element.location === city);
  return cities;
}
export default getStudentsByLocation;
