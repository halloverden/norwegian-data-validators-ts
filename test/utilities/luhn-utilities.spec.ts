import {
  checkLuhnControlDigit,
  checkLuhnControlDigits,
  getLuhnControlDigit,
  getLuhnControlDigits
} from '../../src/utilities/luhn-utilities';

describe( 'LuhnUtilities: ', function () {
  it( 'getLuhnControlDigit() should create correct control digit', function () {
    let values = [
      { input: '5102874550', expectedOutput: 6 },
      { input: '0102874553', expectedOutput: 5 },
      { input: '0102874550', expectedOutput: 1 },
      { input: '123456789', expectedOutput: 7 },
      { input: '98765', expectedOutput: 1 },
      { input: '1', expectedOutput: 8 }
    ];

    values.forEach( ( v ) => {
      let output = getLuhnControlDigit( v.input );
      expect( output ).toEqual( v.expectedOutput );
    } );

  } );

  it( 'getLuhnControlDigits() should return an array of correct control digits', function () {
    let values = [
      { input: '5102874550', numberOfDigits: 3, expectedOutput: [ 6, 5, 9 ] },
      { input: '0102874553', numberOfDigits: 4, expectedOutput: [ 5, 5, 9, 1 ] },
      { input: '0102874550', numberOfDigits: 2, expectedOutput: [ 1, 7 ] },
      { input: '123456789', numberOfDigits: 1, expectedOutput: [ 7 ] },
      { input: '123456789', numberOfDigits: 2, expectedOutput: [ 7, 8 ] },
      { input: '98765', numberOfDigits: 5, expectedOutput: [ 1, 7, 5, 9, 1 ] },
      { input: '1', numberOfDigits: 2, expectedOutput: [ 8, 2 ] },
      { input: '1', numberOfDigits: 3, expectedOutput: [ 8, 2, 6 ] }
    ];

    values.forEach( ( v ) => {
      let output = getLuhnControlDigits( v.input, v.numberOfDigits );
      expect( output ).toEqual( v.expectedOutput );
    } );

  } );

  it( 'checkLuhnControlDigit() should validate the last control digit', function () {
    let values = [
      { input: '51028745506', expectedOutput: true },
      { input: '51028745502', expectedOutput: false },
      { input: '01028745535', expectedOutput: true },
      { input: '01028745534', expectedOutput: false },
      { input: '01028745501', expectedOutput: true },
      { input: '01028745505', expectedOutput: false },
      { input: '1234567897', expectedOutput: true },
      { input: '1234567895', expectedOutput: false },
      { input: '987651', expectedOutput: true },
      { input: '987653', expectedOutput: false },
      { input: '9876517', expectedOutput: true },
      { input: '9876518', expectedOutput: false }
    ];

    values.forEach( ( v ) => {
      let output = checkLuhnControlDigit( v.input );
      expect( output ).toEqual( v.expectedOutput );
    } );

  } );

  it( 'checkLuhnControlDigits() should validate the given number of control digits', function () {
    let values = [
      { input: '5102874550659', numberOfDigits: 3, expectedOutput: true },
      { input: '5102874550655', numberOfDigits: 3, expectedOutput: false },
      { input: '5102874550859', numberOfDigits: 3, expectedOutput: false },
      { input: '01028745535591', numberOfDigits: 4, expectedOutput: true },
      { input: '01028745535592', numberOfDigits: 4, expectedOutput: false },
      { input: '010287455017', numberOfDigits: 2, expectedOutput: true },
      { input: '1234567897', numberOfDigits: 1, expectedOutput: true },
      { input: '1234567896', numberOfDigits: 1, expectedOutput: false },
      { input: '12345678978', numberOfDigits: 2, expectedOutput: true },
      { input: '12345678998', numberOfDigits: 2, expectedOutput: false },
      { input: '9876517591', numberOfDigits: 5, expectedOutput: true },
      { input: '9876517291', numberOfDigits: 5, expectedOutput: false },
      { input: '182', numberOfDigits: 2, expectedOutput: true },
      { input: '181', numberOfDigits: 2, expectedOutput: false },
      { input: '1826', numberOfDigits: 3, expectedOutput: true },
      { input: '1828', numberOfDigits: 3, expectedOutput: false },
      { input: '1826', numberOfDigits: 1, expectedOutput: true }
    ];

    values.forEach( ( v ) => {
      let output = checkLuhnControlDigits( v.input, v.numberOfDigits );
      expect( output ).toEqual( v.expectedOutput );
    } );

  } );
} );
