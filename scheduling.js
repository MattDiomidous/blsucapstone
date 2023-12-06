const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function saveStudentData(studentArray) {
  const jsonData = JSON.stringify({ students: studentArray }, null, 2);
  fs.writeFileSync('students.json', jsonData);
  console.log('Student data saved successfully!');
}

function loadStudentData() {
  try {
    const jsonData = fs.readFileSync('students.json', 'utf8');
    const data = JSON.parse(jsonData);
    return data.students || [];
  } catch (error) {
    return [];
  }
}

function addStudent() {
  rl.question('Enter name and email (e.g., Jane Doe, janedoe1@gmail.com): ', (input) => {
    const [name, email] = input.split(',').map(item => item.trim());
    const studentArray = loadStudentData();
    studentArray.push({ name, email });
    saveStudentData(studentArray);
    rl.close();
  });
}

function displayStudentData() {
  const studentArray = loadStudentData();
  if (studentArray.length > 0) {
    console.log('Student Data:');
    studentArray.forEach(student => {
      console.log(`Name: ${student.name}, Email: ${student.email}`);
    });
  } else {
    console.log('No student data available.');
  }
}

// Uncomment the following line to add a new student
// addStudent();

// Uncomment the following line to display all students
// displayStudentData();
