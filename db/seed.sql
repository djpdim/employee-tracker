USE etracker_DB;

INSERT INTO Department (name) VALUES
("Sales"), ("Finance"), ("Engineering"), ("Legal");

INSERT INTO Role (title, salary, department_id) VALUES
("Salesperson", 80000, 1),
("Sales Lead", 10000, 1),
("Lead Engineering", 150000, 3),
("Software Engineering", 120000, 3),
("Accountant", 125000, 2),
("Lawyer", 190000, 4),
("Legal Team Lead", 250000, 4);

INSERT INTO Employee (first_name, last_name, role_id) VALUES
("Joyce","Thomas",7),
("Wanda","Long",3),
("Paula","Martin",3),
("Brenda","Nelson",2),
("Elizabeth","Walker",5);

INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES
("Roger","Baker",1,2),
("Joan","James",1,2),
("Aaron","Russel",4,7),
("Louise","Flores",1,2),
("Robert","Wilson",4,7),
("Lawrence","Ward",6,7),
("Teresa","Bennet",6,7),
("David","Ross",4,11),
("Walter","Perry",4,11),
("Evelyn","Diaz",4,11);
