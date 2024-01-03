export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    next() {
      if (currentEmployeeIndex < departments[currentDepartmentIndex].length) {
        const employee = departments[currentDepartmentIndex][currentEmployeeIndex];
        currentEmployeeIndex += 1;
        return { value: employee, done: false };
      }
      currentDepartmentIndex += 1;
      currentEmployeeIndex = 0;
      if (currentDepartmentIndex < departments.length) {
        return this.next();
      }
      return { done: true };
    },
  };
  iterator[Symbol.iterator] = function namedIterator() {
    return this;
  };
  return iterator;
}
