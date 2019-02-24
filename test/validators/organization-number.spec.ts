import { OrganizationNumber } from '@validators/organization-number';

describe('OrganizationNumber: ', function () {
  it('validate() should fail if input does not follow the allowed organization number pattern', function () {
    expect(OrganizationNumber.validate('')).toBe(false);
    expect(OrganizationNumber.validate('asdf')).toBe(false);
    expect(OrganizationNumber.validate('1234')).toBe(false);
    expect(OrganizationNumber.validate('651651651651')).toBe(false);
    expect(OrganizationNumber.validate('651651651651')).toBe(false);
  });

  it('validate() should succeed for valid organization numbers', function () {
    expect(OrganizationNumber.validate('922171920')).toBe(true);
    expect(OrganizationNumber.validate('922138079')).toBe(true);
    expect(OrganizationNumber.validate('976107268')).toBe(true);
    expect(OrganizationNumber.validate('918921672')).toBe(true);
    expect(OrganizationNumber.validate('811714682')).toBe(true);
    expect(OrganizationNumber.validate('916330561')).toBe(true);
  });

  it('validate() should accept spaces in the incoming number', function () {
    expect(OrganizationNumber.validate('922 171 920')).toBe(true);
    expect(OrganizationNumber.validate('922 1380 79')).toBe(true);
    expect(OrganizationNumber.validate('976 10726 8')).toBe(true);
    expect(OrganizationNumber.validate('918 9 21672')).toBe(true);
    expect(OrganizationNumber.validate('811 71 4682')).toBe(true);
    expect(OrganizationNumber.validate('916 330 561')).toBe(true);
  });
});
