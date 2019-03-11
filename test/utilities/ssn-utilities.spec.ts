import { getBirthDateFromSsn, getIndRangeFromYear, getSsnForDate, isDNumber } from '../../src/utilities/ssn-utilities';
import { validateSsn } from '../../src/validators/ssn-validator';

describe( 'SsnUtilities', function () {
  it('getIndRangeFromYear() should return null for invalid year', function () {
    expect(getIndRangeFromYear(123)).toBeNull();
    expect(getIndRangeFromYear(12300)).toBeNull();
    expect(getIndRangeFromYear(1)).toBeNull();
    expect(getIndRangeFromYear(4312)).toBeNull();
    expect(getIndRangeFromYear(-5)).toBeNull();
    expect(getIndRangeFromYear(1802)).toBeNull();
  });

  it('getIndRangeFromYear() should return valid indRange for valid year', function () {
    const eStart1 = 0;
    const eEnd1 = 499;
    const range1 = getIndRangeFromYear(1900);
    expect(range1).toBeTruthy();
    if (range1) {
      expect(range1.indStart).toEqual(eStart1);
      expect(range1.indEnd).toEqual(eEnd1);
    }

    const eStart2 = 500;
    const eEnd2 = 749;
    const range2 = getIndRangeFromYear(1860);
    expect(range2).toBeTruthy();
    if (range2) {
      expect(range2.indStart).toEqual(eStart2);
      expect(range2.indEnd).toEqual(eEnd2);
    }

    const eStart3 = 500;
    const eEnd3 = 999;
    const range3 = getIndRangeFromYear(2005);
    expect(range3).toBeTruthy();
    if (range3) {
      expect(range3.indStart).toEqual(eStart3);
      expect(range3.indEnd).toEqual(eEnd3);
    }

    const eStart4 = 0;
    const eEnd4 = 999;
    const range4 = getIndRangeFromYear(1999);
    expect(range4).toBeTruthy();
    if (range4) {
      expect(range4.indStart).toEqual(eStart4);
      expect(range4.indEnd).toEqual(eEnd4);
    }

    const eStart5 = 0;
    const eEnd5 = 999;
    const range5 = getIndRangeFromYear(1975);
    expect(range5).toBeTruthy();
    if (range5) {
      expect(range5.indStart).toEqual(eStart5);
      expect(range5.indEnd).toEqual(eEnd5);
    }

    const eStart6 = 500;
    const eEnd6 = 999;
    const range6 = getIndRangeFromYear(2020);
    expect(range6).toBeTruthy();
    if (range6) {
      expect(range6.indStart).toEqual(eStart6);
      expect(range6.indEnd).toEqual(eEnd6);
    }

    const eStart7 = 0;
    const eEnd7 = 999;
    const range7 = getIndRangeFromYear(1980);
    expect(range7).toBeTruthy();
    if (range7) {
      expect(range7.indStart).toEqual(eStart7);
      expect(range7.indEnd).toEqual(eEnd7);
    }
  });

  it( 'getBirthDateFromSsn() should return null if ssn is invalid', function () {
    expect( getBirthDateFromSsn( '' ) ).toEqual( null );
    expect( getBirthDateFromSsn( '1234' ) ).toEqual( null );
    expect( getBirthDateFromSsn( 'asdf' ) ).toEqual( null );
  } );

  it( 'getBirthDateFromSsn() should return the correct birth date for a valid ssn or D-number', function () {
    const d1 = getBirthDateFromSsn( '01026849833' );
    const cd1 = new Date( 1968, 1, 1, 0, 0, 0, 0 );
    expect( d1 ).toBeTruthy();
    if ( d1 ) {
      expect( d1.toDateString() ).toEqual( cd1.toDateString() );
    }

    const d2 = getBirthDateFromSsn( '01025454908' );
    const cd2 = new Date( 1854, 1, 1, 0, 0, 0, 0 );
    expect( d2 ).toBeTruthy();
    if ( d2 ) {
      expect( d2.toDateString() ).toEqual( cd2.toDateString() );
    }

    const d3 = getBirthDateFromSsn( '01021048557' );
    const cd3 = new Date( 1910, 1, 1, 0, 0, 0, 0 );
    expect( d3 ).toBeTruthy();
    if ( d3 ) {
      expect( d3.toDateString() ).toEqual( cd3.toDateString() );
    }

    const d4 = getBirthDateFromSsn( '24040499268' );
    const cd4 = new Date( 2004, 3, 24, 0, 0, 0, 0 );
    expect( d4 ).toBeTruthy();
    if ( d4 ) {
      expect( d4.toDateString() ).toEqual( cd4.toDateString() );
    }

    const d5 = getBirthDateFromSsn( '01038054070' );
    const cd5 = new Date( 1880, 2, 1, 0, 0, 0, 0 );
    expect( d5 ).toBeTruthy();
    if ( d5 ) {
      expect( d5.toDateString() ).toEqual( cd5.toDateString() );
    }

    const d6 = getBirthDateFromSsn( '01032078806' );
    const cd6 = new Date( 2020, 2, 1, 0, 0, 0, 0 );
    expect( d6 ).toBeTruthy();
    if ( d6 ) {
      expect( d6.toDateString() ).toEqual( cd6.toDateString() );
    }

    const d7 = getBirthDateFromSsn( '07031953000' );
    const cd7 = new Date( 2019, 2, 7, 0, 0, 0, 0 );
    expect( d7 ).toBeTruthy();
    if ( d7 ) {
      expect( d7.toDateString() ).toEqual( cd7.toDateString() );
    }

    const d8 = getBirthDateFromSsn( '41038058167' );
    const cd8 = new Date( 1880, 2, 1, 0, 0, 0, 0 );
    expect( d8 ).toBeTruthy();
    if ( d8 ) {
      expect( d8.toDateString() ).toEqual( cd8.toDateString() );
    }

    const d9 = getBirthDateFromSsn( '64040472086' );
    const cd9 = new Date( 2004, 3, 24, 0, 0, 0, 0 );
    expect( d9 ).toBeTruthy();
    if ( d9 ) {
      expect( d9.toDateString() ).toEqual( cd9.toDateString() );
    }

    const d10 = getBirthDateFromSsn( '47031999088' );
    const cd10 = new Date( 2019, 2, 7,  0, 0, 0, 0 );
    expect( d10 ).toBeTruthy();
    if ( d10 ) {
      expect( d10.toDateString() ).toEqual( cd10.toDateString() );
    }
  } );

  it('getSsnForDate() should return a valid ssn for the given date object', function () {
    const d1 = new Date( 1968, 1, 1, 0, 0, 0, 0 );
    const ssn1 = getSsnForDate(d1);
    const dn1 = getSsnForDate(d1, true);
    expect(ssn1).toBeTruthy();
    expect(dn1).toBeTruthy();
    if (ssn1) {
      expect( validateSsn(ssn1) ).toEqual( true );
    }
    if (dn1) {
      expect( validateSsn(dn1) ).toEqual( true );
    }

    const d2 = new Date( 1854, 1, 1, 0, 0, 0, 0 );
    const ssn2 = getSsnForDate(d2);
    const dn2 = getSsnForDate(d2, true);
    expect(ssn2).toBeTruthy();
    expect(dn2).toBeTruthy();
    if (ssn2) {
      expect( validateSsn(ssn2) ).toEqual( true );
    }
    if (dn2) {
      expect( validateSsn(dn2) ).toEqual( true );
    }

    const d3 = new Date( 1910, 1, 1, 0, 0, 0, 0 );
    const ssn3 = getSsnForDate(d3);
    const dn3 = getSsnForDate(d3, true);
    expect(ssn3).toBeTruthy();
    expect(dn3).toBeTruthy();
    if (ssn3) {
      expect( validateSsn(ssn3) ).toEqual( true );
    }
    if (dn3) {
      expect( validateSsn(dn3) ).toEqual( true );
    }

    const d4 = new Date( 2004, 3, 24, 0, 0, 0, 0 );
    const ssn4 = getSsnForDate(d4);
    const dn4 = getSsnForDate(d4, true);
    expect(ssn4).toBeTruthy();
    expect(dn4).toBeTruthy();
    if (ssn4) {
      expect( validateSsn(ssn4) ).toEqual( true );
    }
    if (dn4) {
      expect( validateSsn(dn4) ).toEqual( true );
    }

    const d5 = new Date( 1880, 2, 1, 0, 0, 0, 0 );
    const ssn5 = getSsnForDate(d5);
    const dn5 = getSsnForDate(d5, true);
    expect(ssn5).toBeTruthy();
    expect(dn5).toBeTruthy();
    if (ssn5) {
      expect( validateSsn(ssn5) ).toEqual( true );
    }
    if (dn5) {
      expect( validateSsn(dn5) ).toEqual( true );
    }

    const d6 = new Date( 2020, 2, 1, 0, 0, 0, 0 );
    const ssn6 = getSsnForDate(d6);
    const dn6 = getSsnForDate(d6, true);
    expect(ssn6).toBeTruthy();
    expect(dn6).toBeTruthy();
    if (ssn6) {
      expect( validateSsn(ssn6) ).toEqual( true );
    }
    if (dn6) {
      expect( validateSsn(dn6) ).toEqual( true );
    }

    const d7 = new Date( 1950, 2, 1, 0, 0, 0, 0 );
    const ssn7 = getSsnForDate(d7);
    const dn7 = getSsnForDate(d7, true);
    expect(ssn7).toBeTruthy();
    expect(dn7).toBeTruthy();
    if (ssn7) {
      expect( validateSsn(ssn7) ).toEqual( true );
    }
    if (dn7) {
      expect( validateSsn(dn7) ).toEqual( true );
    }
  });

  it( 'isDNumber() should return null if ssn is invalid', function () {
    expect( isDNumber( '' ) ).toEqual( null );
    expect( isDNumber( '1234' ) ).toEqual( null );
    expect( isDNumber( 'asdf' ) ).toEqual( null );
  } );

  it( 'isDNumber() should return false for non-d-numbers', function () {
    expect( isDNumber( '01026849914' ) ).toEqual( false );
    expect( isDNumber( '01026846877' ) ).toEqual( false );
    expect( isDNumber( '01026845579' ) ).toEqual( false );
  } );

  it( 'isDNumber() should return true for d-numbers', function () {
    expect( isDNumber( '41016508878' ) ).toEqual( true );
    expect( isDNumber( '50015902660' ) ).toEqual( true );
    expect( isDNumber( '60017407247' ) ).toEqual( true );
    expect( isDNumber( '70015101871' ) ).toEqual( true );
  } );
} );
