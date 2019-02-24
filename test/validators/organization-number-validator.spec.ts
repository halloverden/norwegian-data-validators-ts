import { OrganizationNumberValidator } from '@validators/organization-number-validator';

describe('OrganizationNumberValidator: ', function () {
  it('validate() should fail if input does not follow the allowed organization number pattern', function () {
    expect(OrganizationNumberValidator.validate('')).toEqual(false);
    expect(OrganizationNumberValidator.validate('asdf')).toEqual(false);
    expect(OrganizationNumberValidator.validate('1234')).toEqual(false);
    expect(OrganizationNumberValidator.validate('651651651651')).toEqual(false);
    expect(OrganizationNumberValidator.validate('651651651651')).toEqual(false);
  });

  it('validate() should succeed for valid organization numbers', function () {
    expect(OrganizationNumberValidator.validate('922171920')).toEqual(true);
    expect(OrganizationNumberValidator.validate('922138079')).toEqual(true);
    expect(OrganizationNumberValidator.validate('976107268')).toEqual(true);
    expect(OrganizationNumberValidator.validate('918921672')).toEqual(true);
    expect(OrganizationNumberValidator.validate('811714682')).toEqual(true);
    expect(OrganizationNumberValidator.validate('916330561')).toEqual(true);
  });

  it('validate() should accept spaces in the incoming number', function () {
    expect(OrganizationNumberValidator.validate('922 171 920')).toEqual(true);
    expect(OrganizationNumberValidator.validate('922 1380 79')).toEqual(true);
    expect(OrganizationNumberValidator.validate('976 10726 8')).toEqual(true);
    expect(OrganizationNumberValidator.validate('918 9 21672')).toEqual(true);
    expect(OrganizationNumberValidator.validate('811 71 4682')).toEqual(true);
    expect(OrganizationNumberValidator.validate('916 330 561')).toEqual(true);
  });
});
