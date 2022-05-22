class Department {
    constructor(connection) {
        this.connection = connection
    }

    getDepartments(cb) {
        console.log("Getting all departments...")
        this.connection.query("SELECT * FROM Department", (err, res) => {
            if (err) throw err
            cb(res)
        })
    }

    getDepartmentBudget(id, cb) {
        this.connection.query(
            "SELECT SUM(role.salary) FROM employee INNER JOIN role on employee.role_id = role.id AND department_id=?",
            id,
            (err, res) => {
                if (err) throw err
                cb(res)
            }
        )
    }

    addDepartment(department, cb) {
        console.log("Adding department...")
        this.connection.query("INSERT INTO department(name) VALUES (?)", department, (err, res) => {
            if (err) throw err
            cb(res)
        })
    }

    removeDepartment(id, cb) {
        console.log("Removing department...")
        this.connection.query("DELETE FROM department WHERE id=?", id, (err, res) => {
            if (err) throw err
            cb(res)
        })
    }
}

module.exports = Department
