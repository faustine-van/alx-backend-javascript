// Reading a file synchronously with Node JS
const fs = require('fs').promises;

async function countStudents(file) {
  try {
    const response = await fs.readFile(file, 'utf-8');
    const lines = response.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1).map((line) => line.split(','));

    let sweCount = 0;
    let csCount = 0;
    const csList = [];
    const sweList = [];

    for (const student of students) {
      for (const field of student) {
        // if (fields.includes('CS')) {
        if (field === 'CS') {
          csCount += 1;
          csList.push(student[0]);
        } else if (field === 'SWE') {
          sweCount += 1;
          sweList.push(student[0]);
        }
      }
    }
    const reportParts = [
      'This is the list of our students',
      `Number of students: ${students.length}`,
      `Number of students in CS: ${csCount}. List: ${csList.join(', ')}`,
      `Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`,
    ];
    console.log(reportParts.join('\n'));
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
