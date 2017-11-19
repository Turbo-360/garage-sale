"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var _presentation = require("./presentation");

var Nav = _presentation.Nav;
var Footer = _presentation.Footer;
var Item = _presentation.Item;
var Map = _presentation.Map;
var Home = (function (Component) {
	function Home() {
		_classCallCheck(this, Home);

		_get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this);
		this.state = {
			map: null
		};
	}

	_inherits(Home, Component);

	_prototypeProperties(Home, null, {
		render: {
			value: function render() {
				var _this = this;
				var markers = [{ id: 1, key: "1", defaultAnimation: 2, label: "Nike Jordans", position: { lat: 40.7224017, lng: -73.9896719 } }, { id: 2, key: "2", defaultAnimation: 2, label: "Nike Jordans", position: { lat: 40.71224017, lng: -73.9896719 } }];

				return React.createElement(
					"div",
					{ className: "wrapper" },
					React.createElement(
						"div",
						{ className: "sidebar", "data-background-color": "white", "data-active-color": "danger" },
						React.createElement(
							"div",
							{ className: "sidebar-wrapper", style: { height: 960 } },
							React.createElement(Map, {
								onMapReady: function (map) {
									if (_this.state.map != null) return;

									_this.setState({
										map: map
									});
								},

								markers: markers,
								zoom: 14,
								center: { lat: 40.7224017, lng: -73.9896719 },
								containerElement: React.createElement("div", { style: { height: 100 + "%" } }),
								mapElement: React.createElement("div", { style: { height: 100 + "%" } }) })
						)
					),
					React.createElement(
						"div",
						{ className: "main-panel" },
						React.createElement(Nav, null),
						React.createElement(
							"div",
							{ className: "content" },
							React.createElement(
								"div",
								{ className: "container-fluid" },
								React.createElement(
									"div",
									{ className: "row" },
									React.createElement(Item, null),
									React.createElement(Item, null),
									React.createElement(Item, null),
									React.createElement(Item, null)
								)
							)
						),
						React.createElement(Footer, null)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Home;
})(Component);

module.exports = Home;
// console.log('OnMapReady: '+JSON.stringify(map.getCenter()))