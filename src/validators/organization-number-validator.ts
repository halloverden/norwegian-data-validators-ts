import { getMod11ControlDigit } from '../utilities/mod11-utilities';

export function validateOrganizationNumber( orgNumber: string ) {
  orgNumber = orgNumber.replace( new RegExp( / /g ), '' );
  if ( !orgNumber || orgNumber.length !== 9 ) {
    return false;
  }

  return parseInt( orgNumber.charAt( orgNumber.length - 1 ), 10 ) === getMod11ControlDigit( orgNumber.substr( 0, orgNumber.length - 1 ) );
}
