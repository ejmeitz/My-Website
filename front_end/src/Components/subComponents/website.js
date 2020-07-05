import React, {Component} from 'react';
import codePic from "../../resources/codePic.PNG";
import {Carousel} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';



const Proj2Styles = styled.div `


.grid {
    z-index:10;
    display:grid;

    grid-template-columns: 40% 40%;
    grid-template-rows: 96vh;
    margin: 0px auto 10px auto;

    grid-auto-flow:rows;

   
    justify-items:center;
    justify-content:center;
    align-items:center;
}

.element{
    grid-column: 1 / span 2;

    display:grid;
    grid-template-columns: 30% 70%;
    
    grid-gap: 10px;
    
    justify-self:center;
    margin:auto;
    

}


.carousel, #a {
    grid-column: 1;
    
    margin:auto;
    
    height:60vh;  
    max-height:60vh;



}
.carousel-item,
.carousel-inner,
.carousel-inner img {
    height:60vh;
    min-width:225px;
}

.text, #a{
    grid-column: 2;
  
   
    height:60vh;
    margin: auto auto auto 10px;
    padding:10px;
  
    background-color:rgb(63,168,176,0.6);
    
}


.Info{
    font-family: 'Lato', sans-serif;
}
a{
    text-decoration:none;
    color:#5c51fc;
}
.carousel{
    box-shadow: 2px 2px 2px grey;
}
.text{
    box-shadow: 2px 2px 2px grey;
}


`;






export default class website extends Component {



    render(){
        return (
    <>
      
        <Proj2Styles>
                    <div className = "bg">
                        <div className = "grid">
                            <div className = "element a">
                                <div className = "carousel" src = "" alt = "camera">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src= {codePic}
                                            alt="Website code"
                                            />
                                            <Carousel.Caption>
                                        
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={codePic}
                                            alt="Second slide"
                                            />
                                            <Carousel.Caption>
                                            
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={codePic}
                                            alt="Third slide"
                                            />
                                            <Carousel.Caption>
                                            
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            <div className = "text" >
                                <h2 className = "projectName">
                                    Personal Website
                                </h2>
                                <div className = "Info">
                                    <h3>About: <h5> This website is a personal project which unites my love of art and coding. To create the website I deployed a MERN stack to heroku.
                                        Specifically, my website employs mongoDB, Express, React, NodeJS and several smaller packages such as axios and react-boostrap to run. Each of these components
                                        plays a unique role. For example, mongoDB stores data like the time at which someone views my website and React allows me to design a beautiful front end from HTML and
                                        custom objects to streamline development.
                                        </h5> </h3>       
                                    <h3>Languages & Packages: </h3><p>JavaScript, CSS, HTML, MongoDB, ExpressJS, ReactJS, NodeJS, Bootstrap, and Styled Components</p>
                                    <p>Check out GitHub for the code! &nbsp;&nbsp; <a 
                                        href = "https://github.com/ejmeitz/GUI"
                                        className = "gitHub social" 
                                        target = "_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon = {faGithub} size = "2x" />
                                        </a>
                                    </p>  
                                </div>                                    
                             </div>
                        </div>
                    </div> 
                    </div>
                </Proj2Styles>
           
        </>
        )
    }
    
    
}