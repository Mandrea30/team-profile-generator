const Employee = require('../lib/Employee');

test('employee is an object', () => {
    const newEmployee = new Employee();
    expect(typeof newEmployee).toBe('object');
})

test('get employee name via method', () => {
    const name = 'maria';
    const newEmployee = new Employee(name, 1, 'maria@hotmail.com');
    expect(newEmployee.getName()).toBe(name);
});

test('get employee id via method', () => {
    const id = 1;
    const newEmployee = new Employee('maria', id, 'maria@hotmail.com');
    expect(newEmployee.getId()).toBe(id);
});

test('get employee email via method', () => {
    const email = 'maria@hotmail.com';
    const newEmployee = new Employee(1, 'maria', email);
    expect(newEmployee.getEmail()).toBe(email);
});

test('get role returns employee', () => {
    const newEmployee = new Employee();
    expect(newEmployee.getRole()).toBe('Employee');
});