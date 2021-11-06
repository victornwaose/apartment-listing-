"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = exports.auth = void 0;

var _app = require("firebase/app");

var _auth = require("firebase/auth");

var _storage = require("firebase/storage");

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPLICATION_ID
};
console.log(process.env.REACT_APP_API_KEY);
var app = (0, _app.initializeApp)(firebaseConfig);
var auth = (0, _auth.getAuth)(app);
exports.auth = auth;
var storage = (0, _storage.getStorage)(app);
exports.storage = storage;