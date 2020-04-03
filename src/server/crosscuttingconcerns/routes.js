import express from 'express';
import recipeController from '../api/recipeController';
//import sureBetController from '../api/sureBetController';
const router = express.Router();
router.get('/api/v1/get/health', recipeController.health);
//router.get("/api/v1/get/warmup", healthController.getTestHealth);
//router.get("/api/v1/get/surebets", healthController.getSureBet);
//router.get("/api/v1/get/surebets", sureBetController.getSureBet);
export default router;
