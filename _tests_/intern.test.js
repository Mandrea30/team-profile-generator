const Intern = require('../lib/intern'); 

test ('get intern school via method', () => {
    const school = 'UM';
    const newIntern = new Intern(1, 'maria', 'maria@hotmail.com', school);
    expect(newIntern.getSchool()).toBe(school)
});