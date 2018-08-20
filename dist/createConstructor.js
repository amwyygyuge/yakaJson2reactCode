"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var createConstructor = function createConstructor(yakaConfig) {
    var mountFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var state = yakaConfig.init.state;

    var stateCode = "{}";
    var mountFunctionCode = "";
    if (state && (typeof state === "undefined" ? "undefined" : _typeof(state)) === "object") {
        stateCode = JSON.stringify(state);
    }
    if (mountFunctions.length) {
        mountFunctions.forEach(function (item) {
            mountFunctionCode += "this." + item + " = " + item + ".bind(this);";
        });
    }
    var code = "\n    constructor(){\n        super()\n        this.state = " + stateCode + "\n        " + mountFunctionCode + "\n      }\n    ";
    return code;
};

exports.default = createConstructor;