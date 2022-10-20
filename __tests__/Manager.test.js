const Manager = require("../lib/Manager");


test('creates an manager office number', () => {
    const manager = new Manager('2', 'Arthur', 'arthur@gmail.com', '321-211-154');
    expect(manager.getOfficeNumber()).toBe('321-211-154');
})

test('get role method', () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe('Manager');
})