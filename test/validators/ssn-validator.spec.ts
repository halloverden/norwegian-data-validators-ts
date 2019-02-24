import { SsnValidator } from '@validators/ssn-validator';

describe('SsnValidator: ', function () {
  it('valdate() should fail for input that does not follow the proper pattern for ssn', function () {
    expect(SsnValidator.validate('')).toBe(false);
    expect(SsnValidator.validate('1234')).toBe(false);
    expect(SsnValidator.validate('asdf')).toBe(false);
    expect(SsnValidator.validate('asdf1234')).toBe(false);
  });

  it('validate() should succeed for valid ssn', function () {
    expect(SsnValidator.validate('01028749879')).toBe(true);
    expect(SsnValidator.validate('01028749364')).toBe(true);
    expect(SsnValidator.validate('01026847822')).toBe(true);
    expect(SsnValidator.validate('01026849590')).toBe(true);
  });
});
