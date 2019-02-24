export class Mod11Utilities {
  public static getControlDigit( input: string ): number|null {
    let weightNumber = 2;
    let modSum = 0;

    for ( let i = input.length - 1; i >= 0; i-- ) {
      let digit = parseInt( input.charAt( i ), 10 );
      if (isNaN(digit)) {
        return null;
      }
      modSum += weightNumber * digit;

      if ( ++weightNumber > 7 ) {
        weightNumber = 2;
      }
    }

    const remainder = ( modSum % 11 );

    switch (remainder) {
      case 0:
        return remainder;
      case 1:
        return null;
      default:
        return 11 - remainder;
    }
  }

  public static getControlDigits( input: string, numberOfDigits: number ): (number|null)[] {
    const controlDigits = [];
    for (let i = numberOfDigits; i > 0; i--) {
      let c = Mod11Utilities.getControlDigit(input);
      controlDigits.push(c);
      input += null === c ? '-' : c.toString();
    }

    return controlDigits;
  }

  public static checkControlDigit( input: string ): boolean {
    return parseInt(input.charAt(input.length - 1), 10) === Mod11Utilities.getControlDigit(input.substr(0, input.length - 1));
  }

  public static checkControlDigits( input: string, numberOfDigits: number ): boolean {
    for (let i = numberOfDigits; i > 0; i--) {
      if (!Mod11Utilities.checkControlDigit(input)) {
        return false;
      }

      input = input.substr(0, input.length - 1);
    }

    return true;
  }
}
