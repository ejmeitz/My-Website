import React, {Component} from 'react';
import styled from 'styled-components';
import blackfly from "../resources/qpli.jpeg"
import {faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import {Link} from 'react-scroll';


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
 


.secondPage{
    padding-top:10px;
    padding-bottom: 10px;
    justify-content:center;


    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-auto-flow:row;
    grid-gap:10px;
   
    
}

.about{
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;   
    padding:10px;
    margin:auto;
    background-color:lightblue;
}
.hobbies{
    grid-column: 2 / span 1;
    grid-row: 1 / span 2;  
    padding:10px; 
    padding-left:20px;
    background-color:lightblue;
}
.exp{
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;   
    
    background-color:lightblue;
}

.interests {
    margin-top:10px;
    grid-column: 4 / span 1;
    grid-row: 1 / span 1;   
    
    background-color:lightblue;
}

.extra{
    grid-column: 1 / span 4;
    grid-row: 4 / span 1;   
    padding:10px;
    margin:auto;
}

.clubs {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 10px;
   
   

     
    .dbf{
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
       
        margin:auto;
    }


    .crash{
        grid-column: 2 / span 1;
        grid-row: 1 / span 1;
    }
    .ieee{
        grid-column: 3 / span 1;
        grid-row: 1 / span 1;
    }
    .club h4{
        font-weight:bold;
        background-color:red;
        text-align:center;
    }
    .club{
    
    }
    

}
img {
    width: 400px;
    height:400px;
   
}

h2{
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
    top:88vh;
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


@media screen and (max-width: 1500px) {
    .welcome{
        font-size: 0.8em;
    }

}

@media screen and (max-width: 1200px) {
    .welcome h1{
        font-size: 2.25em;
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
    
        <div className = "secondPage" id = "secondPageAnchor">
                <div className = "about">
                    <h2 >
                        About Me:
                    </h2>
                        <p>
                           I grew up in St. Paul Minnesota and currently attend Washington University in St. Louis. 
                           WashU has taught me how to solve a variety problems in a focused and efficient manner. I can solve specific problems like the forces in a truss network
                            but can also apply myself to solve abstract, new problems. For example, this website! I began this app not knowing
                            anything about full stack development, JavaScript, CSS, HTML or the dozen other packages used to create this site. I find every
                            new challenge fun and exciting, and I know the future holds plently to push my limits.
                            
                        
                            Check out the <a href ="/projects">projects</a> page for school work or the <a href ="/art">art</a> and <a href ="/fun">other</a> section for fun, artsy designs and animations.
                        </p>
                </div>
                <div className = "extra">
                    <h2>Activities:</h2>                         
                            <div className = "clubs">
                                <div className = "club dbf">
                                    <img  src = {blackfly} alt = "Blackfly Camera imaging tissue in biaxial loading machine" />
                                    <h4>Design/Build/Fly (DBF)</h4> 
                                    <p>DBF has offered me the opportunity to learn about building and operating aircraft. Each year DBF participates
                                    in the AAIA Design/Build/Fly competition where competitors follow a set of rules to build an airplane. During the 2019-2020 school year, 
                                    the team built a banner-towing plane that could also carry "passengers". I was a member of the manufacturing and structures teams which
                                    are responsible for the design and construction of the aircraft.
                                    </p>
                                </div>
                                <div className = "club ieee">
                                    <h4 >IEEE</h4>
                                    <p>
                                        The Washington University chapter of IEEE works with other clubs to design and build a product they request. For example, the Raas team at WashU asked
                                        IEEE to build them dandiya (essentially batons) that light up synchronously. The IEEE team also participated in the IEEE robotics competition in 2020 to 
                                        produce a fully autonomous robot to pick up trash. In both of these projects, I was responsible for the CAD and manufacturing. 
                                    </p>
                                </div>
                                <div className = "club crash">
                                    <h4 >Crash</h4>
                                    <p>
                                        Crash is a service oriented improvisational drumming group that uses plastic buckets and metal objects instead of traditional drums. The group
                                        performs within the local community and on campus. We open for a capella groups but mostly play with groups of kids and teach them how to play drums. 
                                        In the past, we've gone to grief clinics, after school care for children, and a local highschool. Everyone in Crash enjoys playing drums and loves
                                        teaching and spreading joy to our community.
                                    </p>
                                </div>
                            </div>
                </div>
                <div className = "exp">
                    <h2>Experience: </h2>
                    <h4>AmeriCorps:</h4>
                    <h4>Research Assistant</h4>
                    <a 
                    href = "https://www.linkedin.com/in/ethan-meitz-48ab8b15b/"
                    className = "linkedIn social" 
                    target = "_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon = {faLinkedin} size = "2x" />
                    </a>

                </div>
                <div className = "hobbies">

                    <h2>Hobbies:</h2>
                       
                            <ul>
                                <li>Drawing</li>
                                <li>Playing Drums</li>
                                <li>Coding</li>
                            </ul>
                    <div className = "interests">

                                    <h2>Interests:</h2>

                                    <p>
                                    I'm curious about absolutely everything and love learning. 
                                        Outer space, rockets, art and robots are my primary interests, but I can find just about anything fascinating. 
                                    </p>
                    </div>
                                
                   
                </div>


            </div>       
    </HomeStyles>  
    )
}

}