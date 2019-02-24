import { Mod11Utilities } from '@utilities/mod11-utilities';
import { LuhnUtilities } from '@utilities/luhn-utilities';

export class KidValidator {
  public static validate( kidNumber: string ) {
    const controlDigit = kidNumber.charAt(kidNumber.length - 1);
    const kidWithoutControlDigit = kidNumber.substr(0, kidNumber.length - 1);
    const isMod11Compatible = parseInt(controlDigit, 10) === Mod11Utilities.getControlDigit(kidWithoutControlDigit);
    const isLuhnCompatible = parseInt(controlDigit, 10) === LuhnUtilities.getControlDigit(kidWithoutControlDigit);

    return isMod11Compatible || isLuhnCompatible;
  }
}
