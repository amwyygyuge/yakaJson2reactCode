import createFunctionTemplateCode from './createFunctionTemplateCode';
import createMountFunctionCode from './createMountFunctionCode';
import createReactCode from './createReactCode';
import createPage from './createPage';
import createConstructor from './createConstructor';
import createFormValueInit from './createFormValueInit';
import createMounted from './createMounted';
// import prettier from 'prettier';

const readConfig = (config = {}) => {
    console.log(config);
    const { yakaConfig, mountFunctions, functionTemplates, name } = config
    const { layout, init, mounted } = yakaConfig
    // 生成render布局代码
    const { code, state, components } = createReactCode(layout)
    // 生成挂载函数代码
    const mountFunctionCode = createMountFunctionCode(name, mountFunctions)
    // 生成函数模板代码
    const functionTemplateCode = createFunctionTemplateCode(name, functionTemplates)
    //生成构造函数部分代码
    const constructorCode = createConstructor(init, mountFunctionCode.exports)
    // 生成form初始化函数
    const formValueInit = createFormValueInit(init)
    // 生成挂载后运行的函数
    const mountedCode = createMounted(mounted)
    // 组装页面
    const page = createPage(
        name,
        code,
        components,
        state,
        mountFunctionCode.importCode,
        functionTemplateCode.importCode,
        constructorCode,
        formValueInit,
        mountedCode
    )
    const demo = {
        getData: () => {
            // return {
            //     reactCode: prettier.format(page),
            //     mountFunctionCode: prettier.format(mountFunctionCode.jsCode),
            //     functionTemplateCode: prettier.format(functionTemplateCode.jsCode),
            // }
            return {
                reactCode: page,
                mountFunctionCode: mountFunctionCode.jsCode,
                functionTemplateCode: functionTemplateCode.jsCode,
            }
        },
        getFiles: () => {
            const files = []
            if (page) {
                files.push({
                    name: `${name}.jsx`,
                    code: page
                })
            }
            if (functionTemplateCode.exports.length) {
                files.push({
                    name: `${name}._functionTemplate.js`,
                    code: functionTemplateCode.jsCode
                })
            }
            if (mountFunctionCode.exports.length) {
                files.push({
                    name: `${name}._mountFunction.js`,
                    code: mountFunctionCode.jsCode
                })
            }
            return files
        },
        download: () => {
            console.log("test");
        },
        createZip: () => {
            console.log("test");

        }
    }

    return demo
}



export default readConfig