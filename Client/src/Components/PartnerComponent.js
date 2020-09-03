import React from 'react';
import { Button, Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
// import { Fade, Stagger } from 'react-animation-components';


function PartnerList(props){

    const partners = props.partners.partners.map(partner => {
        return (
            // <Fade key={partner.id}>
            <Media tag ="li">
                    <RenderPartner partner={partner} />
            </Media>
            // </Fade>
        );
        });

        if (props.partners.isLoading) {
            return (             
                <Loading />
            );
        }
        if (props.partners.errMess) {
            return (
                <div className="col">
                    <h4>{props.partners.errMess}</h4>
                </div>
            );
        } 
        return(
            <div className="col mt-4">
                <Media list>
                    {/* <Stagger in> */}
                        {partners}
                    {/* </Stagger> */}
                </Media>
            </div>
        )
}

function RenderPartner({partner}){

    if(partner){
        return(
            <React.Fragment>
                <Media tag="list">
                    <Media object src={baseUrl + partner.image} alt={partner.name}  width="150"/>
                    <Media>
                        <Media body className="ml-5 mb-4">
                            <Media heading>
                                {partner.name}
                            </Media>
                            {partner.description}
                            
                        </Media>
                    </Media>    
                </Media>
                {/* <Button color = "info">DELETE</Button> */}
            </React.Fragment>
        );
    }
    else {
       return <div />;
    }

}

function Partners(props) {
    console.log(props);
    return (
        <div className="container">
                    
            <div className="row row-separator">
            <div className="col-12">
                <h3>PARTNER MANAGEMENT</h3>
                <div className="col-12 row-separator">
                <Button color="success">Add a Partner </Button>  
                </div> 
                
            </div>    
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col mt-4">
                        <PartnerList partners={props.partners}/>
                </div>
            </div>
        </div>
    );
}

export default Partners;