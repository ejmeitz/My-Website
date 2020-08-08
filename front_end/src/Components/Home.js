import React, {Component} from 'react';
import {Card, Container, ListGroup} from 'react-bootstrap';
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
import beluga from "../resources/beluga169.png";

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
        grid-template-columns:  45% 55%;
        margin: auto;
        justify-items:center;
        justify-content:center;
    
    }

    .welcome {
        margin-top:35vh;
    }

    .welcome h5{
        font-size: 2.5em;
        font-weight:300;
        color:black;
        min-width:360px;
        margin-left:4vw;
        
    }
    .me{
        grid-column: 2 / span 1;
            align-self:center;
         
            height: 650px;
            width: 650px;
  
            border: 2px solid lightgrey;
            display: inline-block;

            background-position: center;
         
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

.readMore{
    position:absolute;
    text-align:center;
    
    color:rgb( 140, 194, 255);
    top:86vh;
    left:50vw;
    margin:auto;
 
    &:hover {
        color:rgb( 140, 194, 255);
        cursor:pointer
      }

    p{
        font-size:1.3em;
        color:rgb( 140, 194, 255);
    }
}
.card-img-top {
    width: 100%;
    height: 15vw;
}
.card{
    width:30vw;
    aspectRatio: 1/1;
}

@media screen and (max-width: 1500px) {
    .welcome{
        font-size: 0.8em;
    }
}

@media screen and (max-width: 1350px) {
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
        aspectRatio: 1/1;
    }
    .card-img-top {
        width: 100%;
        height: 20vw;
    }
}

@media screen and (max-width: 1200px) {
    .welcome h1{
        font-size: 2.25em;
    }
}

@media screen and (max-width: 1200px) {
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


@media screen and (max-width: 400px) {


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
                     Hi, I'm <strong>Ethan Meitz</strong>, and I'm a senior at Washington University in St. Louis. I am majoring in <i>mechanical engineering</i> and minoring in <i>computer science</i> and love creating art. 
                     Check out my  <a href = "/projects">engineering projects</a>, <a href = "/art">artwork</a>  and some <a href = "/fun">fun animations</a>! 
                    </h5>
            </div> 
        
            
        </div>
    
        <Container className = "secondPage" id = "secondPageAnchor" fluid>
             
            
                <Card className = "about" >
                    <Card.Img variant="top" src={StPaul} alt="Downtown St.Paul"/>
                    <Card.Body>
                        <Card.Title style={{margin:"10px"}}><strong>About Me</strong></Card.Title>
                        <Card.Text>
                            I grew up in St. Paul Minnesota and currently attend Washington University in St. Louis. 
                           WashU has taught me how to solve a variety problems in a focused and efficient manner. I can solve specific problems like the forces in a truss network
                            but can also apply myself to solve abstract, new problems. For example, this website! I began this app not knowing
                            anything about full stack development, JavaScript, CSS, HTML or the dozen other packages used to create this site. I find every
                            new challenge fun and exciting, and I know the future holds plently to push my limits.
                            
                        
                            Check out the <a href ="/projects">projects</a> page for school work or the <a href ="/art">art</a> and <a href ="/fun">other</a> section for fun, artsy designs and animations.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className = "hobbies" >
                    
                    <Card.Img variant="top" src={beluga}  />
                    <Card.Body>
                        <Card.Title style={{marginTop:"10px"}}><strong>Hobbies and Interests</strong></Card.Title>
                        <Card.Text>
                        
                            <li>Drawing</li>
                            <li>Playing Drums</li>
                            <li>Coding</li>
                        
                                I'm curious about absolutely everything and love learning. 
                                Outer space, rockets, art and robots are my primary interests, but I can find just about anything fascinating. 

                        </Card.Text>
                    </Card.Body>
                </Card>
                     
                <Card className = "exp" >
                    <Card.Img variant="top" src={AmeriCorps} alt="Me and my coworkers at the end of the summer"/>
                    <Card.Body>
                        <Card.Title style={{marginTop:"10px"}}><strong>AmeriCorps</strong></Card.Title>
                        <Card.Text>
                            I've always loved volunteering at Habitat for Humanity, but during the 2019 summer I had the chance to serve with AmeriCorps at Habitat for Humanity. Instead of
                            just building the homes I was now responsible for teaching and keeping the volunteers safe. Every day was a new project and I learned so much about how to lead and teach a group
                            and also about the state of affordable housing in Minnesota. It was a great opportunity and I highly reccomend both <a href = "https://www.nationalservice.gov/programs/americorps">AmeriCorps</a> and <a href="https://www.habitat.org/">Habitat for Humanity</a>.    
                        </Card.Text>
                    </Card.Body>
                </Card>
                   
                      
                <Card className = "club dbf" >
                    <Card.Img variant="top" src={Plane} alt = "Design Build Fly plane just before a test flight" />
                    <Card.Body>
                        <Card.Title style={{marginTop:"10px"}}><strong>Design/Build/Fly</strong></Card.Title>
                        <Card.Text>
                                DBF has offered me the opportunity to learn about building and operating aircraft. Each year DBF participates
                                in the AAIA Design/Build/Fly competition where competitors follow a set of rules to build an airplane. During the 2019-2020 school year, 
                                the team built a banner-towing plane that could also carry "passengers". I was a member of the manufacturing and structures teams which
                                are responsible for the design and construction of the aircraft.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className = "club ieee" >
                    <Card.Img   variant="top" src={Robot} alt = "CAD model of the autonomous trash collector" />
                    <Card.Body>
                        <Card.Title style={{marginTop:"10px"}}><strong>IEEE</strong></Card.Title>
                        <Card.Text>
                                    The Washington University chapter of IEEE works with other clubs to design and build a product they request. For example, the Raas team at WashU asked
                                    IEEE to build them dandiya (essentially batons) that light up synchronously. The IEEE team also participated in the IEEE robotics competition in 2020 to 
                                    produce a fully autonomous robot to pick up trash. In both of these projects, I was responsible for the CAD and manufacturing. 
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className = "club crash" >
                    <Card.Img className="d-block w-100" variant="top" src={Crash1} alt = "CRASH playing on the street" />
                    <Card.Body>
                        <ListGroup>
                              <Card.Title style={{marginTop:"10px"}}><strong>CRASH</strong>  <a 
                            href = "https://www.facebook.com/wustlCRASH/"
                            className = "fb social" 
                            target = "_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon = {faFacebook} size = "1x" />
                            </a>
                        </Card.Title>
                        </ListGroup>
                      
                        <Card.Text>
                               CRASH is a service oriented improvisational drumming group that uses plastic buckets and metal objects instead of traditional drums. The group
                                performs within the community and on campus. We open for a capella groups but mostly play with groups of kids and teach them how to play drums. 
                                In the past, we've gone to grief clinics, after school care, and a local highschool. Everyone in CRASH enjoys playing drums and loves
                                teaching and sharing drumming with our community.
                        </Card.Text>
                    </Card.Body>
                </Card>

              
            </Container>       
    </HomeStyles>  
    )
}

}