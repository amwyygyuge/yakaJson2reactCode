'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createFunctionTemplateCode = require('./createFunctionTemplateCode');

var _createFunctionTemplateCode2 = _interopRequireDefault(_createFunctionTemplateCode);

var _createMountFunctionCode = require('./createMountFunctionCode');

var _createMountFunctionCode2 = _interopRequireDefault(_createMountFunctionCode);

var _createReactCode2 = require('./createReactCode');

var _createReactCode3 = _interopRequireDefault(_createReactCode2);

var _createPage = require('./createPage');

var _createPage2 = _interopRequireDefault(_createPage);

var _createConstructor = require('./createConstructor');

var _createConstructor2 = _interopRequireDefault(_createConstructor);

var _createFormValueInit = require('./createFormValueInit');

var _createFormValueInit2 = _interopRequireDefault(_createFormValueInit);

var _createMounted = require('./createMounted');

var _createMounted2 = _interopRequireDefault(_createMounted);

var _prettier = require('prettier');

var _prettier2 = _interopRequireDefault(_prettier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readConfig = function readConfig() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var yakaConfig = config.yakaConfig,
        mountFunctions = config.mountFunctions,
        functionTemplates = config.functionTemplates,
        name = config.name;
    // 生成render布局代码

    var _createReactCode = (0, _createReactCode3.default)(yakaConfig),
        code = _createReactCode.code,
        state = _createReactCode.state,
        components = _createReactCode.components;
    // 生成挂载函数代码


    var mountFunctionCode = (0, _createMountFunctionCode2.default)(name, mountFunctions);
    // 生成函数模板代码
    var functionTemplateCode = (0, _createFunctionTemplateCode2.default)(name, functionTemplates);
    //生成构造函数部分代码
    var constructorCode = (0, _createConstructor2.default)(yakaConfig, mountFunctionCode.exports);
    // 生成form初始化函数
    var formValueInit = (0, _createFormValueInit2.default)(yakaConfig);
    // 生成挂载后运行的函数
    var mounted = (0, _createMounted2.default)(yakaConfig);
    // 组装页面
    var page = (0, _createPage2.default)(name, code, components, state, mountFunctionCode.importCode, functionTemplateCode.importCode, constructorCode, formValueInit, mounted);
    var demo = {
        getData: function getData() {
            return {
                reactCode: _prettier2.default.format(page),
                mountFunctionCode: _prettier2.default.format(mountFunctionCode.jsCode),
                functionTemplateCode: _prettier2.default.format(functionTemplateCode.jsCode)
            };
        },
        download: function download() {
            console.log("test");
        },
        createZip: function createZip() {
            console.log("test");
        }
    };

    return demo;
};

exports.default = readConfig;