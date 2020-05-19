import configuration from '../../../../config.json';

export default function config() {
  return {
    isDevelopment: isDevelopment(),
    redirectUri: isDevelopment()
      ? configuration.redirectUri
      : //TODO: need to fetch this from the server
        'https://donsby-recipes.azurewebsites.net/',
  };
}

function isDevelopment() {
  return configuration.isDevelopment == 'true';
}
