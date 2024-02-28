const http = require('http');
const process = require('process');
const fs = require('fs').promises;
const url = require('url');

const file = process.argv[2];

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

// Create HTTP server
const app = http.createServer(async (req, res) => {
  // set header
  const repUrl = url.parse(req.url).pathname;
  if (repUrl === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (repUrl === '/students') {
    try {
      const report = await countStudents(file);
      res.setHeader('Content-Type', 'text/plain');
      res.end(report);
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}`);
    }
  }
}).listen(1245, () => {});

// Export the app for external use
module.exports = app;
