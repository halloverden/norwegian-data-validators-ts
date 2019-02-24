import { Ssn } from '@validators/ssn';

describe('Ssn: ', function () {
  it('valdate() should fail for input that does not follow the proper pattern for ssn', function () {
    expect(Ssn.validate('')).toBe(false);
    expect(Ssn.validate('1234')).toBe(false);
    expect(Ssn.validate('asdf')).toBe(false);
    expect(Ssn.validate('asdf1234')).toBe(false);
  });

  it('validate() should succeed for valid ssn', function () {
    expect(Ssn.validate('01028749879')).toBe(true);
    expect(Ssn.validate('01028749364')).toBe(true);
    expect(Ssn.validate('01026847822')).toBe(true);
    expect(Ssn.validate('01026849590')).toBe(true);
  });
});
