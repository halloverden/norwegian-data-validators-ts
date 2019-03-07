export function getMod11ControlDigit( input: string ): number | null {
  let weightNumber = 2;
  let modSum = 0;

  for ( let i = input.length - 1; i >= 0; i-- ) {
    let digit = parseInt( input.charAt( i ), 10 );
    if ( isNaN( digit ) ) {
      return null;
    }
    modSum += weightNumber * digit;

    if ( ++weightNumber > 7 ) {
      weightNumber = 2;
    }
  }

  const remainder = ( modSum % 11 );

  switch ( remainder ) {
    case 0:
      return remainder;
    case 1:
      return null;
    default:
      return 11 - remainder;
  }
}

export function getMod11ControlDigits( input: string, numberOfDigits: number ): ( number | null )[] {
  const controlDigits = [];
  for ( let i = numberOfDigits; i > 0; i-- ) {
    let c = getMod11ControlDigit( input );
    controlDigits.push( c );
    input += null === c ? '-' : c.toString();
  }

  return controlDigits;
}

export function checkMod11ControlDigit( input: string ): boolean {
  return parseInt( input.charAt( input.length - 1 ), 10 ) === getMod11ControlDigit( input.substr( 0, input.length - 1 ) );
}

export function checkMod11ControlDigits( input: string, numberOfDigits: number ): boolean {
  for ( let i = numberOfDigits; i > 0; i-- ) {
    if ( !checkMod11ControlDigit( input ) ) {
      return false;
    }

    input = input.substr( 0, input.length - 1 );
  }

  return true;
}
