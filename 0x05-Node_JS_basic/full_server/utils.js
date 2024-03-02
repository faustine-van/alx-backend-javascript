const fs = require('fs');

// eslint-disable-next-line consistent-return
function readDatabase(filePath) {
  try {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const lines = data.split('\n').filter((line) => line.trim() !== '');
          lines.shift();

          const students = lines.map((line) => line.split(','));
          const csStudents = students.filter((student) => student.includes('CS'));
          const sweStudents = students.filter((student) => student.includes('SWE'));

          const csList = csStudents.map((student) => ` ${student[0]}`);
          const sweList = sweStudents.map((student) => ` ${student[0]}`);
          resolve({
            CS: csList,
            SWE: sweList,
          });
        }
      });
    });
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = readDatabase;
