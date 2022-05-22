class Role {
    constructor(connection) {
        this.connection = connection
    }

    getRoles(cb) {
        console.log("Getting all roles")
        this.connection.query(
            `
                    SELECT title, salary, name AS department_name
                    FROM role LEFT JOIN department ON role.department_id = department.id`,
            (err, res) => {
                if (err) throw err
                cb(res)
            }
        )
    }

    addRole(role, cb) {
        console.log("Adding new role...")
        this.connection.query("INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?)", role, (err, res) => {
            if (err) throw err
            cb(res)
        })
    }

    removeRole(id, cb) {
        console.log("Removing role...")
        this.connection.query("DELETE FROM role WHERE id=?", id, (err, res) => {
            if (err) throw err
            cb(res)
        })
    }
}

module.exports = Role
