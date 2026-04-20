let employees = [];

function addEmployee() {

    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = Number(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    let emp = {
        name: name,
        id: id,
        salary: salary,
        department: dept
    };

    employees.push(emp);

    alert("Employee Added!");

}

function displayEmployees() {

    let output = "";

    for (let emp of employees) {
        output += `
        Name: ${emp.name} |
        ID: ${emp.id} |
        Salary: ${emp.salary} |
        Department: ${emp.department}
        <br><br>`;
    }

    document.getElementById("output").innerHTML = output;

}

function filterSalary() {

    let filtered = employees.filter(emp => emp.salary > 50000);

    let output = "";

    for (let emp of filtered) {
        output += `
        ${emp.name} - ₹${emp.salary} (${emp.department}) <br>`;
    }

    document.getElementById("output").innerHTML = output;

}

function totalSalary() {

    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML =
        "Total Salary Payout = ₹" + total;

}

function averageSalary() {

    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        "Average Salary = ₹" + avg;

}

function countDepartment() {

    let dept = document.getElementById("deptSearch").value;
    let count = 0;

    for (let emp of employees) {
        if (emp.department === dept) {
            count++;
        }
    }

    document.getElementById("output").innerHTML =
        "Employees in " + dept + " department = " + count;

}