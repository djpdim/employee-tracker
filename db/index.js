const connection = require("../config/connection")
const Employee = require("./Employee")
const Role = require("./Role")
const Department = require("./Department")

class DB {
    constructor(connection) {
        this.connection = connection
        this.Employee = new Employee(connection)
        this.Role = new Role(connection)
        this.Department = new Department(connection)
    }

    findEmployees() {
        return this.connection.promise.query("SELECT * FROM employees")
    }
}

module.exports = new DB(connection)
