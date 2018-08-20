'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 
 * @param {*} renderCode 
 * @param {*} components 
 * @param {*} state 
 * @description 拼装页面
 */

var createPgae = function createPgae(name, renderCode, components, state, mountFunctions, functionTemplates, constructorCode, formValueInit, mounted) {

  var componentsCode = components.join(', ');
  var stateCode = state.join(', ');

  var template = '\n    import React, { Component } from \'react\'\n    import { ' + componentsCode + ' } from \'igroot\'\n    ' + mountFunctions + '\n    ' + functionTemplates + '\n    class ' + name + ' extends Component {\n\n      ' + constructorCode + '\n\n      componentDidMount () {\n        ' + (formValueInit ? " this.initFormValue()" : "") + '\n        ' + (mounted ? " this.runMountedFunc()" : "") + '\n      }\n\n      ' + (formValueInit ? formValueInit : "") + '\n\n      ' + (mounted ? mounted : "") + '\n\n      render () {\n        const { ' + stateCode + ' } = this.state\n        return ' + renderCode + '\n      }\n    }\n\n    export default ' + name + '\n    ';
  return template;
};

exports.default = createPgae;