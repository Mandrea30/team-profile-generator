const Engineer = require('../lib/engineer');

test('get engineer github via method', () => {
    const github = 'fmandrea30';
    const newEngineer = new Engineer(1, 'maria', 'maria@hotmail.com', github);
    expect(newEngineer.getGithub()).toBe(github);
});