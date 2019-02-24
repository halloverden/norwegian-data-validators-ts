import { Mod11 } from '@utilities/mod11';
import { Luhn } from '@utilities/luhn';

export class Kid {
  public static validate( kidNumber: string ) {
    const controlDigit = kidNumber.charAt(kidNumber.length - 1);
    const kidWithoutControlDigit = kidNumber.substr(0, kidNumber.length - 1);
    const isMod11Compatible = parseInt(controlDigit, 10) === Mod11.getControlDigit(kidWithoutControlDigit);
    const isLuhnCompatible = parseInt(controlDigit, 10) === Luhn.getControlDigit(kidWithoutControlDigit);

    return isMod11Compatible || isLuhnCompatible;
  }
}
