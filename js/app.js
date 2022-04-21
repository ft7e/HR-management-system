"use strict";
const employeesData = [];

function Employee(id, name, department, level, imageURL, salary) {
  this.employeeID = id;
  this.fullName = name;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = salary;
  employeesData.push(this);
}

Employee.prototype.employeeSalary = function () {
  let basicSalary;
  if (this.level.toLocaleLowerCase() === "senior") {
    basicSalary = Math.floor(Math.random() * (2000 - 1501)) + 1500;
  } else if (this.level.toLocaleLowerCase() === "mid-senior") {
    basicSalary = Math.floor(Math.random() * (1500 - 1001)) + 1000;
  } else if (this.level.toLocaleLowerCase() === "junior") {
    basicSalary = Math.floor(Math.random() * (1000 - 501)) + 500;
  }
  this.salary = basicSalary - basicSalary * 0.075;
};

Employee.prototype.render = function () {
  document.write(
    `<p>Employee name is: ${this.fullName} and his/her salary is: JOD ${this.salary}</p>`
  );
  console.log(
    `<p>Employee name is: ${this.fullName} and his/her salary is: JOD ${this.salary}</p>`
  );
};

let employee1000 = new Employee(
  1000,
  "Ghazi Samer",
  "Administration",
  "senior",
  "images/undefined.jpg",
  0
);
let employee1001 = new Employee(
  1001,
  "Lana Ali",
  "Finance",
  "senior",
  "images/undefined.jpg",
  0
);
let employee1002 = new Employee(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "senior",
  "images/undefined.jpg",
  0
);
let employee1003 = new Employee(
  1003,
  "Safi Walid",
  "Administration",
  "mid-senior",
  "images/undefined.jpg",
  0
);
let employee1004 = new Employee(
  1004,
  "Omar Zaid",
  "Development",
  "senior",
  "images/undefined.jpg",
  0
);
let employee1005 = new Employee(
  1005,
  "Rana Saleh",
  "Development",
  "junior",
  "images/undefined.jpg",
  0
);
let employee1006 = new Employee(
  1006,
  "Hadi Ahmad",
  "Finance",
  "mid-senior",
  "images/undefined.jpg",
  0
);

employee1000.employeeSalary();
employee1001.employeeSalary();
employee1002.employeeSalary();
employee1003.employeeSalary();
employee1004.employeeSalary();
employee1005.employeeSalary();
employee1006.employeeSalary();

employee1000.render();
employee1001.render();
employee1002.render();
employee1003.render();
employee1004.render();
employee1005.render();
employee1006.render();

console.log(employeesData);
