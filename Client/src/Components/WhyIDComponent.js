import React from 'react';


function WhyID(props){
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className = "col-12 m-0 p-0 description text-center">
                        <img className="online-header" src={props.whyidpage.headerimg} alt="Heading" />
                        <div className="centered">
                            <h1>{props.whyidpage.headertxth}</h1>
                            <p>{props.whyidpage.headertxtp}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container row-content">
            <div class="row justify-content-end align-items-center">
                <div class="col-12 col-md-6 ">
                    <div class="content"><h2>When you want the best, it's iD Tech or nothing</h2>
                         <p>With&nbsp;<a href="https://www.idtech.com/about">over 20&nbsp;years of experience</a> and a track record of incredible student outcomes, iD Tech is an investment in your child's future.&nbsp;Whether they're 7, 19, or somewhere in between, we've perfected the system to guide them from total beginner&nbsp;to college-bound pro. Tuition for on-campus summer programs and <a href="/virtual">Virtual Tech Camps</a>&nbsp;includes unparalleled access to expert educators&nbsp;and exclusive tools for long-term success.&nbsp;<strong>It's a total package unlike any other.</strong></p>
                        </div>
                        
                    </div>
                <div class="col-12 col-md-6">
                    <div class="main-box mb-3">
                            <p><strong>"This program was absolutely amazing, and the staff was incredible. My son learned so much this week. Seeing how excited he was every day when I picked him up was very rewarding."</strong><br />
                            -Joseph B., NYIT</p>
    
                        <div class="background-box">
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
        <div class="container">  
            <div class="row row-content">
                <div class="col-md-6 justify-content-center">
                    <img className="img-fluid" src={props.whyidpage.img1} alt="First"/>
                </div>
                <div class="col-md-6">
                        <h3>Experience iD Tech, anywhere</h3>
                        <p>Prefer an at-home experience this spring or summer? Our online programs bring the collaborative spirit of camp right to your personal computer.</p>
                        <p>With our on-campus summer programs, you'll get inspired by iconic architecture, learn in our next-gen labs, and experience collegiate life in the dining halls.&nbsp;We’re the only summer tech program that’s&nbsp;trusted by over 150 of the top universities on the planet. From&nbsp;<a href="https://www.idtech.com/locations/new-york-summer-camps/nyu">NYU</a>&nbsp;and&nbsp;<a href="https://www.idtech.com/locations/pennsylvania-summer-camps/carnegie-mellon-university">CMU</a>, to&nbsp;<a href="https://www.idtech.com/locations/california-summer-camps/caltech">Caltech</a>&nbsp;and <a href="https://www.idtech.com/locations/international-summer-camps/university-of-cambridge">Cambridge</a>, our locations lineup is as impressive as it is convenient, with plenty of&nbsp;nearby options.</p>
                        <p><a class="www button no-transform" href="/locations">View online &amp; on-campus programs</a></p>
                </div>
            </div>
        </div>   
        <div class="container"> 
            <div class="row row-content ">
                <div class="col-md-6">
                    <h2>Tech rockstar instructors</h2>
                    <p>We recruit the  top talent from universities like Stanford, RIT, and Caltech to inspire our students. Thanks to our meticulous hiring practices, rigorous safety certifications, and in-person trainings, you can rest assured your child is in capable hands. In fact, after camp, our summer staffers often get hired by tech icons like Google, EA, and Disney.</p>
                </div>
                <div class="col-md-6">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src={props.whyidpage.video1} title="video"></iframe>
                    </div>
                </div>
            </div>
        </div>

            <div class="container">
                <div class="row row-content">
                    <div class="col-md-6">
                        <img className="img-fluid" src={props.whyidpage.img2} alt="Second"/>
                    </div>
                    <div class="col-md-6">
                        <h3>iD Small Class Guarantee™</h3>
                        <p>iD Tech isn't a classroom or a strip mall franchise. With us, your child will experience personalized learning in small classes⁠—<em>guaranteed</em>. Whatever their skill level, we'll deliver properly-paced, customized curriculum. There's no replacement for individual attention.</p>
                    </div>
                </div>
            </div>    
            <div class="container">
                <div class="row row-content ">
                    <div class="col-md-6">
                        <h2>Gamified learning for long-term success</h2>
                            <p>Experience The iD Tech Pathway™, our proprietary, gamified learning system! Your child will start at L1 and gain XP (experience points) for each completed summer or online course. They'll work hard and play hard to unlock a love of learning and prove mastery, ultimately earning the badge of L10.</p>
                    </div>
                    <div class="col-md-6">
                        <img className="img-fluid" src={props.whyidpage.img3} alt="Third"/>
                    </div>
                </div> 
            </div>
            
            <div class="container">
                <div class="row row-content ">
                    <div class="col-md-6">
                        <h3>Monthly online iD Master Classes&nbsp;($300 value)</h3>
                        <p>Once you enroll for a summer program or Virtual Tech Camps, your child gains exclusive access to our monthly online master classes. In these remote seminars, they'll gain valuable industry insights from tech luminaries. This material is <strong>100% exclusive</strong>, designed&nbsp;specially for our iD Tech community.</p>
                    </div>
                    <div class="col-md-6">
                     <img className="img-fluid" src={props.whyidpage.img4} alt="Forth"/>
                    </div>
                </div> 
            </div>
        </React.Fragment>
    )
}

export default WhyID;