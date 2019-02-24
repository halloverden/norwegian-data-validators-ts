import { KidValidator } from '@validators/kid-validator';

describe('KidValidator: ', function () {
  it('validate() should fail if number is neither Mod11 nor Luhn "compatible"', function () {
    expect(KidValidator.validate('')).toBe(false);
    expect(KidValidator.validate('51028745503')).toBe(false);
    expect(KidValidator.validate('51028745509')).toBe(false);
    expect(KidValidator.validate('51028745504')).toBe(false);
    expect(KidValidator.validate('51028745505')).toBe(false);
  });

  it('validate() should succeed if number is Mod11 "compatible"', function () {
    expect(KidValidator.validate('51028745501')).toBe(true);
    expect(KidValidator.validate('01028745539')).toBe(true);
    expect(KidValidator.validate('01028745504')).toBe(true);
  });

  it('validate() should succeed if number is Luhn "compatible"', function () {
    expect(KidValidator.validate('51028745506')).toBe(true);
    expect(KidValidator.validate('01028745535')).toBe(true);
    expect(KidValidator.validate('01028745501')).toBe(true);
    expect(KidValidator.validate('1234567897')).toBe(true);
  });
});
