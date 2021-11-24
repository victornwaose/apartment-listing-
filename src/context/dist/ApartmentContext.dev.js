"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useApartmentContext = void 0;

var _react = require("react");

var ApartmentContext = (0, _react.createContext)();

var useApartmentContext = function useApartmentContext() {
  return (0, _react.useContext)(ApartmentContext);
};

exports.useApartmentContext = useApartmentContext;

var AppartmentProvider = function AppartmentProvider(_ref) {
  var cildren = _ref.cildren;
};