import * as ActionTypes from './ActionTypes';

export const Onlinepage = (state = {
        isLoading: true,
        errMess: null,
        onlinepage: {}
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ONLINEPAGE:
            return {...state, isLoading: false, errMess: null, onlinepage: action.payload};
        case ActionTypes.ONLINEPAGE_LOADING:
            return {...state, isLoading: true, errMess: null, onlinepage: {}};
        case ActionTypes.ONLINEPAGE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};