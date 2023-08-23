let student = {
  name: "sujon",
  age: 20,
  country: null,
  cgpa: 0,
};

const newStudent = {};

for (const studentValue in student) {
  if (student[studentValue]) {
    newStudent[studentValue] = student[studentValue];
  }
}
console.log(newStudent);
