"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./crosscuttingconcerns/routes"));

var _config = _interopRequireDefault(require("./crosscuttingconcerns/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_routes["default"]);
app.use(_express["default"]["static"]('public'));
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
  res.render('index', {
    answer: 42
  });
});
app.listen(_config["default"].port);
var _default = app;
exports["default"] = _default;