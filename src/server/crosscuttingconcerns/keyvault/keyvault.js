import KeyVault from 'azure-keyvault';
import configuration from '../configuration/configuration';

export default async function getValueOfKeyFromKeyVault(vaultKey) {
  try {
    return 'DefaultEndpointsProtocol=https;AccountName=donsbyrecipestorage;AccountKey=MjqwkuBGKpdMN4yLHQbQ2qbn5nq99+LredN31XhwqLQnneUXPv6YwUbHJE1fsmoTlM7FoCjXNC7riWs10bSGhA==;EndpointSuffix=core.windows.net';
    let credentials = await KeyVault.msRestAzure.loginWithAppServiceMSI({
      resource: 'https://vault.azure.net',
    });
    let keyVaultClient = new KeyVault.KeyVaultClient(credentials);
    let secretBundle = await keyVaultClient.getSecret(
      configuration.keyVaultUri,
      vaultKey,
      ''
    );
    return secretBundle.value;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
