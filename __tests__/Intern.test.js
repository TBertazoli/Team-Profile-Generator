const Intern = require("../lib/Intern");


test('creates an Intern school', () => {
    const intern = new Intern('2', 'Arthur', 'arthur@gmail.com', 'Rice University');
    expect(intern.getSchool()).toBe('Rice University');
})

test('creates an intern role', () => {
    const intern = new Intern('2', 'Arthur', 'arthur@gmail.com');
    expect(intern.getRole()).toBe('Intern')
})