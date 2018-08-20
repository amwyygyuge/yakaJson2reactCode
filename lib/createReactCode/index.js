import createRender from './createRender';
const createReactCode = yakaConfig => {
    const { code, state, components } = createRender(yakaConfig)
    return { code, state, components }
}
export default createReactCode