import { AccountNumber } from '@validators/account-number';

describe('AccountNumber: ', function () {
  it('validate() should fail if input does not follow valid account number pattern', function () {
    expect(AccountNumber.validate('1234')).toBe(false);
    expect(AccountNumber.validate('1234.23..212312312')).toBe(false);
    expect(AccountNumber.validate('123423212312312')).toBe(false);
    expect(AccountNumber.validate('1234230')).toBe(false);
  });

  it('validate() should fail if input is not a valid account number', function () {
    expect(AccountNumber.validate('73256545373')).toBe(false);
    expect(AccountNumber.validate('7325.65.45373')).toBe(false);
  });

  it('validate() should succeed if input is a valid account number', function () {
    expect(AccountNumber.validate('73256545370')).toBe(false);
    expect(AccountNumber.validate('7325.65.45370')).toBe(false);
  });
});
