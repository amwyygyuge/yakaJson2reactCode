const createFormValueInit = yakaConfig => {
    const { init: { formValue } } = yakaConfig
    if (formValue && typeof formValue === "object") {
        return `
        initFormValue = () => {
            const { setFieldsValue } = this.props.form
            setFieldsValue(${JSON.stringify(formValue)})
        }
        `
    } else {
        return false
    }

}
export default createFormValueInit