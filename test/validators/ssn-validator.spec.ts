import { validateSsn } from '../../src/validators/ssn-validator';

describe( 'SsnValidator: ', function () {
  it( 'valdate() should fail for input that does not follow the proper pattern for ssn', function () {
    expect( validateSsn( '' ) ).toEqual( false );
    expect( validateSsn( '1234' ) ).toEqual( false );
    expect( validateSsn( 'asdf' ) ).toEqual( false );
    expect( validateSsn( 'asdf1234' ) ).toEqual( false );
  } );

  it( 'validate() should succeed for valid ssn', function () {
    expect( validateSsn( '01028749879' ) ).toEqual( true );
    expect( validateSsn( '01028749364' ) ).toEqual( true );
    expect( validateSsn( '01026847822' ) ).toEqual( true );
    expect( validateSsn( '01026849590' ) ).toEqual( true );
  } );

  it( 'validate() should succeed for valid d-number', function () {
    expect( validateSsn( '41016508878' ) ).toEqual( true );
    expect( validateSsn( '50015902660' ) ).toEqual( true );
    expect( validateSsn( '60017407247' ) ).toEqual( true );
    expect( validateSsn( '70015101871' ) ).toEqual( true );
  } );
} );
