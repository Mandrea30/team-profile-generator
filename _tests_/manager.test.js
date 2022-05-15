const Manager = require('../lib/manager');

test('get manager office number via method', () => {
    const officeNumber = 7854;
    const newManager = new Manager(1, 'maria', 'maria@hotmail.com', officeNumber);
    expect(newManager.getOfficeNumber()).toBe(officeNumber);
});