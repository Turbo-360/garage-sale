"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var _reactGoogleMaps = require("react-google-maps");

var withGoogleMap = _reactGoogleMaps.withGoogleMap;
var GoogleMap = _reactGoogleMaps.GoogleMap;
var Marker = _reactGoogleMaps.Marker;
var Map = (function (Component) {
	function Map() {
		_classCallCheck(this, Map);

		_get(Object.getPrototypeOf(Map.prototype), "constructor", this).call(this);
		this.state = {
			map: null
		};
	}

	_inherits(Map, Component);

	_prototypeProperties(Map, null, {
		mapMoved: {
			value: function mapMoved() {
				// console.log('mapMoved: '+JSON.stringify(this.state.map.getCenter()))
				if (this.props.locationChanged != null) this.props.locationChanged(this.state.map.getCenter());
			},
			writable: true,
			configurable: true
		},
		zoomChanged: {
			value: function zoomChanged() {},
			writable: true,
			configurable: true
		},
		mapLoaded: {
			value: function mapLoaded(map) {
				if (this.state.map != null) {
					return;
				}this.props.onMapReady(map);
				this.setState({
					map: map
				});
			},
			writable: true,
			configurable: true
		},
		handleMarkerClick: {
			value: function handleMarkerClick(marker) {
				if (this.props.markerClicked != null) this.props.markerClicked(marker, this.state.map);
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var _this = this;
				var markers = this.props.markers || [];

				return React.createElement(
					GoogleMap,
					{
						ref: this.mapLoaded.bind(this),
						onDragEnd: this.mapMoved.bind(this),
						onZoomChanged: this.zoomChanged.bind(this),
						defaultZoom: this.props.zoom,
						defaultCenter: this.props.center },
					markers.map(function (marker, index) {
						return React.createElement(Marker, _extends({
							key: index,
							clickable: true,
							icon: marker.icon,
							label: marker.label,
							title: marker.key,
							onClick: _this.handleMarkerClick.bind(_this, marker)
						}, marker));
					})
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Map;
})(Component);

module.exports = withGoogleMap(Map);
// console.log('zoomChanged: '+this.state.map.getZoom())