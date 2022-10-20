const Engineer = require("../lib/Engineer");


test('creates an engineer github', () => {
    const engineer = new Engineer('2', 'Nicholas', 'nicholas@gmail.com', 'nbertazoli');
    expect(engineer.getGithub()).toBe('nbertazoli');
})

test('creates an engineer role', () => {
    const engineer = new Engineer('2', 'Nicholas', 'nicholas@gmail.com');
    expect(engineer.getRole()).toBe('Engineer')
})

test('creates an icon', () => {
    const icon = new Engineer('2', 'Nicholas', 'nicholas@gmail.com');
    expect(icon.getIcon()).toContain(`developer_mode`)
})

test('creates github link', () => {
    const gitHub = new Engineer('2', 'Nicholas', 'nicholas@gmail.com', 'nbertazoli');
    expect(gitHub.getExtraInfo()).toContain(`nbertazoli`)
})