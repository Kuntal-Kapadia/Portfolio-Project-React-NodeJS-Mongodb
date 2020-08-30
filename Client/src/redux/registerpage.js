import * as ActionTypes from './ActionTypes';

export const Registerpage = (state = {
        isLoading: true,
        errMess: null,
        registerpage: {}
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REGISTERPAGE:
            return {...state, isLoading: false, errMess: null, registerpage: action.payload};
        case ActionTypes.REGISTERPAGE_LOADING:
            return {...state, isLoading: true, errMess: null, registerpage: {}};
        case ActionTypes.REGISTERPAGE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};