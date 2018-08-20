"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var createMountFunctionCode = function createMountFunctionCode(name) {
    var mountFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var filed = "";
    var keys = Object.keys(mountFunction);
    keys.forEach(function (key) {
        var func = "const " + key + " = " + mountFunction[key] + "\n";
        filed += func;
    });
    var importCode = "";
    if (keys.length) {
        importCode = "import { " + keys.join(', ') + " } from '" + name + "_mountFunction.js';";
    }
    return {
        jsCode: "\n        " + filed + "\n        export { " + keys.join(', ') + " }\n        ",
        exports: keys,
        importCode: importCode
    };
};
exports.default = createMountFunctionCode;