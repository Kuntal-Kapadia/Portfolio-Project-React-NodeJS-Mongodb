import * as ActionTypes from './ActionTypes';

export const Homepagecarousel = (state = {
        isLoading: true,
        errMess: null,
        homepagecarousel: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_HOMEPAGECAROUSELPAGE:
            return {...state, isLoading: false, errMess: null, homepagecarousel: action.payload};
        case ActionTypes.HOMEPAGECAROUSEL_LOADING:
            return {...state, isLoading: true, errMess: null, homepagecarousel: []};
        case ActionTypes.HOMEPAGECAROUSEL_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};