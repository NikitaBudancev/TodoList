import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionHideAlert} from "../redux/actions/todosAction";
import {CSSTransition} from 'react-transition-group'

const Alert = () => {
    const alertType = useSelector(state => state.todosReducer.type)
    const alertMessage = useSelector(state => state.todosReducer.message)
    const dispatch = useDispatch()
    const hideAlert = () => {
        dispatch(actionHideAlert())
    }

    setTimeout(hideAlert, 5000)

    return (

            <div className={`alert alert-${alertType} alert-dismissible fade show role="alert`}>
                <span>{alertMessage}</span>
                <button onClick={hideAlert} type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>


    );
};

export default Alert;