'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createRender2 = require('./createRender');

var _createRender3 = _interopRequireDefault(_createRender2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createReactCode = function createReactCode(layout) {
    var _createRender = (0, _createRender3.default)(layout),
        code = _createRender.code,
        state = _createRender.state,
        components = _createRender.components;

    return { code: code, state: state, components: components };
};
exports.default = createReactCode;