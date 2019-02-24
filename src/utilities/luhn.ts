export class Luhn {
  public static getControlDigit( input: string ): number {
    let sum = 0;
    for (let i = input.length - 1; i >=0; i -= 2) {
      let double = parseInt(input.charAt(i), 10) * 2;
      sum += (double > 9) ? parseInt(double.toString().charAt(0)) + parseInt(double.toString().charAt(1)) : double;
      if (!isNaN(parseInt(input.charAt(i - 1), 10))) {
        sum += parseInt(input.charAt(i - 1), 10);
      }
    }

    return (sum * 9) % 10;
  }

  public static getControlDigits( input: string, numberOfDigits: number ): number[] {
    const controlDigits: number[] = [];

    for (let i = numberOfDigits; i > 0; i--) {
      let c = Luhn.getControlDigit(input);
      controlDigits.push(c);
      input += c.toString();
    }

    return controlDigits;
  }

  public static checkControlDigit( input: string ): boolean {
    const c = Luhn.getControlDigit(input.substr(0, input.length - 1));
    return c === parseInt(input.charAt(input.length -1), 10);
  }

  public static checkControlDigits( input: string, numberOfDigits: number ): boolean {
    for (let i = numberOfDigits - 1; i >= 0; i--) {
      if (!Luhn.checkControlDigit(input.substr(0, input.length - i))) {
        return false;
      }
    }

    return true;
  }
}
