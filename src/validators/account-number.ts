import { Mod11 } from '@utilities/mod11';

export class AccountNumber {
  public static validate(accountNumber: string) {
    let validAccountNumberPattern = new RegExp('\d{11}|\d{4}\.\d{2}\.\d{5}');
    if (!validAccountNumberPattern.test(accountNumber)) {
      return false;
    }

    accountNumber = accountNumber.toString().replace(/\./g, '');

    return parseInt(accountNumber.charAt(accountNumber.length - 1), 10) === Mod11.getControlDigit(accountNumber);
  }
}
