import { SsnValidator } from '@validators/ssn-validator';

describe('SsnValidator: ', function () {
  it('valdate() should fail for input that does not follow the proper pattern for ssn', function () {
    expect(SsnValidator.validate('')).toEqual(false);
    expect(SsnValidator.validate('1234')).toEqual(false);
    expect(SsnValidator.validate('asdf')).toEqual(false);
    expect(SsnValidator.validate('asdf1234')).toEqual(false);
  });

  it('validate() should succeed for valid ssn', function () {
    expect(SsnValidator.validate('01028749879')).toEqual(true);
    expect(SsnValidator.validate('01028749364')).toEqual(true);
    expect(SsnValidator.validate('01026847822')).toEqual(true);
    expect(SsnValidator.validate('01026849590')).toEqual(true);
  });

  it('validate() should succeed for valid d-number', function () {
    expect(SsnValidator.validate('41016508878')).toEqual(true);
    expect(SsnValidator.validate('50015902660')).toEqual(true);
    expect(SsnValidator.validate('60017407247')).toEqual(true);
    expect(SsnValidator.validate('70015101871')).toEqual(true);
  });
});
