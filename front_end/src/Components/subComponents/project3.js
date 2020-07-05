import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';


import LC from "../../resources/LC.PNG";
import numerical from "../../resources/NumericalSoln.PNG";
import exp from "../../resources/ExpVsTheory.PNG";


const ProjStyles = styled.div `


.grid {
    z-index:10;
    display:grid;

    grid-template-columns: 45% 45%;
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
    grid-template-columns: 40% 60%;

    
    justify-self:center;


}


.carousel, #a {
    grid-column: 1;
    
    margin:auto;
    
    height:70vh;  
    max-height:70vh;



}
.carousel-item,
.carousel-inner,
.carousel-inner img {
    height:70vh;
    min-width:225px;
}

.carousel-indicators li {
    background-color: black; 
  }

  .carousel-control-next-icon:after
{
  content: '>';
  font-size: 40px;
  color: black;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 40px;
  color: black;
}
.carousel{
    box-shadow: 2px 2px 2px grey;
}

.text, #a{
    grid-column: 2;
  
   
    height:70vh;
    margin: auto auto auto 10px;
    padding:10px;
  
    background-color:rgb(63,168,176,0.6);
    
}
.text{
   box-shadow:2px 2px 2px grey;
   
}

.Info{
    font-family: 'Lato', sans-serif;
}
a{
    text-decoration:none;
    color:#5c51fc;
}


`;


export default class Project3 extends Component {

    

    render(){
        return (
    <>
      
        <ProjStyles>
                    <div className = "bg">
                        <div className = "grid">
                            <div className = "element a">
                                <div className = "carousel" src = "" alt = "camera">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src= {LC}
                                            alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src= {numerical}
                                            alt="Second slide"
                                            />
                                            <Carousel.Caption>
                                            
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={exp}
                                            alt="Third slide"
                                            />
                                            <Carousel.Caption>
                                            
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            <div className = "text" >
                                <h2 className = "projectName">
                                    Cooking a Hot Dog according to a Finite Differencing Model
                                </h2>
                                <div className = "Info">
                                    <h3>About: <h5>During the Spring 2020 semester I took Heat Transfer where I was assinged a semester long project to cook a hot dog using what we learned in class.
                                         Throughout the year, my group and I worked to developed a radial finite differencing model of heat transfer in a hot dog. The end goal was to 
                                         use our model and cook a hotdog. Our early model assumed that the temperature gradients in the hotdog were negligable at a given time which allowed us to apply the lumped capacitence model.
                                         However, when we calculated the convective and radiative heat transfer coefficients the Biot number was above 0.1 which disallowed us from using lumped capacitence. Therefore,
                                        we turned to an analytical solution, which given an initial temperature could solve for the temperature of the hot dog at each time step. To use this model the team derived equations
                                        to model the temperature at the center, interior and exterior node. Then the equations were put into MATLAB to find the final cook time given our initial conditions. Our model predicted
                                        the hot dog would take 353 seconds to cook, and the real world hot dog took 402 seconds to cook under the same conditions as our model. While the real hot dog took slightly
                                        longer to cook conditions in the test did not exactly match the model. Despite that, when the data was plotted the only difference was the initial temperature of the hot dog and
                                        the temperature of the hot dog followed the same trend as our model.   </h5> </h3>       
                                    <h3>Languages: MATLAB &nbsp;&nbsp;<a 
                                        href = "https://github.com/ejmeitz/Radial-Finite-Differencing-Model--Cooking-a-HotDog"
                                        className = "gitHub social" 
                                        target = "_blank"
                                        rel="noopener noreferrer">
                                        <FontAwesomeIcon icon = {faGithub} size = "1x" />
                                        </a></h3>
                                </div>                                    
                             </div>
                        </div>
                    </div> 
                    </div>
                </ProjStyles>
           
        </>
        )
    }
    
}