import * as ActionTypes from './ActionTypes';

export const Coursespagesearchresults = (state = {
        isLoading: true,
        errMess: null,
        coursespagesearchresults: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COURSESPAGESEARCHRESULTS:
            return {...state, isLoading: false, errMess: null, coursespagesearchresults: action.payload};
        case ActionTypes.COURSESPAGESEARCHRESULTS_LOADING:
            return {...state, isLoading: true, errMess: null, coursespagesearchresults: []};
        case ActionTypes.COURSESPAGESEARCHRESULTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};