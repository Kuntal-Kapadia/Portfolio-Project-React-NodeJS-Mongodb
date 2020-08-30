import React from 'react';
import { Card, CardImg, CardBody, CardText,CardTitle, UncontrolledCarousel } from 'reactstrap';
import { Loading } from './LoadingComponent';


function RenderDirectoryItem({homepagecard}) {
    
    return (
        <Card>
            <CardImg width="100%" src={homepagecard.image} alt={homepagecard.name} />
            <CardBody>
                <h5><CardTitle>{homepagecard.name}</CardTitle></h5>
                <p><CardText>{homepagecard.description}</CardText></p>
            </CardBody>
        </Card>
    );
}

function Home(props){
   
    const directory = props.homepagecards.homepagecards.map(homepagecard => {
        return (
            <div key={homepagecard.id} className="col-lg-4 mb-4">
                <RenderDirectoryItem homepagecard={homepagecard} />
            </div>
        );
    });
    if (props.homepagecards.isLoading) {
        return (
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.homepagecards.errMess) {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col">
                        <h4>{props.homepagecards.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    } 
    return (
        <React.Fragment>
        <div className = "container-fluid">
            <div className="row"> 
                <div className="col p-0">
                    <UncontrolledCarousel items={props.homepagecarousel.homepagecarousel} indicators="false" controls="false"/> 
                </div>
            </div>        
        </div>
        <div className="container">
            <div className="row row-content">
                <div className="col-sm-12 text-center">
                    <h2>You get more. A LOT more</h2>
                    <p >iD Tech is the very best experience built around you—your interests, your skill level, your goals for the future. </p>
                        <p>Each program includes an exclusive package designed for your maximum inspiration and long-term success.</p>
                    <h3><strong>Your spring and summer tuition includes:</strong></h3>
                </div>
            </div>
            <div className="row ">
                {directory}
            </div>
        </div>
        </React.Fragment>
    );
}

export default Home;