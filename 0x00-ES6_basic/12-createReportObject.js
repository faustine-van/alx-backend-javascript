export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      // or Object.entries(obj).length;
      return Object.keys(employeesList).length;
    },
  };
}
