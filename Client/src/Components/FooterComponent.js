import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className ="container-fluid">       
                <div className ="row row-separator">
                    <div className="col text-center">
                        <a role="button" className="btn btn-link" href="tel:1-888-709-8324"><i className="fa fa-phone"></i>  1-888-709-8324</a>
                    </div>
                    <div className="col text-center">    
                        <a role="button" className="btn btn-link" href="hello@iDTech.com"><i className="fa fa-envelope-o"></i>  hello@iDTech.com</a>
                    </div>  
                    <div className="col text-center">    
                        <a role="button" className="btn btn-link" href="hello@iDTech.com"><i className="fa fa-envelope-o"></i>  Subscribe to our newsletter</a>
                    </div>            
                </div> 
            </div> 
            <div className ="container-fluid">                             
                <div className="row align-items-center justify-contents-center"> 
                <div className="col col-sm-2 offset-1">
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/whyID'>Why ID</Link></li>
                            <li><Link to='/online'>Online</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                        </ul>
                    </div>                    
                    <div className="col-6 justify-contents-end align-items-end">
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/idtech/"><i className="fa fa-instagram"></i></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/computercamps"><i className="fa fa-facebook-square"></i></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://www.twitter.com/idtechcamps"><i className="fa fa-twitter"></i></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCxfgxJx4I7krS0mykkN-A9Q"><i className="fa fa-youtube"></i></a>{' '}
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/company/the-confident-communicator/"><i className="fa fa-linkedin-square"></i></a>
                    </div>
                    <div className="col-3">
                        <Link to='/home'><img src="/assets/images/idlogo.png" alt="ID"/></Link>
                    </div>
                </div>
                
                <div className = "row"> 
                    <div className = "col text-center">
                        <a role="button" className="btn btn-link copy-right" href="/"><i className="fa fa-copyright"></i>  <strong>ID Tech</strong></a>
                    </div>
                </div>
            </div>   
            
            
        </footer>
    )
}

export default Footer;