import * as ActionTypes from './ActionTypes';

export const Registration = (state = { errMess: null, registration: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REGISTRATIONS:
            return {...state, errMess: null, registration: action.payload};

        case ActionTypes.REGISTRATIONS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_REGISTRATION:
            const registrationadd = action.payload;
            return {...state, registration: state.registration.concat(registrationadd)};

        default:
            return state;
    }
};