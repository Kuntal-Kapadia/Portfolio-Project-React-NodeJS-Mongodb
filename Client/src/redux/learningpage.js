import * as ActionTypes from './ActionTypes';

export const Learningpage = (state = {
        isLoading: true,
        errMess: null,
        learningpage: {}
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEARNINGPAGE:
            return {...state, isLoading: false, errMess: null, learningpage: action.payload};
        case ActionTypes.LEARNINGPAGE_LOADING:
            return {...state, isLoading: true, errMess: null, learningpage: {}};
        case ActionTypes.LEARNINGPAGE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};