/**
 * 
 * @param {*} renderCode 
 * @param {*} components 
 * @param {*} state 
 * @description 拼装页面
 */

const createPgae = (
  name,
  renderCode,
  components,
  state,
  mountFunctions,
  functionTemplates,
  constructorCode,
  formValueInit,
  mounted
) => {

  const componentsCode = components.join(', ')
  const stateCode = state.join(', ')
  
  const template = `
    import React, { Component } from 'react'
    import { ${componentsCode} } from 'igroot'
    ${mountFunctions}
    ${functionTemplates}
    class ${name} extends Component {

      ${constructorCode}

      componentDidMount () {
        ${formValueInit ? " this.initFormValue()" : ""}
        ${mounted ? " this.runMountedFunc()" : ""}
      }

      ${formValueInit ? formValueInit : ""}

      ${mounted ? mounted : ""}

      render () {
        const { ${stateCode} } = this.state
        return ${renderCode}
      }
    }

    export default ${name}
    `
  return template
}

export default createPgae
