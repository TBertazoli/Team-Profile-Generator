const Employee = require("../lib/Employee");


test('creates an employee name', () => {
    const employee = new Employee('2', 'Arthur', 'arthur@gmail.com');
    expect(employee.getName()).toBe('Arthur');    
})

test('creates an employee id', () => {
    const employee = new Employee('2', 'Arthur', 'arthur@gmail.com');
    expect(employee.getId()).toBe('2')
})


test('creates an employee email', () => {
    const employee = new Employee('2', 'Arthur', 'arthur@gmail.com');
    expect(employee.getEmail()).toContain(`arthur@gmail.com`);

})

test('creates an employee role', () => {
    const employee = new Employee('2', 'Arthur', 'arthur@gmail.com');
    expect(employee.getRole()).toBe('Employee')
})


