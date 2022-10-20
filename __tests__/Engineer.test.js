const Engineer = require("../lib/Engineer");


test('creates an engineer github', () => {
    const engineer = new Engineer('2', 'Arthur', 'arthur@gmail.com', 'arthurB');
    expect(engineer.getGithub()).toBe('arthurB');
})

test('creates an engineer role', () => {
    const engineer = new Engineer('2', 'Arthur', 'arthur@gmail.com');
    expect(engineer.getRole()).toBe('Engineer')
})

