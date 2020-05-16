import * as azure from 'azure-storage';
import configuration from '../crosscuttingconcerns/configuration/configuration';
import getValueOfKeyFromKeyVault from '../crosscuttingconcerns/keyvault/keyvault';

export default async function getRecipes() {
  let storageAccountKeySecret = await getValueOfKeyFromKeyVault(
    configuration().storageAccountKeySecret
  );

  let tableService = azure.createTableService(storageAccountKeySecret);

  tableService.createTableIfNotExists('Recipe', (err, result, response) => {
    if (!err) {
      console.log('Table created');
    } else {
      console.log('Got error creating table :-( ' + err + response + result);
    }
  });

  let recipes = tableService.queryEntities();

  return recipes;
}
