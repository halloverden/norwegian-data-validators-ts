import { Kid } from '@validators/kid';

describe('Kid: ', function () {
  it('validate() should fail if number is neither Mod11 nor Luhn "compatible"', function () {
    expect(Kid.validate('')).toBe(false);
    expect(Kid.validate('51028745503')).toBe(false);
    expect(Kid.validate('51028745509')).toBe(false);
    expect(Kid.validate('51028745504')).toBe(false);
    expect(Kid.validate('51028745505')).toBe(false);
  });

  it('validate() should succeed if number is Mod11 "compatible"', function () {
    expect(Kid.validate('51028745501')).toBe(true);
    expect(Kid.validate('01028745539')).toBe(true);
    expect(Kid.validate('01028745504')).toBe(true);
  });

  it('validate() should succeed if number is Luhn "compatible"', function () {
    expect(Kid.validate('51028745506')).toBe(true);
    expect(Kid.validate('01028745535')).toBe(true);
    expect(Kid.validate('01028745501')).toBe(true);
    expect(Kid.validate('1234567897')).toBe(true);
  });
});
