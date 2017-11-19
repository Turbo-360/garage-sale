"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
    var item = props.item;

    return React.createElement(
        "div",
        { className: "col-lg-3 col-sm-6" },
        React.createElement(
            "div",
            { className: "card" },
            React.createElement(
                "div",
                { className: "content" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-12" },
                        React.createElement(
                            "div",
                            { className: "numbers" },
                            React.createElement(
                                "p",
                                null,
                                item.name
                            ),
                            "$",
                            item.price
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-12" },
                        React.createElement(
                            "a",
                            { onClick: props.onPurchase.bind(undefined), href: "#" },
                            React.createElement("img", { style: localStyle.itemImage, src: item.image })
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "footer" },
                    React.createElement("hr", null),
                    React.createElement("img", { style: localStyle.icon, src: item.seller.image }),
                    React.createElement(
                        "div",
                        { className: "stats" },
                        item.seller.username
                    )
                )
            )
        )
    );
};

var localStyle = {
    icon: {
        width: 28,
        borderRadius: 14,
        float: "right"
    },
    itemImage: {
        width: 100 + "%",
        padding: 3,
        border: "1px solid #ddd",
        background: "#fffffa"
    }
};