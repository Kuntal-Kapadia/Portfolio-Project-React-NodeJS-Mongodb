import * as ActionTypes from './ActionTypes';

export const Onlinepagecards = (state = {
        isLoading: true,
        errMess: null,
        onlinepagecards: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ONLINEPAGECARDS:
            return {...state, isLoading: false, errMess: null, onlinepagecards: action.payload};
        case ActionTypes.ONLINEPAGECARDS_LOADING:
            return {...state, isLoading: true, errMess: null, onlinepagecards: []};
        case ActionTypes.ONLINEPAGECARDS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};