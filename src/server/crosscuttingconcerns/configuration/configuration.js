import configuration from '../../../../config.json';

export default function config() {
  return {
    isDevelopment: isDevelopment(),
    keyVaultUri: isDevelopment()
      ? configuration.keyVaultUri
      : process.env.APPSETTING_KeyVaultUrl,
    storageAccountKeySecret: isDevelopment()
      ? configuration.storageAccountKeySecret
      : process.env.APPSETTING_StorageAccountKeySecret,
    storageAccountName: isDevelopment()
      ? configuration.storageAccountName
      : process.env.APPSETTING_StorageAccountName,
  };
}

function isDevelopment() {
  return configuration.isDevelopment == 'true';
}
