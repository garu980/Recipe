import configuration from '../../../../config.json';

export default function config() {
  return {
    isDevelopment: isDevelopment(),
    keyVaultUri: isDevelopment()
      ? configuration.keyVaultUri
      : process.env.APPSETTING_KeyVaultUrl,
    redirectUri: isDevelopment()
      ? configuration.redirectUri
      : process.env.APPSETTING_RedirectUri,
    betApiRegions: isDevelopment()
      ? configuration.betApiRegions
      : process.env.APPSETTING_BetApiRegions,
    betApiMatches: isDevelopment()
      ? configuration.betApiMatches
      : process.env.APPSETTING_BetApiMatches,
  };
}

function isDevelopment() {
  return configuration.isDevelopment == 'true';
}
