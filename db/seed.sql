INSERT INTO department (name)
VALUES
('IT'),
('Finance & Accounting'),
('Sales & Marketing'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 85000, 1),
('Software Engineer', 125000, 1),
('Accountant', 60000, 2),
('Financial Analyst', 155000, 2),
('Marketing Coordinator', 75000, 3),
('Sales Lead', 95000, 3),
('Project Manager', 105000, 4),
('Operations Manager', 95000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Smith', 2, null),
('Aaliyah', 'Brown', 1, 1),
('Michael', 'Miller', 4, null),
('Ana', 'Martinez', 3, 3),
('Franklin', 'Moore', 6, null),
('Maria', 'Ramirez', 5, 5),
('Felix', 'Jones', 7, null),
('Sasha', 'Almonte', 8, 7);