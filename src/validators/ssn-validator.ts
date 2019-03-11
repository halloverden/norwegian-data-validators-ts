import { getMod11ControlDigit } from '../utilities/mod11-utilities';
import { ssnFactors } from '../utilities/ssn-utilities';

export function validateSsn( ssn: string ): boolean {
  if ( !ssn || ssn.length !== 11 ) {
    return false;
  }

  let factorSum = 0;

  for ( let i = 0; i < ssnFactors.length; i++ ) {
    factorSum += parseInt( ssn.charAt( i ), 10 ) * ssnFactors[ i ];
  }

  let controlDigit1 = 11 - ( factorSum % 11 );

  if ( controlDigit1 === 11 ) {
    controlDigit1 = 0;
  }

  let controlDigit2 = getMod11ControlDigit( ssn.substr( 0, ssn.length - 1 ) );

  return controlDigit1 === parseInt( ssn.charAt( 9 ), 10 )
         && controlDigit2 === parseInt( ssn.charAt( 10 ), 10 );
}
