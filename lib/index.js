import createFunctionTemplateCode from './createFunctionTemplateCode';
import createMountFunctionCode from './createMountFunctionCode';
import createReactCode from './createReactCode';
import createPage from './createPage';
import createConstructor from './createConstructor';
import createFormValueInit from './createFormValueInit';
import createMounted from './createMounted';
import prettier from 'prettier';

const readConfig = (config = {}) => {
    const { yakaConfig, mountFunctions, functionTemplates, name } = config
    // 生成render布局代码
    const { code, state, components } = createReactCode(yakaConfig)
    // 生成挂载函数代码
    const mountFunctionCode = createMountFunctionCode(name, mountFunctions)
    // 生成函数模板代码
    const functionTemplateCode = createFunctionTemplateCode(name, functionTemplates)
    //生成构造函数部分代码
    const constructorCode = createConstructor(yakaConfig, mountFunctionCode.exports)
    // 生成form初始化函数
    const formValueInit = createFormValueInit(yakaConfig)
    // 生成挂载后运行的函数
    const mounted = createMounted(yakaConfig)
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
        mounted
    )
    const demo = {
        getData: () => {
            return {
                reactCode: prettier.format(page),
                mountFunctionCode: prettier.format(mountFunctionCode.jsCode),
                functionTemplateCode: prettier.format(functionTemplateCode.jsCode),
            }
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