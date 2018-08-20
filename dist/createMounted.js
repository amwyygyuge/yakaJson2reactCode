"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var createMounted = function createMounted() {
    var mounted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { run: {} };
    var run = mounted.run;

    if (run && (typeof run === "undefined" ? "undefined" : _typeof(run)) === "object") {
        var funs = Object.keys(run).map(function (key) {
            return "this." + key + "(" + JSON.stringify(run[key]) + ")";
        });
        return "\n        runMountedFunc = () => {\n            " + funs.join(";") + "\n        }\n        ";
    } else {
        return "";
    }
};
exports.default = createMounted;