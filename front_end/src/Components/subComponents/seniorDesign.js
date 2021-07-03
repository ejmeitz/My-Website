
import React, {Component} from 'react';
import {Container,Card,Carousel} from 'react-bootstrap';
import styled from 'styled-components';

import CAD_Exploded_View from "../../resources/explodedView.PNG"
import SD_UI from "../../resources/UI_screenshot.PNG"
import camera3axis from "../../resources/3axisCamera.jpg"

const SeniorDesignStyles = styled.div `
   
*{
    font-family: 'Josefin Sans', sans-serif;

}
.container-fluid{
    margin: 70px auto 20px auto;
    padding: 0;
}

.grid{
    width:95vw;
    display:grid;
    grid-template-columns:  40% 60%;
    margin:auto;
    justify-items:center;
    justify-content:center;
}
.carousel{
    margin:auto;
    grid-column: 1 / span 1;
}


.card-body{
    grid-column: 2 / span 1;
    margin:auto;
    border:1px solid black;
    border-radius:5px;
    height:40vw;
}

.card {
    border:none;
}

img{
    height:40vw;
    margin:auto;
    object-fit:scale-down;
}

p{
    font-size:1.33vw;
}
.projectName{
    font-size:2vw;
}




@media screen and (max-width: 1100px) {
    p{
        font-size:1.28vw;
    }
    .carousel-caption{
        font-size: 0.8rem;
    }

}


@media screen and (max-width: 800px){
    .grid{
        width:90vw;
        display:grid;
        grid-template-columns:  1fr;
        grid-auto-flow:row;
        grid-gap:10px;

        margin:auto;

        justify-items:center;
        justify-content:center;
    }

    .carousel{
        margin:auto;
        height:60vh;
        grid-column: 1 / span 1;
    }
    
    .card-body{
        grid-column: 1 / span 1;
        margin:auto;
        border-radius:5px;
        height:100%;
        max-width:80vw;
        border:1px solid black;
        width : calc(60vh * 0.8);
    }
    p{
        font-size:0.85em;
    }
    .projectName{
        font-size:1.5em;
    }
    img{
        margin:auto;
        height:60vh;
        max-width:80vw;
        object-fit:scale-down;
    }

}

@media screen and (max-width: 512px){
    .grid{
        width:90vw;
        display:grid;
        grid-template-columns: 1fr;
        grid-auto-flow:row;
        grid-gap:10px;

        margin:auto;

        justify-items:center;
        justify-content:center;
    }

    .carousel{
        margin:auto;
        height:auto;
        grid-column: 1 / span 1;
    }
    
    .card-body{
        grid-column: 1 / span 1;
        margin:auto;
        border-radius:5px;
        height:100%;
        max-width:80vw;
        border:1px solid black;
        width : calc(60vh * 0.8);
    }
    p{
        font-size:0.85em;
    }
    .projectName{
        font-size:1.3em;
    }
    img{
        margin:auto;
        max-width:80vw;
        height:auto;
        object-fit:scale-down;
    }

}


`;

export default class seniorDes extends Component {

    

    render(){
        return (
            <SeniorDesignStyles>
                <Container fluid>
                    <div className = "grid">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src = {CAD_Exploded_View}
                                            alt="An exploded view of the z-axis assembly"
                                            />
                                            <Carousel.Caption style = {{color: "black"}}>
                                                An exploded view of the z-axis assembly.
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img 
                                            className="d-block w-100"
                                               src = {camera3axis}
                                            alt="The camera in one of the experimental setups"
                                            />
                                            <Carousel.Caption style = {{color: "black"}}>
                                                The camera in one of the experimental setups
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img 
                                            className="d-block w-100"
                                               src = {SD_UI}
                                            alt=" The UI used to the control the stepper motor on the z-axis"
                                            />
                                            <Carousel.Caption style = {{color: "black"}}>
                                                The UI used to the control the stepper motor on the z-axis
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>                     
                                <Card.Body>
                                    <Card.Title className = "projectName" style={{margin:"10px 0px"}}><strong>Senior Design: 3-Axis Camera System</strong></Card.Title>
                                    <div className = "card-text"> 
                                        <p>
                                           In the final semester of my B.S. in Mechanical Engineering I worked with the Lake lab to develop a semi-autonomous system to control a camera. 
                                           The lab specified that the z-axis should be automated with extremely accurate positioning. The other two axes (x,y) could be manually moved. Furthemore, 
                                           the z-axis had to be controllable through a computer with the ability to return to the exact position as a previous experiment. To acheive this, my team and I
                                           developed a CAD model and built several prototypes to test our ideas. The final design, was a 3-axis cartesian robot that used a stepper motor to control the
                                           z-axis. I was responsible for the software used to control the stepper motor and the design of the z-axis. The software used Qt to send commands
                                           from the lab computer to an on-board Arduino. The Arduino would parse the commands and move the stepper motor. Ultimately the design worked, and the Lake lab uses 
                                           it to position their cameras. 
                                           
                                        </p>        
                                        <p>
                                            <Card.Link href = "/examples" target = "_blank" rel="noopener noreferrer">
                                                Videos   
                                            </Card.Link>
                                            <Card.Link href = "https://lakelab.wustl.edu/" target = "_blank" rel="noopener noreferrer">
                                                The Lake Lab    
                                            </Card.Link>
                                        </p>
                                    </div>
                                </Card.Body>
                       </div>
                </Container>
            </SeniorDesignStyles>    
        )
    }
    
}