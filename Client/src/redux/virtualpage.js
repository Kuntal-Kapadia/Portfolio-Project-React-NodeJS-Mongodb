import * as ActionTypes from './ActionTypes';

export const Virtualpage = (state = {
        isLoading: true,
        errMess: null,
        virtualpage: {}
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_VIRTUALPAGE:
            return {...state, isLoading: false, errMess: null, virtualpage: action.payload};
        case ActionTypes.VIRTUALPAGE_LOADING:
            return {...state, isLoading: true, errMess: null, virtualpage: {}};
        case ActionTypes.VIRTUALPAGE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};