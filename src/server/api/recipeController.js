import '@babel/polyfill';
import { getRecipes, saveRecipe } from '../repositories/recipeRepository';

class RecipeController {
  static async health(req, res) {
    return res.json({
      message: 'Health id good',
    });
  }

  static async createRecipe(req, res) {
    try {
      await saveRecipe(req.data);
      return res.json({
        mesage: 'saved',
      });
    } catch (error) {
      return res.json({
        message: error,
      });
    }
  }

  static async getListOfRecipes(req, res) {
    try {
      let recipes = JSON.parse(await getRecipes());
      res.json({
        message: recipes,
      });
    } catch (error) {
      return res.json({
        message: error,
      });
    }
  }
}

export default RecipeController;
