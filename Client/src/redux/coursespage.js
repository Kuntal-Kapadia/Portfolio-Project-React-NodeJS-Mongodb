import * as ActionTypes from './ActionTypes';

export const Coursespage = (state = {
        isLoading: true,
        errMess: null,
        coursespage: {}
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COURSESPAGE:
            return {...state, isLoading: false, errMess: null, coursespage: action.payload};
        case ActionTypes.COURSESPAGE_LOADING:
            return {...state, isLoading: true, errMess: null, coursespage: {}};
        case ActionTypes.COURSESPAGE_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};