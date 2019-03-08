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

  let birthYear = 0;

  if ( indInt >= 0 && indInt <= 499 ) {
    birthYear = parseInt( '19' + shortYear, 10 );
  } else if ( indInt >= 500 && indInt <= 749 && shortYearInt >= 54 && shortYearInt <= 99 ) {
    birthYear = parseInt( '18' + shortYear, 10 );
  } else if ( indInt >= 500 && indInt <= 999 && shortYearInt >= 0 && shortYearInt <= 39 ) {
    birthYear = parseInt( '20' + shortYear, 10 );
  } else if ( indInt >= 900 && indInt <= 999 && shortYearInt >= 40 && shortYearInt <= 99 ) {
    birthYear = parseInt( '19' + shortYear, 10 );
  }

  const bd = new Date();
  bd.setUTCFullYear( birthYear, parseInt( m1 + ( parseInt( m2, 10 ) - 1 ), 10 ), parseInt( d1 + d2, 10 ) );
  bd.setUTCHours( 0 );
  bd.setUTCMinutes( 0 );
  bd.setUTCSeconds( 0 );
  bd.setUTCMilliseconds( 0 );

  return bd;
}

export function getSsnForDate( date: Date, getDNumber: boolean = false ): string|null {
  const d = getDNumber ? (date.getDate() + 40) : date.getDate();
  const d1 = d < 10 ? '0' : d.toString(10).charAt(0);
  const d2 = d < 10 ? d.toString(10) : d.toString(10).charAt(1);
  const m = date.getMonth() + 1;
  const m1 = m < 10 ? '0' : m.toString(10).charAt(0);
  const m2 = m < 10 ? m.toString(10) : m.toString(10).charAt(1);
  const y = date.getFullYear();
  const y3 = y.toString(10).charAt(2);
  const y4 = y.toString(10).charAt(3);


  const bdString = d1 + d2 + m1 + m2 + y3 + y4;

  const indRange = getIndRangeFromYear(y);
  if (null === indRange) {
    return null;
  }

  let c1 = 10;
  let c2 = 10;
  let ssnStart = '';
  let indString = '';


  while (10 === c1 || 10 === c2) {
    indString = (Math.floor(Math.random() * (indRange.indEnd - indRange.indStart)) + indRange.indStart).toString(10);
    while (indString.length < 3) {
      indString = '0' + indString;
    }
    ssnStart = bdString + indString;

    let factorSum = 0;

    for ( let i = 0; i < ssnFactors.length; i++ ) {
      factorSum += parseInt( ssnStart.charAt( i ), 10 ) * ssnFactors[ i ];
    }

    c1 = 11 - ( factorSum % 11 );

    if ( c1 === 11 ) {
      c1 = 0;
    } else if ( c1 === 10 ) {
      continue;
    }

    let t = getMod11ControlDigit(ssnStart + c1);

    if (null !== t) {
      c2 = t;
    }
  }

  return ssnStart + c1 + c2;
}

export function isDNumber( ssn: string ): boolean | null {
  if ( !validateSsn( ssn ) ) {
    return null;
  }

  return parseInt( ssn.charAt( 0 ), 10 ) >= 4;
}
