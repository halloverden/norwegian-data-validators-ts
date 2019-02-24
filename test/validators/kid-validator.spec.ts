import { KidValidator } from '@validators/kid-validator';

describe('KidValidator: ', function () {
  it('validate() should fail if number is neither Mod11 nor Luhn "compatible"', function () {
    expect(KidValidator.validate('')).toEqual(false);
    expect(KidValidator.validate('51028745503')).toEqual(false);
    expect(KidValidator.validate('51028745509')).toEqual(false);
    expect(KidValidator.validate('51028745504')).toEqual(false);
    expect(KidValidator.validate('51028745505')).toEqual(false);
  });

  it('validate() should succeed if number is Mod11 "compatible"', function () {
    expect(KidValidator.validate('51028745501')).toEqual(true);
    expect(KidValidator.validate('01028745539')).toEqual(true);
    expect(KidValidator.validate('01028745504')).toEqual(true);
  });

  it('validate() should succeed if number is Luhn "compatible"', function () {
    expect(KidValidator.validate('51028745506')).toEqual(true);
    expect(KidValidator.validate('01028745535')).toEqual(true);
    expect(KidValidator.validate('01028745501')).toEqual(true);
    expect(KidValidator.validate('1234567897')).toEqual(true);
  });
});
