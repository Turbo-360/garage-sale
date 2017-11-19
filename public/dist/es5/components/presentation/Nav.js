"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
    return React.createElement(
        "nav",
        { className: "navbar navbar-default" },
        React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(
                "div",
                { className: "navbar-header" },
                React.createElement(
                    "button",
                    { type: "button", className: "navbar-toggle" },
                    React.createElement(
                        "span",
                        { className: "sr-only" },
                        "Toggle navigation"
                    ),
                    React.createElement("span", { className: "icon-bar bar1" }),
                    React.createElement("span", { className: "icon-bar bar2" }),
                    React.createElement("span", { className: "icon-bar bar3" })
                ),
                React.createElement(
                    "a",
                    { className: "navbar-brand", href: "#" },
                    "Dashboard"
                )
            ),
            React.createElement(
                "div",
                { className: "collapse navbar-collapse" },
                React.createElement(
                    "ul",
                    { className: "nav navbar-nav navbar-right" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                            React.createElement("i", { className: "ti-panel" }),
                            React.createElement(
                                "p",
                                null,
                                "Stats"
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "dropdown" },
                        React.createElement(
                            "a",
                            { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                            React.createElement("i", { className: "ti-bell" }),
                            React.createElement(
                                "p",
                                { className: "notification" },
                                "5"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Notifications"
                            ),
                            React.createElement("b", { className: "caret" })
                        ),
                        React.createElement(
                            "ul",
                            { className: "dropdown-menu" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Notification 1"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Notification 2"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Notification 3"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Notification 4"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Another notification"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            React.createElement("i", { className: "ti-settings" }),
                            React.createElement(
                                "p",
                                null,
                                "Settings"
                            )
                        )
                    )
                )
            )
        )
    );
};