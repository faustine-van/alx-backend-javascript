// Reading a file synchronously with Node JS
const fs = require('fs').promises;

async function countStudents(file) {
  try {
    const res = await fs.readFile(file, 'utf-8');
    let sweCount = 0;
    let csCount = 0;
    const students = [];
    const args = res.split('\n');
    const items = args.slice(1, -1);
    console.log(`Number of students: ${items.length}`);
    for (const item of items) {
      students.push(item.split(','));
    }
    const csList = [];
    const sweList = [];
    for (const student of students) {
      for (const s of student) {
        if (s === 'CS') {
          csCount += 1;
          csList.push(student[0]);
        } else if (s === 'SWE') {
          sweCount += 1;
          sweList.push(student[0]);
        }
      }
    }
    console.log(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);
    const allCount = items.length;
    return {
      allCount,
      csCount,
      sweCount,
      csList,
      sweList,
    };
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
