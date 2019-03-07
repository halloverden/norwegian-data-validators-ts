import { getMod11ControlDigit } from '@utilities/mod11-utilities';

export function validateSsn( ssn: string ): boolean {
  if ( !ssn || ssn.length !== 11 ) {
    return false;
  }

  const factors = [ 3, 7, 6, 1, 8, 9, 4, 5, 2 ];
  let factorSum = 0;

  for ( let i = 0; i < factors.length; i++ ) {
    factorSum += parseInt( ssn.charAt( i ), 10 ) * factors[ i ];
  }

  let controlDigit1 = 11 - ( factorSum % 11 );

  if ( controlDigit1 === 11 ) {
    controlDigit1 = 0;
  }

  let controlDigit2 = getMod11ControlDigit( ssn.substr( 0, ssn.length - 1 ) );

  return controlDigit1 === parseInt( ssn.charAt( 9 ), 10 )
         && controlDigit2 === parseInt( ssn.charAt( 10 ), 10 );
}
