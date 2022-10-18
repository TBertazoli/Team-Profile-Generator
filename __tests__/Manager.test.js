const Manager = require("../lib/Manager");


test('get role method', () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe('Manager');
})