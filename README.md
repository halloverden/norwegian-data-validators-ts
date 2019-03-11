# norwegian-data-validator-ts

Typescript library for validating norwegian data:
- Account numbers
- Organization numbers
- Social security numbers (supports D-numbers)
- KID numbers

Also includes the following utility functions:
- Generate one or more Luhn control digits for given number
- Check that a given number has a valid Luhn control digit
- Generate one or more Mod11 control digits for given number
- Check that a given number has a valid Mod11 control digit
- Get valid individual number range for a Norwegian ssn with the given birth year
- Get the correct birth date for a given Norwegian ssn or D-number
- Generate a random valid Norwegian ssn or D-number for a given date
- Check if a given Norwegian ssn is a D-number


Test with `npm run test`

Build with `npm run build`

Install with `npm i --save @halloverden/norwegian-data-validators-ts` or `yarn add @halloverden/norwegian-data-validators-ts`
