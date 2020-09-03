import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


//HOMEPAGECARDS
export const fetchHomepagecards = () => dispatch => {
    dispatch(homepagecardsLoading());

    return fetch(baseUrl + 'homepagecards')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
        }
    )
    .then(response => response.json())
    .then(homepagecards => dispatch(addHomepagecards(homepagecards)));
};

export const homepagecardsLoading = () => ({
    type: ActionTypes.HOMEPAGECARDS_LOADING
});

export const homepagecardsFailed = errMess => ({
    type: ActionTypes.HOMEPAGECARDS_FAILED,
    payload: errMess
});

export const addHomepagecards = homepagecards => ({
    type: ActionTypes.ADD_HOMEPAGECARDS,
    payload: homepagecards
});

//HOMEPAGECAROUSEL
export const fetchHomepagecarousel = () => dispatch => {
    dispatch(homepagecarouselLoading());

    return fetch(baseUrl + 'homepagecarousel')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
     }
    )
    .then(response => response.json())
    .then(homepagecarousel => dispatch(addHomepagecarousel(homepagecarousel)));
};

export const homepagecarouselLoading = () => ({
    type: ActionTypes.HOMEPAGECAROUSEL_LOADING
});

export const homepagecarouselFailed = errMess => ({
    type: ActionTypes.HOMEPAGECAROUSEL_FAILED,
    payload: errMess
});

export const addHomepagecarousel = homepagecarousel => ({
    type: ActionTypes.ADD_HOMEPAGECAROUSELPAGE,
    payload: homepagecarousel
});

//LEARNING PAGE
export const fetchLearningpage = () => dispatch => {
    dispatch(learningpageLoading());

    return fetch(baseUrl + 'learningpage')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
        }
    )
    .then(response => response.json())
    .then(learningpage => dispatch(addLearningpage(learningpage)));
};

export const learningpageLoading = () => ({
    type: ActionTypes.LEARNINGPAGE_LOADING
});

export const learningpageFailed = errMess => ({
    type: ActionTypes.LEARNINGPAGE_FAILED,
    payload: errMess
});

export const addLearningpage = learningpage => ({
    type: ActionTypes.ADD_LEARNINGPAGE,
    payload: learningpage
});

//ONLINE PAGE
export const fetchOnlinepage = () => dispatch => {
    dispatch(onlinepageLoading());

    return fetch(baseUrl + 'onlinepage')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
        }
    )
    .then(response => response.json())
    .then(onlinepage => dispatch(addOnlinepage(onlinepage)));
};

export const onlinepageLoading = () => ({
    type: ActionTypes.ONLINEPAGE_LOADING
});

export const onlinepageFailed = errMess => ({
    type: ActionTypes.ONLINEPAGE_FAILED,
    payload: errMess
});

export const addOnlinepage = onlinepage => ({
    type: ActionTypes.ADD_ONLINEPAGE,
    payload: onlinepage
});

//VIRTUALPAGE
export const fetchVirtualpage = () => dispatch => {
    dispatch(virtualpageLoading());

    return fetch(baseUrl + 'virtualpage')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
        }
    )
    .then(response => response.json())
    .then(virtualpage => dispatch(addVirtualpage(virtualpage)));
};

export const virtualpageLoading = () => ({
    type: ActionTypes.VIRTUALPAGE_LOADING
});

export const virtualpageFailed = errMess => ({
    type: ActionTypes.VIRTUALPAGE_FAILED,
    payload: errMess
});

export const addVirtualpage = virtualpage => ({
    type: ActionTypes.ADD_VIRTUALPAGE,
    payload: virtualpage
});


//WHYIDPAGE
export const fetchWhyidpage = () => dispatch => {
    dispatch(whyidpageLoading());

    return fetch(baseUrl + 'whyidpage')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
        }
    )
    .then(response => response.json())
    .then(whyidpage => dispatch(addWhyidpage(whyidpage)));
};

export const whyidpageLoading = () => ({
    type: ActionTypes.WHYIDPAGE_LOADING
});

