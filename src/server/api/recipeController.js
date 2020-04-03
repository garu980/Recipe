import '@babel/polyfill';

class RecipeController {
  static async health(req, res) {
    return res.json({
      message: 'Health id good'
    });
  }
}

export default RecipeController;
