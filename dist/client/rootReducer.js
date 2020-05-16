"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _languageReducer = _interopRequireDefault(require("../client/presentation/navigation/state/languageReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// the state takes as default the names of the root reducers (when returning the state)
// so if you want to change the names of the state objects you need to define them here
// e.g. reducer name = languageReducer => state object name = languageReducer { language: string}
// BUT if you define language: languageReducer => state object name = language { language: string }
var rootReducer = (0, _redux.combineReducers)({
  language: _languageReducer["default"]
});
var _default = rootReducer;
exports["default"] = _default;