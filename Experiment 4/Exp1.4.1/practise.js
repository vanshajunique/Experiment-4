const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let employeeData = [];

function menu() {
    console.log("\nEmployee Management System");
    console.log("1. Add Employee");
    console.log("2. View Employees");
    console.log("3. Exit");
    rl.question("Choose an option: ", function (option) {
        switch (option) {
            case '1': addEmployee(); break;
            case '2': viewEmployees(); break;
            case '3': rl.close(); break;
            default: console.log("Invalid option!"); menu();
        }
        function addEmployee() {
            rl.question("Enter employee name: ", function (name) {
                rl.question("Enter employee position: ", function (position) {
                    employeeData.push({ name, position });
                    console.log("Employee added successfully!");
                    menu();
                });
            });

        }
        function viewEmployees() {
            if (employeeData.length === 0) {
                console.log("No employees found.");
            } else {
                console.log("\nEmployee List:");
                employeeData.forEach((employee, index) => {
                    console.log(`${index + 1}. Name: ${employee.name}, Position: ${employee.position}`);
                });
            }
            menu();
        }
    });
}

menu();