import { validateAccountNumber } from '@validators/account-number-validator';

describe( 'AccountNumberValidator: ', function () {
  it( 'validate() should fail if input does not follow valid account number pattern', function () {
    expect( validateAccountNumber( '1234' ) ).toEqual( false );
    expect( validateAccountNumber( '1234.23..212312312' ) ).toEqual( false );
    expect( validateAccountNumber( '123423212312312' ) ).toEqual( false );
    expect( validateAccountNumber( '1234230' ) ).toEqual( false );
  } );

  it( 'validate() should fail if input is not a valid account number', function () {
    expect( validateAccountNumber( '73256545373' ) ).toEqual( false );
    expect( validateAccountNumber( '7325.65.45373' ) ).toEqual( false );
  } );

  it( 'validate() should succeed if input is a valid account number', function () {
    expect( validateAccountNumber( '73256545370' ) ).toEqual( false );
    expect( validateAccountNumber( '7325.65.45370' ) ).toEqual( false );
  } );
} );
