const Manager = require("../lib/Manager");


test('creates an manager office number', () => {
    const manager = new Manager('2', 'Arthur', 'arthur@gmail.com', '321-211-154');
    expect(manager.getOfficeNumber()).toBe('321-211-154');
})

test('get role method', () => {
    const manager = new Manager();
    expect(manager.getRole()).toBe('Manager');
})

test('creates an icon', () => {
    const icon = new Manager('2', 'Nicholas', 'nicholas@gmail.com');
    expect(icon.getIcon()).toBe(`<span class="material-symbols-outlined">
                    coffee
                </span>`)
})

test('creates office Number', ()=> {
    const officeNumber = new Manager('3', 'Arthur', 'arthur@gmail.com', '321-211-124');
    expect(officeNumber.getExtraInfo()).toBe(`Office Number: 321-211-124`)
})