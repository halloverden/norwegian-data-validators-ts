import { validateSsn } from '@validators/ssn-validator';
import { getMod11ControlDigit } from '@utilities/mod11-utilities';

export const ssnFactors = [ 3, 7, 6, 1, 8, 9, 4, 5, 2 ];

export const ssnIndividualNumberMappings = [
  {
    fromYear: 1854,
    toYear: 1899,
    indStart: 500,
    indEnd: 749
  },
  {
    fromYear: 1940,
    toYear: 1999,
    indStart: 900,
    indEnd: 999
  },
  {
    fromYear: 1900,
    toYear: 1999,
    indStart: 0,
    indEnd: 499
  },
  {
    fromYear: 2000,
    toYear: 2039,
    indStart: 500,
    indEnd: 999
  }
];

export function getIndRangeFromYear( year: number ): {indStart: number, indEnd: number}|null {
  const validRanges = [];

  for (let i = 0; i < ssnIndividualNumberMappings.length; i++) {
    if (year >= ssnIndividualNumberMappings[i].fromYear && year <= ssnIndividualNumberMappings[i].toYear) {
      validRanges.push(ssnIndividualNumberMappings[i]);
    }
  }

  if (validRanges.length === 0) {
    return null;
  }

  if (validRanges.length === 1) {
    return {indStart: validRanges[0].indStart, indEnd: validRanges[0].indEnd};
  }

  let indStart = validRanges[0].indStart;
  let indEnd = validRanges[0].indEnd;

  for (let j = 1; j < validRanges.length; j++) {
    if (indStart > validRanges[j].indStart) {
      indStart = validRanges[j].indStart;
    }
    if (indEnd < validRanges[j].indEnd) {
      indEnd = validRanges[j].indEnd;
    }
  }


  return {indStart: indStart, indEnd: indEnd};
}

export function getBirthDateFromSsn( ssn: string ): Date | null {
  if ( !validateSsn( ssn ) ) {
    return null;
  }

  const birthDate = ssn.substr( 0, 6 );
  const d1 = birthDate.substr( 0, 1 );
  const d2 = birthDate.substr( 1, 1 );
  const m1 = birthDate.substr( 2, 1 );
  const m2 = birthDate.substr( 3, 1 );
  const shortYear = birthDate.substr( 4, 2 );
  const shortYearInt = parseInt( shortYear, 10 );
  const indInt = parseInt( ssn.substr( 6, 3 ), 10 );

  let birthYear = null;

  if ( indInt >= 0 && indInt <= 499 ) {
    birthYear = parseInt( '19' + shortYear, 10 );
  } else if ( indInt >= 500 && indInt <= 749 && shortYearInt >= 54 && shortYearInt <= 99 ) {
    birthYear = parseInt( '18' + shortYear, 10 );
  } else if ( indInt >= 500 && indInt <= 999 && shortYearInt >= 0 && shortYearInt <= 39 ) {
    birthYear = parseInt( '20' + shortYear, 10 );
  } else if ( indInt >= 900 && indInt <= 999 && shortYearInt >= 40 && shortYearInt <= 99 ) {
    birthYear = parseInt( '19' + shortYear, 10 );
  } else {
    return null;
  }

  const bd = new Date();
  bd.setUTCFullYear( birthYear, parseInt( m1 + ( parseInt( m2, 10 ) - 1 ), 10 ), parseInt( d1 + d2, 10 ) );
  bd.setUTCHours( 0 );
  bd.setUTCMinutes( 0 );
  bd.setUTCSeconds( 0 );
  bd.setUTCMilliseconds( 0 );

  return bd;
}

export function isDNumber( ssn: string ): boolean | null {
  if ( !validateSsn( ssn ) ) {
    return null;
  }

  return parseInt( ssn.charAt( 0 ), 10 ) >= 4;
}
