"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill");

var _recipeRepository = require("../repositories/recipeRepository");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RecipeController = /*#__PURE__*/function () {
  function RecipeController() {
    _classCallCheck(this, RecipeController);
  }

  _createClass(RecipeController, null, [{
    key: "health",
    value: function () {
      var _health = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", res.json({
                  message: 'Health id good'
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function health(_x, _x2) {
        return _health.apply(this, arguments);
      }

      return health;
    }()
  }, {
    key: "createRecipe",
    value: function () {
      var _createRecipe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0, _recipeRepository.saveRecipe)(req.data);

              case 3:
                return _context2.abrupt("return", res.json({
                  mesage: 'saved'
                }));

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.json({
                  message: _context2.t0
                }));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function createRecipe(_x3, _x4) {
        return _createRecipe.apply(this, arguments);
      }

      return createRecipe;
    }()
  }, {
    key: "getListOfRecipes",
    value: function () {
      var _getListOfRecipes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var recipes;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.t0 = JSON;
                _context3.next = 4;
                return (0, _recipeRepository.getRecipes)();

              case 4:
                _context3.t1 = _context3.sent;
                recipes = _context3.t0.parse.call(_context3.t0, _context3.t1);
                res.json({
                  message: recipes
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t2 = _context3["catch"](0);
                return _context3.abrupt("return", res.json({
                  message: _context3.t2
                }));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }));

      function getListOfRecipes(_x5, _x6) {
        return _getListOfRecipes.apply(this, arguments);
      }

      return getListOfRecipes;
    }()
  }]);

  return RecipeController;
}();

var _default = RecipeController;
exports["default"] = _default;