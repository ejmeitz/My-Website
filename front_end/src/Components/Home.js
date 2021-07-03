import React, {Component} from 'react';
import {Card, Container} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-scroll';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faFacebook } from '@fortawesome/free-brands-svg-icons';


import Crash1 from "../resources/CRASH1.PNG";
import StPaul from "../resources/StPaul.jpg";
import AmeriCorps from "../resources/AmeriCorps.jpg";
import Plane from "../resources/Plane.jpg";
import Robot from "../resources/robot.jpg";
import beluga from "../resources/beluga.png";
import meCoverPhoto from "../resources/me_grad.png"


import '../index.css';

const HomeStyles = styled.div `

*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-family: 'Josefin Sans', sans-serif;
}

    .bg{
        display:grid;
        grid-template-columns:  55% 45%;
        margin: 60px auto auto auto;
        height: calc(100vh - 50px) ;
        justify-items:center;
        justify-content:center;
        width:95vw;
    }

    .welcome {
        max-width:50vw;
        grid-column: 1 / span 1;
        margin:auto;
        z-index: 2;
    }

    .welcome h5{
        font-size: 2.5em;
        font-weight:300;
        color:black;
        min-width:360px;
        margin-left:4vw;
    }

    .me {
        grid-column: 2 / span 1;

        height:90%;
        overflow:hidden;
        max-width:40vw;
        object-fit:scale-down;
        z-index: 2;
    }

    .readMore{
        position:absolute;
        text-align:center;
        color:rgb( 140, 194, 255);
        
        width: 150px;
        top:86vh;
        left: 50%;
        margin-left: -75px;

        z-index: 3;
        &:hover {
            color:rgb( 140, 194, 255);
            cursor:pointer
          }
    
        p{
            font-size:1.3em;
            color:rgb( 140, 194, 255);
        }
    }


.secondPage {
    padding-top:10px;
    padding-bottom: 10px;
    justify-content:center;

    display:grid;
    grid-template-columns: repeat(3,1fr);

    grid-auto-flow:row;
    grid-gap:30px;
    margin:auto;   
}

h2 {
font-weight:bold;
}

a{
    text-decoration:none;
    color: #457BD9;
}

.card-img-top {
    width: 100%;
    height: 15vw;
}
.card{
    width:30vw;
}
.card-text{
    padding: 0px 5px 0px 5px;
}
.card-title {
    padding: 10px 5px 3px 5px;
}

@media only screen and (max-width: 1500px) {
    .welcome{
        font-size: 0.8em;
    }
}

@media only screen and (max-width: 1350px) {
    .secondPage {
        padding-top:10px;
        padding-bottom: 10px;
        justify-content:center;
    
        display:grid;
        grid-template-columns: repeat(2,1fr);
    
        grid-auto-flow:row;
        grid-gap:15px;
        margin:auto;   
    }
    .card{
        width:40vw;
    }
    .card-img-top {
        width: 100%;
        height: 20vw;
    }
}



@media only screen and (max-width: 1200px) {

    .bg{
        display:grid;
        grid-template-columns: 1fr;
        grid-template-rows:1fr 1fr;
        margin: 60px 0px auto 0px;

        justify-items:center;
        justify-content:center;
        width:98vw;
    }

    .welcome {
        grid-column: 1 / span 1;
        grid-row: 2 / span 1;
        z-index: 2;

        margin: 10px auto auto auto;
        max-width:70vw;
    }
    
    .me {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
        max-width : 75vw;
        overflow:hidden;
        z-index: 2;
        margin:auto;

    }

    .secondPage {
        padding-top:10px;
        padding-bottom: 10px;
        justify-content:center;
    
        display:grid;
        grid-template-columns: auto;
    
        grid-auto-flow:row;
        grid-gap:20px;
  
    }
    .card{
        width:70vw;
        aspectRatio: 1/1;
    }
    .card-img-top {
        width: 100%;
        height: 30vw;
    }

}

@media only screen and (max-width: 875px) {
    .welcome h5{
        font-size: 2.1em;
    }
}
@media only screen and (max-width: 750px) {


    .welcome h5{
        margin:0px;
        min-width:1px;
        height:25vh;
        font-size: 1.8em;
    }

    .card{
        width:85vw;
        aspectRatio: 1/1;
    }
    .secondPage {
        width:85vw;
    }
    .card-img-top {
        width: 100%;
        height: 40vw;
    }
}
@media only screen and (max-width: 605px) {
    .welcome h5{
        margin:0px;
        min-width:1px;
        height:25vh;
        font-size: 1.7em;
    }

}
@media only screen and (max-width: 500px) {
    .welcome h5{
        margin:0px;
        min-width:1px;
        height:25vh;
        font-size: 1.55em;
    }
    .me {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;

        overflow:hidden;
        z-index: 2;
        margin:auto;

        width:300px;
    }
    .card{
        width:90vw;
    }
    .secondPage {
        width:90vw;
    }
    .readMore{
        top:82vh;
        p{
            font-size:1.1em;
        }
    }
}


@media only screen and (max-width: 450px)   {
    .me {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;

        overflow:hidden;
        z-index: 2;

        max-width:200px;
        max-width:80vw;
    }
    .welcome h5{
        margin:0px;
        min-width:1px;
        font-size: 1.15em;
    }
    .card{
        width:90vw;
    }
    .secondPage {
        padding-top:10px;
        padding-bottom: 10px;
        justify-content:center;
    
        display:grid;
        grid-template-columns: auto;
    
        grid-auto-flow:row;
        grid-gap:20px;
        width:90vw;
  
    }
    .card-img-top {
        width: 100%;
        height: 50vw;
    }
    .readMore{
        top:80vh;
    }

}

@media only screen and (max-width: 400px)   {

    .me {
        grid-row: 1 / span 1;

        overflow:hidden;
        z-index: 2;

        max-width:200px;
        max-width:80vw;
        margin:auto;
    }
    .welcome h5{
        margin:0px;
        min-width:1px;
        margin:auto
        font-size: 1.15em;
    }

    .readMore{
        top:80vh;
    }

}

@media only screen and (max-width: 330px) {
    .me {
        grid-row: 1 / span 1;

        overflow:hidden;
        z-index: 2;

        max-width:200px;
        max-height:50vh;
    }
    .welcome h5{
        margin:0px;
        min-width:1px;
        height:20vh;
        font-size: 1.15em;
    }
    .card{
        width:90vw;
    }
    .secondPage {
        padding-top:10px;
        padding-bottom: 10px;
        justify-content:center;
    
        display:grid;
        grid-template-columns: auto;
    
        grid-auto-flow:row;
        grid-gap:20px;
        width:90vw;
  
    }
    .card-img-top {
        width: 100%;
        height: 50vw;
    }
    .readMore{
        top:83vh;
    }

}



`;

