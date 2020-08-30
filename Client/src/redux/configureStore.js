import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Homepagecards } from './homepagecards';
import { Homepagecarousel } from './homepagecarousel';
import { Learningpage } from './learningpage';
import { Onlinepage } from './onlinepage';
import { Onlinepagecards } from './onlinepagecards';
import { Virtualpage } from './virtualpage';
import { Whyidpage } from './whyidpage';
import { Registerpage } from './registerpage';
import { Coursespage } from './coursespage';
import { Coursespagesidebar } from './coursespagesidebar';
import { Coursespagesearchresults } from './coursespagesearchresults';
import { InitialRegistrationForm } from './forms';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            homepagecards: Homepagecards,
            homepagecarousel : Homepagecarousel,
            learningpage: Learningpage,
            onlinepage: Onlinepage,
            onlinepagecards: Onlinepagecards,
            virtualpage: Virtualpage,
            whyidpage: Whyidpage,
            registerpage:Registerpage, 
            coursespage:Coursespage, 
            coursespagesidebar:Coursespagesidebar, 
            coursespagesearchresults:Coursespagesearchresults, 
            ...createForms({
                registrationForm: InitialRegistrationForm 
            })
        }), applyMiddleware(thunk)
    );

    return store;
}