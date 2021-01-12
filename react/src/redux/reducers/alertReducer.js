import {HIDE_ALERT, SHOW_ALERT} from "../actions/alertAction";

const initialState = {
    visible: false,
    type: '',
    message: '',
}

export const alertReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state, visible: state.visible = true, message: state.message = action.payload.message,
                type: state.type = action.payload.type
            }
        case HIDE_ALERT:
            return {...state, visible: state.visible = false}
        default:
            return state
    }
}