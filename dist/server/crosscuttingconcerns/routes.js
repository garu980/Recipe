"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _recipeController = _interopRequireDefault(require("../api/recipeController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/api/v1/get/health', _recipeController["default"].health);
router.get('/api/v1/get/recipes', _recipeController["default"].getListOfRecipes);
var _default = router;
exports["default"] = _default;