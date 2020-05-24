import configuration from '../../../../config.json';

describe('configuration is not development', () => {
  it('has isDevelopment false', () => {
    expect(configuration.isDevelopment).toBe('false');
  });
});
