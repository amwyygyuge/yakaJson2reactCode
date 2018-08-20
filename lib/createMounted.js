const createMounted = (mounted = { run: {} }) => {
    const { run } = mounted
    if (run && typeof run === "object") {
        const funs = Object.keys(run).map(key => `this.${key}(${JSON.stringify(run[key])})`)
        return `
        runMountedFunc = () => {
            ${funs.join(";")}
        }
        `
    } else {
        return ""
    }

}
export default createMounted