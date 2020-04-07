"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _recipeController = _interopRequireDefault(require("../api/recipeController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import sureBetController from '../api/sureBetController';
var router = _express["default"].Router();

router.get('/api/v1/get/health', _recipeController["default"].health); //router.get("/api/v1/get/warmup", healthController.getTestHealth);
//router.get("/api/v1/get/surebets", healthController.getSureBet);
//router.get("/api/v1/get/surebets", sureBetController.getSureBet);

var _default = router;
exports["default"] = _default;