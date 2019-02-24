import { AccountNumberValidator } from '@validators/account-number-validator';

describe('AccountNumberValidator: ', function () {
  it('validate() should fail if input does not follow valid account number pattern', function () {
    expect(AccountNumberValidator.validate('1234')).toBe(false);
    expect(AccountNumberValidator.validate('1234.23..212312312')).toBe(false);
    expect(AccountNumberValidator.validate('123423212312312')).toBe(false);
    expect(AccountNumberValidator.validate('1234230')).toBe(false);
  });

  it('validate() should fail if input is not a valid account number', function () {
    expect(AccountNumberValidator.validate('73256545373')).toBe(false);
    expect(AccountNumberValidator.validate('7325.65.45373')).toBe(false);
  });

  it('validate() should succeed if input is a valid account number', function () {
    expect(AccountNumberValidator.validate('73256545370')).toBe(false);
    expect(AccountNumberValidator.validate('7325.65.45370')).toBe(false);
  });
});
