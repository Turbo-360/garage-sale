"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _redux = require("redux");

var createStore = _redux.createStore;
var applyMiddleware = _redux.applyMiddleware;
var combineReducers = _redux.combineReducers;
var thunk = _interopRequire(require("redux-thunk"));

var _reducers = require("../reducers");

var userReducer = _reducers.userReducer;
var itemReducer = _reducers.itemReducer;
var mapReducer = _reducers.mapReducer;
var accountReducer = _reducers.accountReducer;


var store;
module.exports = {

	configure: function (initialState) {
		// initialState can be null

		var reducers = combineReducers({ // insert reducers here
			user: userReducer,
			item: itemReducer,
			map: mapReducer,
			account: accountReducer
		});

		if (initialState) {
			store = createStore(reducers, initialState, applyMiddleware(thunk));

			return store;
		}

		store = createStore(reducers, applyMiddleware(thunk));

		return store;
	},

	currentStore: function () {
		return store;
	}
};