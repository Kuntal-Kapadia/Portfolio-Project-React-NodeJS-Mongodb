import React from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Card, CardImg, CardBody, CardText,CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderDirectoryItem({onlinepagecard}) {
    
    return (
        <Card>
            <CardImg width="100%" src={baseUrl+onlinepagecard.image} alt={onlinepagecard.name} />
            <CardBody>
                <h5><CardTitle>{onlinepagecard.name}</CardTitle></h5>
                <p><CardText>{onlinepagecard.description}</CardText></p>
            </CardBody>
        </Card>
    );
}

function RenderOnlinepagecards(props){

    const directory = props.onlinepagecards.onlinepagecards.map(onlinepagecard => {
        return (
            <div key={onlinepagecard.id} className="col-lg-4 mb-4">
                <RenderDirectoryItem onlinepagecard={onlinepagecard} />
            </div>
        );
    });
    if (props.onlinepagecards.isLoading) {
        return (
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.onlinepagecards.errMess) {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col">
                        <h4>{props.onlinepagecards.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    } 
    return (
        <div className="row">
            {directory}
        </div>)
}

function Online(props){
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className = "col-12 m-0 p-0 description text-center">
                        <img className="online-header" src={baseUrl + props.onlinepage.headerimg} alt="Heading" />
                        <div className="centered">
                            <h1>{props.onlinepage.headertxth}</h1>
                            <p>{props.onlinepage.headertxtp}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">  
                <div className="row row-online">
                    <div className="col-sm-12 text-center">
                            <h2 >Online Private Lesson</h2>
                            <p>Learn to code. Discover AI. Mod Minecraft. Create with Roblox. Develop a video game with Unreal. Your child can choose from one of our themes, or customize their own! With 1-on-1 attention from our iD Certified Instructors, they’ll build in-demand skills and create a completely personalized project—all from the comfort of home. <strong>For all skill levels, ages 7-19.</strong></p> 
                    </div>
                    <div className="col-sm-12 text-center">
                        <h5><strong>Start learning today, from anywhere in the world.</strong></h5>
                    </div>
                </div>
                <div className="row row-content align-items-start">
                    <div className="col-12 col-md-6">
                        <img src={baseUrl + props.onlinepage.privatelessonimg} alt="pvtlesson" width="600" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>Program details</h2>

                        <p>
                        <strong>Your child can bring a sibling (or friend) to their sessions for free. </strong>It's like saving 50%. When times are tough, we band together.</p>

                        <ul>
                            <li>
                            <p><strong>60-minute sessions</strong> with ultimate scheduling flexibility</p>
                            </li>
                            <li>
                            <p><strong>Exciting curriculum</strong> tailored to your child's interests and skill level</p>
                            </li>
                            <li>
                            <p><strong>Project-based course bundles </strong>that promote fast advancement and increased confidence (choose from single lessons, 5-packs, or 12-packs)</p>
                            </li>
                            <li>
                            <p><strong>Post-session progress reports</strong> via email so you can track your child's success</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div> 

            <div className="container">
                <div className="row row-content">
                        <div className="col-sm-12 text-center">
                            <h2>New 5-packs for Spring 2020</h2>
                            <p >Choose an awesome project-based course. Match with the coolest instructors on the planet. Build something monumental!&nbsp;When you purchase five 60-minute lessons, you'll save 10% off our individual lesson price.</p>
                        </div>
                </div>
                <div class="row row-content">    
                    <RenderOnlinepagecards onlinepagecards={props.onlinepagecards}/>
                </div>
                
            </div>
      
       
    </React.Fragment>    
    )
}

export default Online;