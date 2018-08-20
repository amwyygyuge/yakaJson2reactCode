"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var createFormValueInit = function createFormValueInit(yakaConfig) {
    var formValue = yakaConfig.init.formValue;

    if (formValue && (typeof formValue === "undefined" ? "undefined" : _typeof(formValue)) === "object") {
        return "\n        initFormValue = () => {\n            const { setFieldsValue } = this.props.form\n            setFieldsValue(" + JSON.stringify(formValue) + ")\n        }\n        ";
    } else {
        return false;
    }
};
exports.default = createFormValueInit;