import { Mod11Utilities } from '@utilities/mod11-utilities';

export class OrganizationNumberValidator {
  public static validate( orgNumber: string ) {
    orgNumber = orgNumber.replace(new RegExp(/ /g), '');
    if (!orgNumber || orgNumber.length !== 9) {
      return false;
    }

    return parseInt(orgNumber.charAt(orgNumber.length - 1), 10) === Mod11Utilities.getControlDigit(orgNumber.substr(0, orgNumber.length - 1));
  }
}
