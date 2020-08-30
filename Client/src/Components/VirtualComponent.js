import React from 'react';
import { baseUrl } from '../shared/baseUrl';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';


function Virtual(props){
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className = "col-12 m-0 p-0 description text-center">
                        <img className="online-header" src={baseUrl + props.virtualpage.headerimg} alt="Heading" />
                        <div className="centered">
                            <h1>{props.virtualpage.headertxth}</h1>
                            <p>{props.virtualpage.headertxtp}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">  
            <div class="row row-content">
                <div class="col-sm-12 text-center">
                    <h2>Bring home the magic of camp with Virtual Tech Camps</h2>

                    <p><strong>Virtual Tech Camps</strong> are the perfect way to sharpen your STEM skills and bond with new friends, all online from the comfort of home. With the highest quality remote instruction on the planet, you’ll unlock your brilliance and create an exciting project.</p>
                    
                 </div>
                <div class="col-sm-12 text-center">
                    <h5><strong>Start learning today, from anywhere in the world.</strong></h5>
                </div>
            </div>
            <div class="row row-content justify-content-between">
                <div class="col-12 col-md-6">
                    <img src= {baseUrl + props.virtualpage.virtualcampimg} alt="Virtual" width="620" height="520" />
                
                </div>
                <div class="col-12 col-md-6">
                    <h2><b>Virtual Tech Camps</b></h2>
                    <h5>$399 with code TOGETHER&nbsp;as long as social distancing&nbsp;is in effect (you save $100)<br />
                    &nbsp;</h5>
                    <ul>
                        <li><strong>Structured, weeklong sessions available now</strong> in multiple time zones (5 consecutive days, Monday-Friday)</li>
                        <li><strong>The hottest curriculum</strong> in Python, Java, Minecraft, Roblox, Unity, Adobe, 3D modeling, and more</li>
                        <li><strong>5 students max per instructor</strong>, blending personalized learning and time to socialize with new friends</li>
                        <li><strong>A balanced schedule</strong> including 2 hours of live instruction and peer collaboration&nbsp;+ 2 hours of self-paced project development per day</li>
                        <li><strong>All the magic of camp&nbsp;</strong>including games, challenges, and legendary iD traditions you can't find anywhere else</li>
                    </ul>
                    <br></br>
                <Button  color="success" size="lg"><Link className="learning-link" to="/online/virtual"><strong>Prices and courses</strong></Link></Button>
                </div>
            </div>
        </div>    
            

            </React.Fragment>
        )
}

export default Virtual;