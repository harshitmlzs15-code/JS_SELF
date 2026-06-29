let employees = [];

function addEmployee() {
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const salaryValue = document.getElementById("salary").value;

    if (!name || !id || !salaryValue || isNaN(salaryValue)) {
        alert("Please enter valid details for all fields.");
        return;
    }

    let emp = {
        name: name,
        id: id,
        salary: parseInt(salaryValue)
    };

    employees.push(emp);
    alert("Employee Added: " + name);
    
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
}

function displayEmployees() {
    const displayRes = document.getElementById("result");
    if (employees.length === 0) {
        displayRes.innerHTML = "No records to display.";
        return;
    }

    let output = "<strong>Current Staff:</strong><br>";
    employees.forEach(emp => {
        output += `ID: ${emp.id} | ${emp.name} | Rs. ${emp.salary}<br>`;
    });
    displayRes.innerHTML = output;
}

function filterSalary() {
    let salaryabove80k = employees.filter(emp => emp.salary > 80000);
    
    let output = "<strong>Salaries > Rs. 80,000:</strong><br>";
    if (salaryabove80k.length === 0) {
        output += "No employees meet this criteria.";
    } else {
        salaryabove80k.forEach(emp => {
            output += `${emp.name}: Rs. ${emp.salary}<br>`;
        });
    }
    document.getElementById("result").innerHTML = output;
}

function totalSalary() {
    const total = employees.reduce((acc, emp) => acc + emp.salary, 0);
    document.getElementById("result").innerHTML = `<strong>Total Budget:</strong> Rs. ${total}`;
}

function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("result").innerHTML = "Average Salary: Rs. 0";
        return;
    }
    const total = employees.reduce((acc, emp) => acc + emp.salary, 0);
    const avg = total / employees.length;

    document.getElementById("result").innerHTML = `<strong>Average Salary:</strong> Rs. ${avg.toFixed(2)}`;
}