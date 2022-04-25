"use strict;";
let numIndex = 0;
let counter = 0;
let resultsArr = [];
let totalSalary = document.getElementById("total-salary");
let totalAvgSalary = document.getElementById("total-avg-salary");
let totalEmpNumber = document.getElementById("total-emp-num");
let empNumTable = document.getElementById("emp-num");
let empSalaryTable = document.getElementById("emp-salary");
let mainTable = document.querySelector("#main-table");
let depName = document.getElementById("dep-name");
let localDB = localStorage.getItem("card");
let localDbArr = JSON.parse(localDB);
// ------------------------------------
let empNum = {
  administration: 0,
  development: 0,
  finance: 0,
  marketing: 0,
};
let empSalary = {
  administration: 0,
  development: 0,
  finance: 0,
  marketing: 0,
};
for (let i = 0; i < localDbArr.length; i++) {
  // to calculate employees num for each dep
  switch (localDbArr[i].department.toLowerCase()) {
    case "administration":
      empNum.administration++;
      empSalary.administration += localDbArr[i].salary;
      break;
    case "development":
      empNum.development++;
      empSalary.development += localDbArr[i].salary;
      break;
    case "finance":
      empNum.finance++;
      empSalary.finance += localDbArr[i].salary;
      break;
    case "marketing":
      empNum.marketing++;
      empSalary.marketing += localDbArr[i].salary;
      break;
  }
}
let empNumArr = Object.values(empNum);
let empSalaryArr = Object.values(empSalary);
let empSalaryAVG = []; // per department

// ---------------------------------
function calSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function calAVG(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / num[i];
}

for (let i = 0; i < empSalaryArr.length; i++) {
  // calculate avg per department
  empSalaryAVG.push(Math.floor(empSalaryArr[i] / empNumArr[i]));
}

function renderAllRows() {
  let td = document.createElement("td");
  let td2 = document.createElement("td");
  td.textContent = empNumArr[numIndex];
  td2.textContent = empSalaryAVG[numIndex];
  empNumTable.appendChild(td);
  empSalaryTable.appendChild(td2);
  numIndex++;
}
function renderLastRows() {
  let th = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  th.textContent = calSum(empSalaryArr);
  th2.textContent = calSum(empSalaryAVG);
  th3.textContent = calSum(empNumArr);
  th.classList.add("total");
  th2.classList.add("total");
  th3.classList.add("total");
  totalSalary.appendChild(th);
  totalAvgSalary.appendChild(th2);
  totalEmpNumber.appendChild(th3);
}
for (let i = 0; i < empNumArr.length; i++) {
  renderAllRows();
  if (i == empNumArr.length - 1) renderLastRows();
}
