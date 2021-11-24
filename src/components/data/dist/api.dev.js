"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signFileUpload = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = "http://localhost:5000/api/v1/singleFile";

var signFileUpload = function signFileUpload(data) {
  return regeneratorRuntime.async(function signFileUpload$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post(url + "singleFile" + data));

        case 3:
          _context.next = 8;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 5]]);
};

exports.signFileUpload = signFileUpload;