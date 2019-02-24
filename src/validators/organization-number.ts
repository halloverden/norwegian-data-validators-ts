import { Mod11 } from '@utilities/mod11';

export class OrganizationNumber {
  public static validate( orgNumber: string ) {
    orgNumber = orgNumber.replace(new RegExp(/ /g), '');
    if (!orgNumber || orgNumber.length !== 9) {
      return false;
    }

    return parseInt(orgNumber.charAt(orgNumber.length - 1), 10) === Mod11.getControlDigit(orgNumber.substr(0, orgNumber.length - 1));
  }
}
