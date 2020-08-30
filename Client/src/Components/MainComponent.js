import React, { Component } from 'react';
import { actions } from 'react-redux-form';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import WhyID from './WhyIDComponent';
import Online from './OnlineComponent';
import Learning from './LearningComponent';
import Virtual from './VirtualComponent';
import Courses from './CoursesComponent';
import Register from './RegisterComponent';
import { postRegistration,fetchHomepagecards, fetchHomepagecarousel, fetchLearningpage, fetchOnlinepage, fetchVirtualpage, fetchWhyidpage, fetchRegisterpage, fetchCoursespage, fetchCoursespagesidebar, fetchCoursespagesearchresults, fetchOnlinepagecards } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        homepagecards: state.homepagecards,
        homepagecarousel : state.homepagecarousel,
        learningpage: state.learningpage,
        onlinepage: state.onlinepage,
        onlinepagecards: state.onlinepagecards,
        virtualpage: state.virtualpage,
        whyidpage: state.whyidpage,
        registerpage: state.registerpage,
        coursespage: state.coursespage,
        coursespagesidebar: state.coursespagesidebar,
        coursespagesearchresults: state.coursespagesearchresults

    };
};

const mapDispatchToProps = {
    fetchHomepagecards: () => (fetchHomepagecards()),
    fetchHomepagecarousel: ()=> (fetchHomepagecarousel()),
    fetchLearningpage: ()=> (fetchLearningpage()),
    fetchOnlinepage: ()=> (fetchOnlinepage()),
    fetchOnlinepagecards: () => (fetchOnlinepagecards()),
    fetchVirtualpage: ()=> (fetchVirtualpage()),
    fetchWhyidpage: ()=> (fetchWhyidpage()),
    fetchRegisterpage: ()=> (fetchRegisterpage()),
    fetchCoursespage: ()=> (fetchCoursespage()),
    fetchCoursespagesidebar: ()=> (fetchCoursespagesidebar()),
    fetchCoursespagesearchresults: ()=> (fetchCoursespagesearchresults()),
    resetRegistrationForm: () => (actions.reset('registrationForm')),
    postRegistration: (firstname, lastname, username, password) => (postRegistration(firstname, lastname, username, password))
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchHomepagecards();
        this.props.fetchHomepagecarousel();    
        this.props.fetchLearningpage();
        this.props.fetchOnlinepage();   
        this.props.fetchOnlinepagecards();
        this.props.fetchVirtualpage();  
        this.props.fetchWhyidpage(); 
        this.props.fetchRegisterpage();
        this.props.fetchCoursespage();
        this.props.fetchCoursespagesidebar();
        this.props.fetchCoursespagesearchresults();
    }


    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' render={() => <Home homepagecards={this.props.homepagecards} homepagecarousel={this.props.homepagecarousel}/>}/> 
                    <Route exact path='/whyID' render={() => <WhyID whyidpage={this.props.whyidpage.whyidpage}/>} />
                    <Route exact path='/online/private' render={() => <Online onlinepage={this.props.onlinepage.onlinepage} onlinepagecards={this.props.onlinepagecards}/>} />
                    <Route exact path='/online/learning' render={() => <Learning learningpage={this.props.learningpage.learningpage} />} />
                    <Route exact path='/online/virtual' render={() => <Virtual virtualpage={this.props.virtualpage.virtualpage} />} />
                    <Route exact path='/courses' render={() => <Courses coursespage={this.props.coursespage.coursespage} sidebar={this.props.coursespagesidebar} searchresults={this.props.coursespagesearchresults}/>} />
                    <Route exact path='/register' render={() => <Register registerpage={this.props.registerpage.registerpage} resetRegistrationForm={this.props.resetRegistrationForm} postRegistration={this.props.postRegistration}/>} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));