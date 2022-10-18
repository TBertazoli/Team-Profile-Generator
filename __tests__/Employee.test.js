const Employee = require("../lib/Employee");

// test('creates an employee name', () => {
//     const employee = new Employee('Arthur', '1', 'arthurbertazoli@gmail.com');
//     expect(employee.name).toBe('Arthur');
//     expect(employee.id).toBe('1');
//     expect(employee.email).toBe('arthurbertazoli@gmail.com');
// })

// test('creates an employee name', () => {
//     const employee = new Employee('Arthur', '1', 'arthurbertazoli@gmail.com');
//     expect(employee.getAll()).toBe('Arthur 1 arthurbertazoli@gmail.com');
// })

test('an employee name', () => {
    const employee = new Employee('Arthur');
    expect(employee.getName()).toBe('Arthur');
})

test('get role method', () => {
    const employee = new Employee();
    expect(employee.getRole()).toBe('Employee');
})

// test('creates a employee id', () => {
//     expect(Employee.id).toBe(id);
// })

// test('creates a employee email', () => {
//     expect(Employee.email).toBe(email);
// })

