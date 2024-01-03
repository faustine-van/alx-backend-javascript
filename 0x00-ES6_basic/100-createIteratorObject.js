export default function createIteratorObject(report) {
  return [...Object.values(report.allEmployees)[0], ...Object.values(report.allEmployees)[1]];
}
