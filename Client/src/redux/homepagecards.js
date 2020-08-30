import * as ActionTypes from './ActionTypes';

export const Homepagecards = (state = {
        isLoading: true,
        errMess: null,
        homepagecards: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_HOMEPAGECARDS:
            return {...state, isLoading: false, errMess: null, homepagecards: action.payload};
        case ActionTypes.HOMEPAGECARDS_LOADING:
            return {...state, isLoading: true, errMess: null, homepagecards: []};
        case ActionTypes.HOMEPAGECARDS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};