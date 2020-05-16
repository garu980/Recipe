import express from 'express';
import recipeController from '../api/recipeController';
const router = express.Router();
router.get('/api/v1/get/health', recipeController.health);
router.get('/api/v1/get/recipes', recipeController.getListOfRecipes);
export default router;
