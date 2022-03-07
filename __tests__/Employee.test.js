const Employee = require('../lib/Employee');
jest.mock('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test("return the employee's name", () => {
    const employee = new Employee();

    expect(employee.getName()).toEqual(expect.any(String));
});

test("return the employee's id", () => {
    const employee = new Employee();

    expect(employee.getId()).toEqual(expect.any(Number));
});

test("return the employee's email", () => {
    const employee = new Employee();

    expect(employee.getEmail()).toEqual(expect.any(String));
});