"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var createFunctionTemplateCode = function createFunctionTemplateCode() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "name";
    var functionTemplate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var filed = "";
    var keys = Object.keys(functionTemplate);
    keys.forEach(function (key) {
        var func = "const " + key + " = " + functionTemplate[key] + "\n";
        filed += func;
    });
    var importCode = "";
    if (keys.length) {
        importCode = "import { " + keys.join(', ') + " } from '" + name + "_functionTemplate.js';";
    }
    return {
        jsCode: "\n        " + filed + "\n        export { " + keys.join(', ') + " }\n        ",
        exports: keys,
        importCode: importCode
    };
};

exports.default = createFunctionTemplateCode;