import {
  checkMod11ControlDigit,
  checkMod11ControlDigits,
  getMod11ControlDigit,
  getMod11ControlDigits
} from '@utilities/mod11-utilities';

describe( 'Mod11Utilities: ', function () {

  it( 'getLuhnControlDigit() should create correct control digit', function () {
    let values = [
      { input: '5102874550', expectedOutput: 1 },
      { input: '51028745501', expectedOutput: null },
      { input: '0102874553', expectedOutput: 9 },
      { input: '0102874550', expectedOutput: 4 },
      { input: '123456789', expectedOutput: 2 },
      { input: '98765', expectedOutput: 4 },
      { input: '1', expectedOutput: 9 }
    ];

    values.forEach( ( v ) => {
      let output = getMod11ControlDigit( v.input );
      expect( output ).toEqual( v.expectedOutput );
    } );

  } );

  it( 'getLuhnControlDigits() should return an array of correct control digits', function () {
    let values = [
      { input: '5102874550', numberOfDigits: 3, expectedOutput: [ 1, null, null ] },
      { input: '0102874553', numberOfDigits: 4, expectedOutput: [ 9, 4, 5, 4 ] },
      { input: '0102874550', numberOfDigits: 2, expectedOutput: [ 4, 1 ] },
      { input: '123456789', numberOfDigits: 1, expectedOutput: [ 2 ] },
      { input: '123456789', numberOfDigits: 2, expectedOutput: [ 2, null ] },
      { input: '98765', numberOfDigits: 5, expectedOutput: [ 4, 5, null, null, null ] },
      { input: '1', numberOfDigits: 2, expectedOutput: [ 9, 1 ] },
      { input: '1', numberOfDigits: 3, expectedOutput: [ 9, 1, 0 ] }
    ];

    values.forEach( ( v ) => {
      let output = getMod11ControlDigits( v.input, v.numberOfDigits );
      expect( output ).toEqual( v.expectedOutput );
    } );

  } );

  it( 'checkLuhnControlDigit() should validate the last control digit', function () {
    let values = [
      { input: '51028745501', expectedOutput: true },
      { input: '51028745502', expectedOutput: false },
      { input: '01028745539', expectedOutput: true },
      { input: '01028745534', expectedOutput: false },
      { input: '01028745504', expectedOutput: true },
      { input: '01028745505', expectedOutput: false },
      { input: '1234567892', expectedOutput: true },
      { input: '1234567895', expectedOutput: false },
      { input: '987654', expectedOutput: true },
      { input: '987653', expectedOutput: false },
      { input: '9876545', expectedOutput: true },
      { input: '98765454', expectedOutput: false }
    ];

    values.forEach( ( v ) => {
      let output = checkMod11ControlDigit( v.input );
      expect( output ).toEqual( v.expectedOutput );
    } );

  } );

  it( 'checkLuhnControlDigits() should validate the given number of control digits', function () {
    let values = [
      { input: '01028745539454', numberOfDigits: 4, expectedOutput: true },
      { input: '51028745502', numberOfDigits: 3, expectedOutput: false },
      { input: '010287455041', numberOfDigits: 2, expectedOutput: true },
      { input: '01028745534', numberOfDigits: 3, expectedOutput: false },
      { input: '9876545', numberOfDigits: 2, expectedOutput: true },
      { input: '19', numberOfDigits: 1, expectedOutput: true },
      { input: '191', numberOfDigits: 2, expectedOutput: true },
      { input: '1910', numberOfDigits: 3, expectedOutput: true },
      { input: '1912', numberOfDigits: 3, expectedOutput: false },
      { input: '19102', numberOfDigits: 4, expectedOutput: false }
    ];

    values.forEach( ( v ) => {
      let output = checkMod11ControlDigits( v.input, v.numberOfDigits );
      expect( output ).toEqual( v.expectedOutput );
    } );

  } );

} );
