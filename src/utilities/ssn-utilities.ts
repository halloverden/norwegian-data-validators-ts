import { SsnValidator } from '@validators/ssn-validator';

export class SsnUtilities {
  public static getBirthDateFromSsn( ssn: string ): Date|null {
    if (!SsnValidator.validate(ssn)) {
      return null;
    }

    const birthDate = ssn.substr(0, 6);
    const d1 = birthDate.substr(0, 1);
    const d2 = birthDate.substr(1, 1);
    const m1 = birthDate.substr(2, 1);
    const m2 = birthDate.substr(3, 1);
    const shortYear = birthDate.substr(4, 2);
    const shortYearInt = parseInt(shortYear, 10);
    const indInt = parseInt(ssn.substr(6, 3), 10);

    let birthYear = null;

    if (indInt >= 0 && indInt <= 499) {
      birthYear = parseInt('19' + shortYear, 10);
    } else if (indInt >= 500 && indInt <= 749 && shortYearInt >= 54 && shortYearInt <= 99) {
      birthYear = parseInt('18' + shortYear, 10);
    } else if (indInt >= 500 && indInt <= 999 && shortYearInt >= 0 && shortYearInt <= 39) {
      birthYear = parseInt('20' + shortYear, 10);
    } else if (indInt >= 900 && indInt <= 999 && shortYearInt >= 40 && shortYearInt <= 99) {
      birthYear = parseInt('19' + shortYear, 10);
    } else {
      return null;
    }

    const bd = new Date();
    bd.setUTCFullYear(birthYear, parseInt(m1 + (parseInt(m2, 10) - 1), 10), parseInt(d1 + d2, 10));
    bd.setUTCHours(0);
    bd.setUTCMinutes(0);
    bd.setUTCSeconds(0);
    bd.setUTCMilliseconds(0);

    return bd;
  }

  public static isDNumber( ssn: string ): boolean|null {
    if (!SsnValidator.validate(ssn)) {
      return null;
    }

    return parseInt(ssn.charAt(0), 10) >= 4;
  }
}
