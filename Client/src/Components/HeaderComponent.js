import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownToggle,DropdownMenu,DropdownItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink, Link, Redirect, setRedirect, withRouter} from 'react-router-dom';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isNavOpen: false,  
          isModalOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();
        

    }
   
    responseFacebook = (response) => {
        console.log(response);
        this.toggleModal();
        this.props.loginfbUser(response.accessToken,{username: response.name, password: "not required"});
        this.props.history.push("/home");
        }

    handleLogout() {
        this.props.logoutUser();
    }

    render(){
      
          const responseGoogle = (response) => {
            console.log(response);
            alert(response.profileObj.email);
            alert(response.profileObj.familyName);
            alert(response.profileObj.imageUrl)
            
          }
        return(
            <React.Fragment>
                <Navbar fixed="top" expand="md">
                    <div className="container-fluid">
                        <NavbarBrand href="/home" ><img src="/assets/images/id-logo.png" alt="ID Tech Logo"/></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/whyID">Why ID?</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Online
                                        </DropdownToggle>
                                        <DropdownMenu  right>
                                            <DropdownItem>
                                                <Link className="dropdown-item" to='/online/learning'><strong>Learning and Camps</strong></Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link className="dropdown-item" to='/online/virtual'><strong>Virtual Tech Camps</strong></Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link className="dropdown-item" to='/online/private'><strong>Private Leassons</strong></Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Courses
                                        </DropdownToggle>
                                        <DropdownMenu  right>
                                            <DropdownItem>
                                                <Link className="dropdown-item" to='/courses'><strong>CODING</strong></Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link className="dropdown-item" to='/courses'><strong>GAME DEV</strong></Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link className="dropdown-item" to='/courses'><strong>ROBOTICS</strong></Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link className="dropdown-item" to='/courses'><strong>CREATIVE</strong></Link>
                                            </DropdownItem>
                                        </DropdownMenu>
                                </UncontrolledDropdown>
                                { this.props.auth.isAuthenticated ?
                                    <div> 
                                        <Button  type="submit" color="success">
                                            <span>{this.props.auth.user.username}</span>
                                            <Button color="transparent"  onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span>
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                            </Button>
                                        </Button>         
                                        <NavItem>
                                            <NavLink className="nav-link" to="/aboutus"><i className= "nav-link-list fa fa-list fa-lg" />  Partners List</NavLink>
                                        </NavItem>                     
                                        <NavItem>
                                            <NavLink className="nav-link" to="/favorites"><span className="nav-link-favorites fa fa-heart fa-lg"></span>  My Favorites</NavLink>
                                        </NavItem>
                                                              
                                    </div>
                                    :
                                    <div>
                                        <Button color="success" onClick={this.toggleModal}>
                                            <i className="fa fa-sign-in fa-lg" /> Login
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button> <span></span>
                                        <Button color="success"><Link className="register-button" to="/register">Register</Link></Button>

                                    </div>
                                    }
                               
                            </Nav>
                                
                            
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="modalFormat" toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody className="modalFormat">
                        <FacebookLogin
                                    appId="823721018162478"
                                    // autoLoad={true}
                                    fields="name,email,picture"
                                    callback={this.responseFacebook}
                                    cssClass="formbutton btn-large btn-block facebook-btn"
                                    icon="fa-facebook-f mr-2"
                                    textButton="Sign Up with Facebook"
                                />
                                <GoogleLogin
                                clientId="271449462488-rgj32p6je2trachgcn2aidh08h2dt1as.apps.googleusercontent.com"
                                render={renderProps => (
                                <Button className= "formbutton btn-large btn-block google-btn " type="submit" color="primary" 
                                onClick={renderProps.onClick} disabled={renderProps.disabled}><i class="fa fa-google mr-2"></i>Sign Up with Google</Button>
                                )}
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                // cookiePolicy={'single_host_origin'}
                                />
                            
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>

                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                                <Button className= "formbutton btn-large btn-block" type="submit" value="submit" color="primary">Login </Button>
                                
                            </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default withRouter(Header);
 