export const whyidpageFailed = errMess => ({
    type: ActionTypes.WHYIDPAGE_FAILED,
    payload: errMess
});

export const addWhyidpage = whyidpage => ({
    type: ActionTypes.ADD_WHYIDPAGE,
    payload: whyidpage
});


//REGISTERPAGE
export const fetchRegisterpage = () => dispatch => {
    dispatch(registerpageLoading());

    return fetch(baseUrl + 'registerpage')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
        }
    )
    .then(response => response.json())
    .then(registerpage => dispatch(addRegisterpage(registerpage)));
};

export const registerpageLoading = () => ({
    type: ActionTypes.REGISTERPAGE_LOADING
});

export const registerpageFailed = errMess => ({
    type: ActionTypes.REGISTERPAGE_FAILED,
    payload: errMess
});

export const addRegisterpage = registerpage => ({
    type: ActionTypes.ADD_REGISTERPAGE,
    payload: registerpage
});

//COURSESPAGE
export const fetchCoursespage = () => dispatch => {
    dispatch(coursespageLoading());

    return fetch(baseUrl + 'coursespage')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
        }
    )
    .then(response => response.json())
    .then(coursespage => dispatch(addCoursespage(coursespage)));
};

export const coursespageLoading = () => ({
    type: ActionTypes.COURSESPAGE_LOADING
});

export const coursespageFailed = errMess => ({
    type: ActionTypes.COURSESPAGE_FAILED,
    payload: errMess
});

export const addCoursespage = coursespage => ({
    type: ActionTypes.ADD_COURSESPAGE,
    payload: coursespage
});

//COURSESPAGE - SIDEBAR
export const fetchCoursespagesidebar = () => dispatch => {
    dispatch(coursespagesidebarLoading());

    return fetch(baseUrl + 'coursespagesidebar')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
        }
    )
    .then(response => response.json())
    .then(coursespagesidebar => dispatch(addCoursespagesidebar(coursespagesidebar)));
};

export const coursespagesidebarLoading = () => ({
    type: ActionTypes.COURSESPAGESIDEBAR_LOADING
});

export const coursespagesidebarFailed = errMess => ({
    type: ActionTypes.COURSESPAGESIDEBAR_FAILED,
    payload: errMess
});

export const addCoursespagesidebar = coursespagesidebar => ({
    type: ActionTypes.ADD_COURSESPAGESIDEBAR,
    payload: coursespagesidebar
});

//COURSESPAGE - SEARCHRESULTS
export const fetchCoursespagesearchresults = () => dispatch => {
    dispatch(coursespagesearchresultsLoading());

    return fetch(baseUrl + 'coursespagesearchresults')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
        }
    )
    .then(response => response.json())
    .then(coursespagesearchresults => dispatch(addCoursespagesearchresults(coursespagesearchresults)));
};

export const coursespagesearchresultsLoading = () => ({
    type: ActionTypes.COURSESPAGESEARCHRESULTS_LOADING
});

export const coursespagesearchresultsFailed = errMess => ({
    type: ActionTypes.COURSESPAGESEARCHRESULTS_FAILED,
    payload: errMess
});

export const addCoursespagesearchresults = coursespagesearchresults => ({
    type: ActionTypes.ADD_COURSESPAGESEARCHRESULTS,
    payload: coursespagesearchresults
});

//ONLINEPAGECARDS
export const fetchOnlinepagecards = () => dispatch => {
    dispatch(onlinepagecardsLoading());

    return fetch(baseUrl + 'onlinepagecards')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMess = new Error(error.message);
        throw errMess;
        }
    )
    .then(response => response.json())
    .then(onlinepagecards => dispatch(addOnlinepagecards(onlinepagecards)));
};

export const onlinepagecardsLoading = () => ({
    type: ActionTypes.ONLINEPAGECARDS_LOADING
});

export const onlinepagecardsFailed = errMess => ({
    type: ActionTypes.ONLINEPAGECARDS_FAILED,
    payload: errMess
});

