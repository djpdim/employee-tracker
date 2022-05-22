class Employee {
    constructor(connection) {
        this.connection = connection
    }

    getEmployees(cb) {
        console.log("Getting all employees")
        this.connection.query(
            `
                SELECT employee.id, employee.first_name, employee.last_name, role.title AS role_title, manager.first_name AS manager
                FROM Employee
                LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN employee manager ON employee.manager_id = manager.id
        `,
            (err, res) => {
                if (err) throw err
                cb(res)
            }
        )
    }

    getEmployeesByDepartment(departmentId, cb) {
        this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary FROM employee INNER JOIN role on employee.role_id = role.id AND department_id=?",
            departmentId,
            function (err, res) {
                if (err) throw err
                cb(res)
            }
        )
    }

    addEmployee(employee, cb) {
        console.log("Adding employee...")
        this.connection.query(
            "INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
            employee,
            (err, res) => {
                if (err) throw err
                cb(res)
            }
        )
    }

    updateEmployeeRole(employeeId, roleId, cb) {
        console.log("Updating employee role...")
        this.connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId], (err, res) => {
            if (err) throw err
            cb(res)
        })
    }

    updateEmployeeManager(employeeId, managerId, cb) {
        console.log("Updating employee manager...")
        this.connection.query(
            "UPDATE employee SET manager_id = ? WHERE id = ?",
            [managerId, employeeId],
            (err, res) => {
                if (err) throw err
                cb(res)
            }
        )
    }

    removeEmployee(id, cb) {
        console.log("Removing employee...")
        this.connection.query("DELETE FROM employee WHERE id=?", id, (err, res) => {
            if (err) throw err
            cb(res)
        })
    }
}

module.exports = Employee
