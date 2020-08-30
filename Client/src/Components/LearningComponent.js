import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

function Learning(props){
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className = "col-12 m-0 p-0 description text-center">
                        <img className="online-header" src={props.learningpage.headerimg} alt="Heading" />
                        <div className="centered">
                            <h1>Online Learning</h1>
                            <h1>Virtual Tech Camps</h1>      
                            <p>Join over 50,000 students who are thriving with our full suite of online offerings, right now. Ages 7-19.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">  
            <div className="row row-content">
                <div className="col-sm-12 text-center">
                        <h2 >Online learning, right now</h2>
                        <p>Amidst school closures and social distancing, our online courses are the perfect way to sharpen your tech skills from the comfort of home. Choose from <strong>Online Private Lessons</strong> or <strong>Virtual Tech Camps</strong>. With the highest quality remote instruction on the planet, you’ll unlock your brilliance. </p> </div>
                <div className="col-sm-12 text-center">
                    <h5><strong>Start learning today, from anywhere in the world.</strong></h5>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                   <img className="img-fluid" src= {baseUrl + props.learningpage.virtualcampimg} alt="Virtual" />
                </div>
                <div className="col-12 col-md-6">
                    <h2>Virtual Tech Camps</h2>

                    <h3>$399 with code TOGETHER&nbsp;as long as social distancing&nbsp;is in effect (you save $100)</h3>

                    <p>Our spring and summer Virtual Tech Camps are the perfect, home-based option for students seeking the collaborative spirit of our on-campus programs. For many, learning alongside others is a vital social component. Let's keep your child advancing their skills, engaging&nbsp;with other students, and building confidence!<br />
                    <strong>For all skill levels, ages 7-19.</strong></p>

                    <ul>
                        <li><strong>Structured, weeklong sessions available now</strong>&nbsp; in multiple time zones (5 consecutive days, Monday-Friday)</li>
                        <li><strong>A balanced schedule</strong> including 2 hours of live instruction + 2 hours of self-paced project development per day</li>
                        <li><strong>The hottest curriculum</strong> in Python, Java, Minecraft, Roblox, AI, Unreal Engine, Adobe, 3D modeling, and more</li>
                        <li><strong>5 students max per instructor</strong>, blending personalized learning and time to socialize</li>
                        <li><strong>Personalized instructor feedback</strong> delivered via email so you can track your child's success</li>
                    </ul>
                    <Button color="success" size="lg"><Link className="learning-link" to="/online/virtual"><strong>View Courses &amp; Info</strong></Link></Button></div>

            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Online Private Lessons</h2>

                    <h3>When times are tough, we band together</h3>

                    <p><strong><em>Introducing our Free Sibling Policy</em></strong></p>

                    <p>Learn to code.&nbsp;Discover AI. Mod Minecraft. Create with Roblox. Develop a video game with Unreal.&nbsp;Your child can choose from one of our themes, or customize their own! With one-on-one attention from our iD Certified Instructors, they’ll build in-demand skills and create a completely personalized project—all from the comfort of home.&nbsp;<strong>For all skill levels, ages 7-19.</strong></p>

                    <ul>
                        <li><strong>60-minute sessions</strong> with ultimate scheduling flexibility</li>
                        <li><strong>Exciting curriculum</strong> tailored to your child's interests and skill level</li>
                        <li><strong>Project-based course bundles</strong> that promote fast advancement and increased confidence (choose from single lessons, 5-packs, or 12-packs)</li>
                        <li><strong>Post-session progress reports</strong> via email so you can track your child's success</li>
                        <li><strong>NEW!&nbsp;</strong>Your child can bring a sibling (or friend) to their sessions for free. When times are tough, we band together.</li>
                    </ul>

                    <Button color="success" size="lg"><Link className="learning-link" to="/online/private">Prices and courses</Link></Button>
                </div>
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src={baseUrl + props.learningpage.privatelessonimg} alt="Private" />
                </div>
            </div>
            <div className="row row-content background">
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src={baseUrl + props.learningpage.teacherimg} alt="Teachers" />
                </div>
                <div className="col-12 col-md-6">
                    <h2>Our 1,500 tech rockstar instructors are ready to teach. Right now.</h2>

                    <p>Passion for tech. Unmatched expertise. Personality that brings out the absolute best in your child. With 20+ years of experience, we know there's no replacement for the best teacher, in-person or online. That's why we hire elite, all-adult educators and recruit the same carefully-vetted talent sought by companies like <strong>Google, EA, Tesla, and Disney</strong>. <em>They hire who we hire.&nbsp;</em></p>

                    <ul>
                        <li><strong>We retain our finest staff</strong> from our worldwide programs to teach online.</li>
                        <li><strong>Stanford, Caltech, NYU: </strong>Our elite talent comes from the top universities. Very few can wear the “ iD Tech Certified” badge.</li>
                        <li><strong>Meticulous</strong> background and reference checks</li>
                        <li><strong>All-adult instructors</strong> (no high schoolers or CITs)</li>
                        <li><strong>Adherence </strong>to American Camp Association accredited guidelines</li>
                    </ul>
                </div>
            </div>

            
        </div>    
            </React.Fragment>

    )
}

export default Learning;