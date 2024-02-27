const express = require('express');
const process = require('process');
const fs = require('fs').promises;

const args = process.argv;
const file = args[2];

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Route for the /students path
app.get('/students', async (req, res) => {
  try {
    const response = await fs.readFile(file, 'utf-8');
    let sweCount = 0;
    let csCount = 0;
    const students = [];
    const args = response.split('\n');
    const items = args.slice(1, -1);
    const reportParts = ['This is the list of our students'];
    reportParts.push(`Number of students: ${items.length}`);
    for (const item of items) {
      students.push(item.split(','));
    }
    const csList = [];
    const sweList = [];
    for (const student of students) {
      for (const s of student) {
        // if (fields.includes('CS')) {
        if (s === 'CS') {
          csCount += 1;
          csList.push(student[0]);
        } else if (s === 'SWE') {
          sweCount += 1;
          sweList.push(student[0]);
        }
      }
    }
    reportParts.push(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
    reportParts.push(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(reportParts.join('\n'));
  } catch (err) {
    // throw new Error('Cannot load the database');
    res.statusCode = 500;
    res.send('Cannot load the database');
  }
});

app.listen(1245);

module.exports = app;
