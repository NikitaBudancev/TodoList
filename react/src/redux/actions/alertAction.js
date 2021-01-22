export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'

export const showAlert = (type, message) => {
    return {
        type: SHOW_ALERT,
        payload: {type, message}
    }
}
export const actionHideAlert = () => {
    return {
        type: HIDE_ALERT,
    }
}