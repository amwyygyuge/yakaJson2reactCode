const SYMBOL = ["*", "@", "$"]
const SYMBOL_STRING = SYMBOL.join("")
const REX = /^[A-Z]+$/
/**
 * @description props数据处理
 * @param {*} data 
 * @returns {object} { propsText , stateText}
 */
const filterData2Props = data => {
    const obj = {
        propsText: "",
        stateText: ""
    }
    if (typeof data === "object") {
        obj.propsText = `{${JSON.stringify(data)}}`
    }
    if (typeof data === "string") {
        const symbol = data[0]
        if (SYMBOL_STRING.includes(symbol)) {
            const length = data.length
            const str = data.slice(1, length)
            if (symbol === "*") {
                // 函数
                obj.propsText = `{this.${str}}`
            }
            if (symbol === "$") {
                // 变量 
                obj.propsText = `{${str}}`
                obj.stateText = str
            }
            if (symbol === "@") {
                // props
                obj.propsText = `{${str}}`
            }

        } else {
            obj.propsText = `"${data}"`
        }
    }
    if (typeof data === "boolean") {
        obj.propsText = `{${data}}`
    }
    if (typeof data === "number") {
        obj.propsText = `{${data}}`
    }
    return obj
}

/**
 * 
 * @param {*} data 
 * @description text数据处理
 * @returns {object} { text , stateText}
 */
const filterData2Text = data => {
    const obj = {
        text: "",
        stateText: ""
    }
    if (typeof data === "string") {
        const symbol = data[0]
        if (SYMBOL_STRING.includes(symbol)) {
            const length = data.length
            const str = data.slice(1, length)
            if (symbol === "$") {
                // 变量
                obj.text = `{${str}}`
                obj.stateText = str
            }
            if (symbol === "@") {
                // props
                obj.text = `{${str}}`
            }
        } else {
            obj.text = `${data}`
        }
    }
    if (typeof data === "number") {
        obj.text = `${data}`
    }
    return obj
}
/**
 * 
 * @param {*} props 
 * @description 读取props信息
 * @returns {object} { propsText,stateArray }
 */
const readProps = props => {
    if (!props) return { propsText: "", stateArray: [] }
    let code = ""
    const state = []
    Object.keys(props).forEach(key => {
        const obj = filterData2Props(props[key])
        let sub_code = ""
        if (typeof obj === "object") {
            const { propsText, stateText } = obj
            sub_code = `${key}=${propsText}`
            state.push(stateText)
        } else {
            sub_code = `${key}=${obj}`
        }
        code += sub_code
    })
    return { propsText: code, stateArray: state }
}
/**
 * 
 * @param {*} eles 
 * @returns {object} { code, state, componets }
 */
const ele2react = (eles) => {
    let code = ""
    let state = []
    let components = []
    eles.forEach(item => {
        let sub_code = ``
        const { ele, subs, text, props } = item
        if (REX.test(ele[0])) {
            if (!components.some(item => item === ele)) {
                components.push(ele)
            }
        }
        const { propsText, stateArray } = readProps(props)
        state = state.concat(stateArray)
        if (Array.isArray(subs)) {
            const subEle = ele2react(subs)
            sub_code = `<${ele} ${propsText}>${subEle.code}</${ele}>`
            state = state.concat(subEle.state)
            components = components.concat(subEle.components)
        } else {
            if (text) {
                //有文本内容情况
                const textCode = filterData2Text(text)
                state.push(textCode.stateText)
                sub_code = `<${ele} ${propsText}>${textCode.text}</${ele}>`
            } else {
                // 处理无文本内容情况
                sub_code = `<${ele} ${propsText}/>`
            }
        }
        code += sub_code
    });
    // 返回数据的处理
    state = state.filter(item => item).map(item => item.split(".")[0])
    return { code, state, components }
}
/**
 * 
 * @param {*} yakaConfig
 * @todo props收集
 * @returns {string} code render的代码
 * @returns {Array} state 收集的state
 * @returns {Array} components 收集的所使用组件
 */
const createRender = yakaConfig => {
    const { layout } = yakaConfig
    const { code, state, components } = ele2react(layout)
    return { code: `<div>${code}</div>`, state, components }

}
export default createRender