export default class Home extends Component {




render(){
    return (
    <HomeStyles>
        <Link className = "readMore" activeClass="active" to = "secondPageAnchor" smooth={true} duration={650}>
            <p>Read More</p>
            <FontAwesomeIcon  icon = {faChevronDown} size = "4x" />
        </Link>
        <div className="bg">
        
            <div className = "welcome">
                    <h5>
                     Hi, I'm <strong>Ethan Meitz</strong>, and I'm a graduate student at Washington University in St. Louis pursuing a M.S. in <i>Mechanical Engineering</i>. 
                     I love creating art, playing drums, and tinkering. 
                     Check out my  <a href = "/projects/home">engineering projects</a>, <a href = "/art">artwork</a>  and some <a href = "/fun">fun animations</a>! 
                    </h5>
            </div> 
            <img className = "me"  src = {meCoverPhoto} alt = "Operating a saw at a Habitat for Humanity construction site"/>
        
            
        </div>
    
        <div id = "secondPageAnchor" style = {{height:"50px"}}>

        </div>
        <Container className = "secondPage">
                <Card className = "about" >
                    <Card.Img variant="top" src={StPaul} alt="Downtown St.Paul"/>
                    <Card.Body>
                        <Card.Title><strong>About Me</strong></Card.Title>
                        <Card.Text>
                            I grew up in St. Paul, Minnesota and currently attend Washington University in St. Louis. 
                            WashU has taught me how to solve a variety of problems in a focused and efficient manner. I can solve engineering specific problems like the forces in a truss network
                            but can also apply myself to solve abstract, new problems. For example, this website! I began this app not knowing
                            anything about full stack development, JavaScript, CSS, HTML or the dozen other packages used to create this site. I find every
                            new challenge fun and exciting, and I know the future holds plenty to push my limits.
                            
                        
                            Check out the <a href ="/projects">projects</a> page for school work or the <a href ="/art">art</a> and <a href ="/fun">other</a> section for fun, artsy designs and animations.
                        </Card.Text>
                    </Card.Body>
                </Card>   
                <Card className = "club dbf" >
                    <Card.Img  variant="top" src={Plane} alt = "Design Build Fly plane just before a test flight" />
                    <Card.Body>
                        <Card.Title><strong>Design/Build/Fly</strong></Card.Title>
                        <Card.Text>
                                DBF has offered me the opportunity to learn about building and operating aircraft. Each year DBF participates
                                in the AAIA Design/Build/Fly competition where participants follow a set of rules to build an airplane. During the 2019-2020 school year, 
                                the team built a banner-towing plane that could also carry "passengers." I was a member of the Manufacturing and Structures teams which
                                are responsible for the design and construction of the aircraft. I created a CAD model of the tail which included the vertical and horizontal stabilizers. The plane
                                made several successful test flights, but the competition was canceled due to COVID.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className = "exp" >
                    <Card.Img variant="top" src={AmeriCorps} alt="Me and my coworkers at the end of the summer"/>
                    <Card.Body>
                        <Card.Title><strong>AmeriCorps</strong></Card.Title>
                        <Card.Text>
                            I've always loved volunteering at Habitat for Humanity, and during the 2019 summer I had the chance to serve with AmeriCorps at Habitat for Humanity. Instead of
                            strictly building the homes, I was now responsible for teaching and keeping the volunteers safe. Every day was a new project and I learned so much about how to lead and teach a group
                            as well as the state of affordable housing in Minnesota. It was a great opportunity and I highly reccomend both <a href = "https://www.nationalservice.gov/programs/americorps" target = "_blank" rel="noopener noreferrer">AmeriCorps</a> and <a href="https://www.habitat.org/" target = "_blank" rel="noopener noreferrer">Habitat for Humanity</a>.    
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card  className = "club ieee" >
                    <Card.Img loading = "lazy"  variant="top" src={Robot} alt = "CAD model of the autonomous trash collector" />
                    <Card.Body>
                        <Card.Title><strong>IEEE</strong></Card.Title>
                        <Card.Text>
                                    The Washington University chapter of IEEE works with other clubs to design and build a product they request. For example, the Raas team at WashU asked
                                    IEEE to build them dandiya, batons that light up synchronously, for Diwali. The IEEE team also participated in the 2020 IEEE robotics competition to 
                                    produce a fully autonomous robot to pick up trash. In both of these projects, I was responsible for the CAD and manufacturing. 
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className = "club crash" >
                    <Card.Img loading = "lazy"  className="d-block w-100" variant="top" src={Crash1} alt = "CRASH playing on the street" />
                    <Card.Body>
                        <Card.Title><strong>CRASH</strong>  <a 
                            href = "https://www.facebook.com/wustlCRASH/"
                            className = "fb social" 
                            target = "_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon = {faFacebook} size = "1x" />
                            </a>
                        </Card.Title>

                        <Card.Text>
                               CRASH is a service-oriented improvisational drumming group that uses plastic buckets and metal objects instead of traditional drums. The group
                                performs within the community and on campus. We open for a capella groups but mostly play with groups of kids and teach them how to play drums. 
                                In the past, we've gone to grief clinics, after-school care, and a local highschool. 
                                I really enjoy playing drums and CRASH has been a great way to share my love of drumming with the community. 
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className = "hobbies" >          
                    <Card.Img loading = "lazy" variant="top" src={beluga}  />
                    <Card.Body>
                        <Card.Title><strong>Hobbies and Interests</strong></Card.Title>
                        <Card.Text>
                        
                            <li>Drawing</li>
                            <li>Playing Drums</li>
                            <li>Coding</li>
                        
                                I'm curious about absolutely everything and love learning. 
                                Outer space, rockets, art, and robots are my primary interests.

                        </Card.Text>
                    </Card.Body>
                </Card>

              
            </Container>       
    </HomeStyles>  
    )
}

}
