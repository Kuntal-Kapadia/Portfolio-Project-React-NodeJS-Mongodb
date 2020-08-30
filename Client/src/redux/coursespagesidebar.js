import * as ActionTypes from './ActionTypes';

export const Coursespagesidebar = (state = {
        isLoading: true,
        errMess: null,
         coursespagesidebar:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COURSESPAGESIDEBAR:
            return {...state, isLoading: false, errMess: null, coursespagesidebar: action.payload};
        case ActionTypes.COURSESPAGESIDEBAR_LOADING:
            return {...state, isLoading: true, errMess: null, coursespagesidebar: []};        
        case ActionTypes.COURSESPAGESIDEBAR_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};