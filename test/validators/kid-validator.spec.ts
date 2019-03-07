import { validateKidNumber } from '@validators/kid-number-validator';

describe( 'KidValidator: ', function () {
  it( 'validate() should fail if number is neither Mod11 nor Luhn "compatible"', function () {
    expect( validateKidNumber( '' ) ).toEqual( false );
    expect( validateKidNumber( '51028745503' ) ).toEqual( false );
    expect( validateKidNumber( '51028745509' ) ).toEqual( false );
    expect( validateKidNumber( '51028745504' ) ).toEqual( false );
    expect( validateKidNumber( '51028745505' ) ).toEqual( false );
  } );

  it( 'validate() should succeed if number is Mod11 "compatible"', function () {
    expect( validateKidNumber( '51028745501' ) ).toEqual( true );
    expect( validateKidNumber( '01028745539' ) ).toEqual( true );
    expect( validateKidNumber( '01028745504' ) ).toEqual( true );
  } );

  it( 'validate() should succeed if number is Luhn "compatible"', function () {
    expect( validateKidNumber( '51028745506' ) ).toEqual( true );
    expect( validateKidNumber( '01028745535' ) ).toEqual( true );
    expect( validateKidNumber( '01028745501' ) ).toEqual( true );
    expect( validateKidNumber( '1234567897' ) ).toEqual( true );
  } );
} );
