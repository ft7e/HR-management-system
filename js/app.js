"use strict";
const employeesData = [];
let cardsSection = document.querySelector("#cards-section");
let mainForm = document.querySelector("#main-form");
const idArr = [];
const generateID = function () {
  let uniqueID = Math.floor(Math.random() * 10000);
  for (let i = 0; i < idArr.length; i++) {
    if (uniqueID === idArr[i]) generateID();
    else {
      idArr.push(uniqueID);
      return uniqueID;
    }
  }
};

function Employee(name, department, level, imageURL, salary) {
  this.employeeID = generateID();
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
  let cardDiv = document.createElement("div"); // create a div
  cardsSection.appendChild(cardDiv);
  cardDiv.classList.add("card-div");
  //----------------------
  let empImg = document.createElement("img"); //create image
  empImg.src = this.imageURL;
  cardDiv.appendChild(empImg);
  //---------------------------
  let empName = document.createElement("h3"); // create name
  empName.textContent = this.fullName;
  cardDiv.appendChild(empName);
  //--------------------------
  let empDepartment = document.createElement("p"); // create department
  empDepartment.textContent = this.department;
  cardDiv.appendChild(empDepartment);
  //--------------------------
  let empLevel = document.createElement("p"); // create level
  empLevel.textContent = this.level;
  cardDiv.appendChild(empLevel);
  //--------------------------
  let empID = document.createElement("p"); // create level
  empID.textContent = this.employeeID;
  cardDiv.appendChild(empID);
};
const doImportantStuff = function () {
  employeesData[employeesData.length - 1].employeeSalary();

  employeesData[employeesData.length - 1].render();
};
function addCard(event) {
  event.preventDefault();
  let formFullName = document.querySelector("#fname").value;
  let formImgUrl = document.querySelector("#img-url").value;
  !formImgUrl ? (formImgUrl = "images/squidWard.jpg") : "";
  let formDepSelector = document.querySelector("#department").value;
  let formLevelSelector = document.querySelector("#level").value;

  new Employee(formFullName, formDepSelector, formLevelSelector, formImgUrl, 0);
  doImportantStuff();
}

mainForm.addEventListener("submit", addCard);
