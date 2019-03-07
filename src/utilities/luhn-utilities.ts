export function getLuhnControlDigit( input: string ): number {
  let sum = 0;
  for ( let i = input.length - 1; i >= 0; i -= 2 ) {
    let double = parseInt( input.charAt( i ), 10 ) * 2;
    sum += ( double > 9 ) ? parseInt( double.toString().charAt( 0 ) ) + parseInt( double.toString().charAt( 1 ) ) : double;
    if ( !isNaN( parseInt( input.charAt( i - 1 ), 10 ) ) ) {
      sum += parseInt( input.charAt( i - 1 ), 10 );
    }
  }

  return ( sum * 9 ) % 10;
}

export function getLuhnControlDigits( input: string, numberOfDigits: number ): number[] {
  const controlDigits: number[] = [];

  for ( let i = numberOfDigits; i > 0; i-- ) {
    let c = getLuhnControlDigit( input );
    controlDigits.push( c );
    input += c.toString();
  }

  return controlDigits;
}

export function checkLuhnControlDigit( input: string ): boolean {
  const c = getLuhnControlDigit( input.substr( 0, input.length - 1 ) );
  return c === parseInt( input.charAt( input.length - 1 ), 10 );
}

export function checkLuhnControlDigits( input: string, numberOfDigits: number ): boolean {
  for ( let i = numberOfDigits - 1; i >= 0; i-- ) {
    if ( !checkLuhnControlDigit( input.substr( 0, input.length - i ) ) ) {
      return false;
    }
  }

  return true;
}
