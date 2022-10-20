const Intern = require("../lib/Intern");


test('creates an Intern school', () => {
    const intern = new Intern('2', 'Arthur', 'arthur@gmail.com', 'Rice University');
    expect(intern.getSchool()).toBe('Rice University');
})

test('creates an intern role', () => {
    const intern = new Intern('2', 'Arthur', 'arthur@gmail.com');
    expect(intern.getRole()).toBe('Intern')
})

test('creates an icon', () => {
    const icon = new Intern('2', 'Nicholas', 'nicholas@gmail.com');
    expect(icon.getIcon()).toContain(`school`)
})

test('creates school info', () => {
    const school = new Intern('2', 'Nicholas', 'nicholas@gmail.com', 'Rice University');
    expect(school.getExtraInfo()).toBe('School: Rice University')
})