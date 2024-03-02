const process = require('process');

const file = process.argv[2];

const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(file)
      .then((data) => {
        response.statusCode = 200;
        const report = ['This is the list of our students'];
        report.push(`Number of students in CS: ${data.CS.length}. List:${data.CS}`);
        report.push(`Number of students in SWE: ${data.SWE.length}. List:${data.SWE}`);

        response.send(report.join('\n'));
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    readDatabase(file)
      .then((data) => {
        if (!field) {
          return res.status(400).send('Major parameter is missing');
        }
        if (field === 'CS') {
          response.status(200).send(`List:${data.CS}`);
        } else if (field === 'SWE') {
          response.status(200).send(`List:${data.SWE}`);
        } else {
          response.status(500).send('Major parameter must be CS or SWE');
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        response.status(500).send('Cannot load the database');
      });
  }
}
module.exports = StudentsController;
