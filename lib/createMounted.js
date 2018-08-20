const createMounted = yakaConfig => {
    const { mounted: { run } } = yakaConfig
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