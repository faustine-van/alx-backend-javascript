const express = require('express');
const process = require('process');
const fs = require('fs').promises;

const args = process.argv;
const file = args[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

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
    return reportParts.join('\n');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
// Route for the /students path
app.get('/students', async (req, res) => {
  try {
    const report = await countStudents(file);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(report);
  } catch (err) {
    // throw new Error('Cannot load the database');
    res.statusCode = 500;
    res.send('Cannot load the database');
  }
});

app.listen(1245);

module.exports = app;
