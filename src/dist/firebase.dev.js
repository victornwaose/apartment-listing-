"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = exports.auth = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _storage = require("firebase/storage");

var firebaseConfig = {
  apiKey: "AIzaSyAp7gLTi7jFgiINdccRGLfmVozwqOaXbvE",
  authDomain: "apartment-listing-45b6c.firebaseapp.com",
  projectId: "apartment-listing-45b6c",
  storageBucket: "apartment-listing-45b6c.appspot.com",
  messagingSenderId: "933074869301",
  appId: "1:933074869301:web:3741cf2941ccc8b32e657c"
};
var app = (0, _app.initializeApp)(firebaseConfig);
var auth = (0, _auth.getAuth)(app);
exports.auth = auth;
var storage = (0, _storage.getStorage)(app);
exports.storage = storage;