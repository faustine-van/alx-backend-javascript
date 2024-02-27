const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        lines.shift();

        const students = lines.map((line) => line.split(','));
        const csStudents = [];
        const sweStudents = [];
        students.forEach((student) => {
          const [firstname, field] = student;
          if (field === 'CS') {
            csStudents.push(firstname);
          } else if (field === 'SWE') {
            sweStudents.push(firstname);
          }
        });

        resolve({
          CS: csStudents,
          SWE: sweStudents,
        });
      }
    });
  });
}
module.exports = readDatabase;
