const createConstructor = (yakaConfig, mountFunctions = []) => {
    const { init: { state } } = yakaConfig
    let stateCode = "{}"
    let mountFunctionCode = ""
    if (state && typeof state === "object") {
        stateCode = JSON.stringify(state)
    }
    if (mountFunctions.length) {
        mountFunctions.forEach(item => {
            mountFunctionCode += `this.${item} = ${item}.bind(this);`
        })
    }
    const code = `
    constructor(){
        super()
        this.state = ${stateCode}
        ${mountFunctionCode}
      }
    `
    return code
}

export default createConstructor