"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAuth = void 0;

var _react = require("react");

var Auth = (0, _react.createContext)();

var useAuth = function useAuth() {
  return (0, _react.useContext)(Auth);
};

exports.useAuth = useAuth;