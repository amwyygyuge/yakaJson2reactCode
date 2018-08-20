const createFunctionTemplateCode = (name="name", functionTemplate = {}) => {
    let filed = ""
    const keys = Object.keys(functionTemplate)
    keys.forEach(key => {
        const func = `const ${key} = ${functionTemplate[key]}\n`
        filed += func
    })
    let importCode = ""
    if (keys.length) {
        importCode = `import { ${keys.join(', ')} } from '${name}_functionTemplate.js';`
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

export default createFunctionTemplateCode