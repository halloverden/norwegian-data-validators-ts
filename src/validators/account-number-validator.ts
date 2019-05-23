import { checkMod11ControlDigit } from '../utilities/mod11-utilities';

export function validateAccountNumber( accountNumber: string ) {
  if ( !/\d{11}|\d{4}\.\d{2}\.\d{5}/.test( accountNumber ) ) {
    return false;
  }

  accountNumber = accountNumber.toString().replace( /\./g, '' );

  return checkMod11ControlDigit( accountNumber );
}
