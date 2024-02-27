// Reading a file synchronously with Node JS
const fs = require('fs');

function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        // Remove header line
        // lines.shift();
        const students = lines.slice(1).map((line) => line.split(','));

        const csStudents = students.filter((student) => student.includes('CS'));
        const sweStudents = students.filter((student) => student.includes('SWE'));

        const sweCount = sweStudents.length;
        const csCount = csStudents.length;

        const csList = csStudents.map((student) => student[0]);
        const sweList = sweStudents.map((student) => student[0]);

        const reportParts = [
          `Number of students: ${students.length}`,
          `Number of students in CS: ${csCount}. List: ${csList.join(', ')}`,
          `Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`,
        ];
        console.log(reportParts.join('\n'));
        resolve();
      }
    });
  });
}
module.exports = countStudents;
