const Engineer = require('../lib/Engineer');

test('creates an Employee object', () => {
    const engineer = new Engineer();

    expect(this.name).toEqual(expect.any(String));
    expect(this.id).toEqual(expect.any(Number));
    expect(this.email).toEqual(expect.any(String));
    expect(this.role).toEqual(expect.any(String));
});