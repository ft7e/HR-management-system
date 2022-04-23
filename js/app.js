"use strict";
const employeesData = [];
let cardsSection = document.querySelector("#cards-section");
let mainForm = document.querySelector("#main-form");

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
  let cardDiv = document.createElement("div");
  cardsSection.appendChild(cardDiv);
  cardDiv.classList.add("card-div");
  //----------------------
  let name = document.createElement("h3");
  name.textContent = this.fullName;
  cardDiv.appendChild(name);
};
function addCard(event) {
  event.preventDefault();
  let formFullName = document.querySelector("#fname").value;
  let formImgUrl = document.querySelector("#img-url").value;
  let formDepSelector = document.querySelector("#department").value;
  console.log(formDepSelector);
}

mainForm.addEventListener("submit", addCard);

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

for (let i = 0; i < employeesData.length; i++) {
  employeesData[i].employeeSalary();
}
for (let i = 0; i < employeesData.length; i++) {
  employeesData[i].render();
}

// DOM section
