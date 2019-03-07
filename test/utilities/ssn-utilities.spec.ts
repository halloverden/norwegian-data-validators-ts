import { getBirthDateFromSsn, isDNumber } from '@utilities/ssn-utilities';

describe( 'SsnUtilities', function () {
  it( 'getBirthDateFromSsn() should return null if ssn is invalid', function () {
    expect( getBirthDateFromSsn( '' ) ).toEqual( null );
    expect( getBirthDateFromSsn( '1234' ) ).toEqual( null );
    expect( getBirthDateFromSsn( 'asdf' ) ).toEqual( null );
  } );

  it( 'getBirthDateFromSsn() should return the correct birth date for a given ssn', function () {
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
  } );

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
