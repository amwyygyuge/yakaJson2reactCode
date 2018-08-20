"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var SYMBOL = ["*", "@", "$"];
var SYMBOL_STRING = SYMBOL.join("");
var REX = /^[A-Z]+$/;
/**
 * @description props数据处理
 * @param {*} data 
 * @returns {object} { propsText , stateText}
 */
var filterData2Props = function filterData2Props(data) {
    var obj = {
        propsText: "",
        stateText: ""
    };
    if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
        obj.propsText = "{" + JSON.stringify(data) + "}";
    }
    if (typeof data === "string") {
        var symbol = data[0];
        if (SYMBOL_STRING.includes(symbol)) {
            var length = data.length;
            var str = data.slice(1, length);
            if (symbol === "*") {
                // 函数
                obj.propsText = "{this." + str + "}";
            }
            if (symbol === "$") {
                // 变量 
                obj.propsText = "{" + str + "}";
                obj.stateText = str;
            }
            if (symbol === "@") {
                // props
                obj.propsText = "{" + str + "}";
            }
        } else {
            obj.propsText = "\"" + data + "\"";
        }
    }
    if (typeof data === "boolean") {
        obj.propsText = "{" + data + "}";
    }
    if (typeof data === "number") {
        obj.propsText = "{" + data + "}";
    }
    return obj;
};

/**
 * 
 * @param {*} data 
 * @description text数据处理
 * @returns {object} { text , stateText}
 */
var filterData2Text = function filterData2Text(data) {
    var obj = {
        text: "",
        stateText: ""
    };
    if (typeof data === "string") {
        var symbol = data[0];
        if (SYMBOL_STRING.includes(symbol)) {
            var length = data.length;
            var str = data.slice(1, length);
            if (symbol === "$") {
                // 变量
                obj.text = "{" + str + "}";
                obj.stateText = str;
            }
            if (symbol === "@") {
                // props
                obj.text = "{" + str + "}";
            }
        } else {
            obj.text = "" + data;
        }
    }
    if (typeof data === "number") {
        obj.text = "" + data;
    }
    return obj;
};
/**
 * 
 * @param {*} props 
 * @description 读取props信息
 * @returns {object} { propsText,stateArray }
 */
var readProps = function readProps(props) {
    if (!props) return { propsText: "", stateArray: [] };
    var code = "";
    var state = [];
    Object.keys(props).forEach(function (key) {
        var obj = filterData2Props(props[key]);
        var sub_code = "";
        if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
            var propsText = obj.propsText,
                stateText = obj.stateText;

            sub_code = key + "=" + propsText;
            state.push(stateText);
        } else {
            sub_code = key + "=" + obj;
        }
        code += sub_code;
    });
    return { propsText: code, stateArray: state };
};
/**
 * 
 * @param {*} eles 
 * @returns {object} { code, state, componets }
 */
var ele2react = function ele2react(eles) {
    var code = "";
    var state = [];
    var components = [];
    eles.forEach(function (item) {
        var sub_code = "";
        var ele = item.ele,
            subs = item.subs,
            text = item.text,
            props = item.props;

        if (REX.test(ele[0])) {
            if (!components.some(function (item) {
                return item === ele;
            })) {
                components.push(ele);
            }
        }

        var _readProps = readProps(props),
            propsText = _readProps.propsText,
            stateArray = _readProps.stateArray;

        state = state.concat(stateArray);
        if (Array.isArray(subs)) {
            var subEle = ele2react(subs);
            sub_code = "<" + ele + " " + propsText + ">" + subEle.code + "</" + ele + ">";
            state = state.concat(subEle.state);
            components = components.concat(subEle.components);
        } else {
            if (text) {
                //有文本内容情况
                var textCode = filterData2Text(text);
                state.push(textCode.stateText);
                sub_code = "<" + ele + " " + propsText + ">" + textCode.text + "</" + ele + ">";
            } else {
                // 处理无文本内容情况
                sub_code = "<" + ele + " " + propsText + "/>";
            }
        }
        code += sub_code;
    });
    // 返回数据的处理
    state = state.filter(function (item) {
        return item;
    }).map(function (item) {
        return item.split(".")[0];
    });
    return { code: code, state: state, components: components };
};
/**
 * 
 * @param {*} yakaConfig
 * @todo props收集
 * @returns {string} code render的代码
 * @returns {Array} state 收集的state
 * @returns {Array} components 收集的所使用组件
 */
var createRender = function createRender() {
    var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var _ele2react = ele2react(layout),
        code = _ele2react.code,
        state = _ele2react.state,
        components = _ele2react.components;

    return { code: "<div>" + code + "</div>", state: state, components: components };
};
exports.default = createRender;