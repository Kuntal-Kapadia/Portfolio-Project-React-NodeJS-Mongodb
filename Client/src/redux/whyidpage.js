import * as ActionTypes from './ActionTypes';

export const Whyidpage = (state = {
        isLoading: true,
        errMess: null,
        whyidpage: {}
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_WHYIDPAGE:
            return {...state, isLoading: false, errMess: null, whyidpage: action.payload};
        case ActionTypes.WHYIDPAGE_LOADING:
            return {...state, isLoading: true, errMess: null, whyidpage: {}};
        case ActionTypes.WHYIDPAGE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};