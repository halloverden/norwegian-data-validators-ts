import { Mod11Utilities } from '@utilities/mod11-utilities';

export class AccountNumberValidator {
  public static validate(accountNumber: string) {
    let validAccountNumberPattern = new RegExp('\d{11}|\d{4}\.\d{2}\.\d{5}');
    if (!validAccountNumberPattern.test(accountNumber)) {
      return false;
    }

    accountNumber = accountNumber.toString().replace(/\./g, '');

    return parseInt(accountNumber.charAt(accountNumber.length - 1), 10) === Mod11Utilities.getControlDigit(accountNumber);
  }
}