export const addOnlinepagecards = onlinepagecards => ({
    type: ActionTypes.ADD_ONLINEPAGECARDS,
    payload: onlinepagecards
});

//POST REGISTRATION
export const addRegistration = registration => ({
    type: ActionTypes.ADD_REGISTRATION,
    payload: registration
});

export const postRegistration = (firstname, lastname, username, password) => dispatch => {
    
    const newRegistration = {
        firstname : firstname,
        lastname : lastname,
        username:username,
        password:password
    };
        // newRegistration.date = new Date().toISOString();
     
        return fetch(baseUrl + 'users/signup', {
            method: "POST",
            body: JSON.stringify(newRegistration),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => 
            {
                dispatch(addRegistration(response))
            })
        .catch(error => {
            console.log('post registration', error.message);
            alert('Your registration could not be completed\nError: ' + error.message);
        });
};


//LOGIN
export const requestLogin = creds => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = response => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = message => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = creds => dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));

            // Dispatch the success action
            dispatch(fetchFavorites());
            dispatch(receiveLogin(response));
        } else {
            const error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

export const loginfbUser = (access_token, creds) => dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
      dispatch(requestLogin(creds))
    
    console.log("In loginfbuser")
    // alert(access_token)
    console.log(access_token)
    return fetch(baseUrl + 'users/facebook/token', {
        method: 'GET',
        headers: { 
            "access_token" : access_token
        },
    })
    .then(response => {
            if (response.ok) {
                console.log(response)
                return response;
            } else {
                console.log(response)
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => {
        console.log(response);
        if (response.success) {
            // If login was successful, set the token in local storage
            console.log("SUCCESS")
            console.log(response.token);
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify({username:response.username, password:response.username}));
            console.log("In Loginuser")
            console.log(localStorage)
            // Dispatch the success action
            dispatch(fetchFavorites());
            dispatch(receiveLogin(response));
        } else {
            const error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};


export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout())
}

export const postFavorite = coursespagesearchresultId => dispatch => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'favorites/' + coursespagesearchresultId, {
        method: "POST",
        headers: {
          "Authorization": bearer
        },
        credentials: "same-origin"
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(favorites => {
        console.log('Favorite Added', favorites);
        dispatch(addFavorites(favorites));
    })
    .catch(error => dispatch(favoritesFailed(error.message)));
}

export const deleteFavorite = coursespagesearchresultId => dispatch => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'favorites/' + coursespagesearchresultId, {
        method: "DELETE",
        headers: {
            'Authorization': bearer
        },
        credentials: "same-origin"
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(favorites => {
        console.log('Favorite Deleted', favorites);
        dispatch(addFavorites(favorites));
    })
    .catch(error => dispatch(favoritesFailed(error.message)));
};

export const fetchFavorites = () => dispatch => {
    dispatch(favoritesLoading());

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'favorites', {
        headers: {
            'Authorization': bearer
        },
    })
    .then(response => {
            if (response.ok) {
                console.log(response)
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(favorites => dispatch(addFavorites(favorites)))
    .catch(error => dispatch(favoritesFailed(error.message)));
}

export const favoritesLoading = () => ({
    type: ActionTypes.FAVORITES_LOADING
});

export const favoritesFailed = errMess => ({
    type: ActionTypes.FAVORITES_FAILED,
    payload: errMess
});

export const addFavorites = favorites => ({
    type: ActionTypes.ADD_FAVORITES,
    payload: favorites
});

export const fetchPartners = () => (dispatch) => {  
    dispatch(partnersLoading());
    
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'partners', {
        headers: {
            'Authorization': bearer
        },
    })
    .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(partners => dispatch(addPartners(partners)))
        .catch(error => dispatch(partnersFailed(error.message)));
};

export const partnersLoading = () => ({
    type: ActionTypes.PARTNERS_LOADING
});

export const partnersFailed = errMess => ({
    type: ActionTypes.PARTNERS_FAILED,
    payload: errMess
});

export const addPartners = partners => ({
    type: ActionTypes.ADD_PARTNERS,
    payload: partners
});