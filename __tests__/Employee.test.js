const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
});

test("can set name", () => {
    const employeeName = "Kiri";
    const employee = new Employee(employeeName);

    expect(employee.name).toBe(employeeName);
});

test("can set id", () => {
    const employeeID = 2;
    const employee = new Employee("Kiri", 2);

    expect(employee.id).toBe(employeeID);
});

test("can set email", () => {
    const employeeEmail = "Hello@email.com";
    const employee = new Employee("Kiri", 2, employeeEmail);

    expect(employee.email).toBe(employeeEmail);
});

test("return the employee's name", () => {
    const employeeName = "Kiri";
    const employee = new Employee(employeeName);

    expect(employee.getName()).toBe(employeeName);
});

test("return the employee's id", () => {
    const employeeID = 2;
    const employee = new Employee("Kiri", employeeID);

    expect(employee.getId()).toBe(employeeID);
});

test("return the employee's email", () => {
    const employeeEmail = "Hello@email.com";
    const employee = new Employee("Kiri", 2, employeeEmail);

    expect(employee.getEmail()).toBe(employeeEmail);
});

test("return the employee's role", () => {
    const employeeRole = 'Employee';
    const employee = new Employee("Kiri", 2, "email", employeeRole);

    expect(employee.getRole()).toBe(employeeRole);
});