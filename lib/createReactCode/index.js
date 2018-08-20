import createRender from './createRender';
const createReactCode = layout => {
    const { code, state, components } = createRender(layout)
    return { code, state, components }
}
export default createReactCode