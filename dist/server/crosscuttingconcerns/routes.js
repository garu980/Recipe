"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import healthController from '../api/healthController';
//import sureBetController from '../api/sureBetController';
var router = _express["default"].Router(); //router.get("/api/v1/get/health", healthController.getHealth);
//router.get("/api/v1/get/warmup", healthController.getTestHealth);
//router.get("/api/v1/get/surebets", healthController.getSureBet);
//router.get("/api/v1/get/surebets", sureBetController.getSureBet);


var _default = router;
exports["default"] = _default;