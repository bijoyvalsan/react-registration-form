import { validateAlphaNumeric, validateEmail } from '../helper';

describe('Test helper functions', () => {
  it('test - validateAlphaNumeric - positive', () => {
    const value = validateAlphaNumeric("dfdfdf34434");
    expect(value).toBe(true)
  });
  it('test - validateAlphaNumeric - negetive', () => {
    const value = validateAlphaNumeric("dfdfdf34434-");
    expect(value).toBe(false)
  });

  it('test - validateEmail - positive', () => {
    const value = validateEmail("bb@sds.com");
    expect(value).toBe(true)
  });
  it('test - validateEmail - negetive', () => {
    const value = validateAlphaNumeric("dfdfdf34434-");
    expect(value).toBe(false)
  });
});