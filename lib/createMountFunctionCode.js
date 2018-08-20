const createMountFunctionCode = (name = "name", mountFunction = {}) => {
    let filed = ""
    const keys = Object.keys(mountFunction)
    keys.forEach(key => {
        const func = `const ${key} = ${mountFunction[key]}\n`
        filed += func
    })
    let importCode = ""
    if (keys.length) {
        importCode = `import { ${keys.join(', ')} } from '${name}_mountFunction.js';`
    }
    return {
        jsCode: `
        ${filed}
        export { ${keys.join(', ')} }
        `,
        exports: keys,
        importCode
    }
}
export default createMountFunctionCode