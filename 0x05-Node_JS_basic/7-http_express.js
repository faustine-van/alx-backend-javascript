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
    const res = await fs.readFile(file, 'utf-8');
    let j = 0;
    let u = 0;
    const students = [];
    const args = res.split('\n');
    const items = args.slice(1, -1);
    const reportParts = ['This is the list of our students',
      `Number of students: ${items.length}`];
    for (const item of items) {
      students.push(item.split(','));
    }
    const csList = [];
    const sweList = [];
    for (const student of students) {
      for (const s of student) {
        if (s === 'CS') {
          u += 1;
          csList.push(student[0]);
        } else if (s === 'SWE') {
          j += 1;
          sweList.push(student[0]);
        }
      }
    }
    reportParts.push(`Number of students in CS: ${u}. List: ${csList.join(', ')}`);
    reportParts.push(`Number of students in SWE: ${j}. List: ${sweList.join(', ')}`);
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
