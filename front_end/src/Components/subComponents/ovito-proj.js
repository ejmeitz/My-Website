import React from 'react';
import styled from 'styled-components';
import {Container, Card, Carousel} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';

import animation from "../../resources/aSi_mode_animation_big.gif"

const Ovito_Styles = styled.div `

*{
    font-family: 'Josefin Sans', sans-serif;

}
.container-fluid{
    margin: 70px auto 20px auto;
    padding: 0;
}

.grid{
    width:95%;
    display:grid;
    grid-template-columns:  40% 60%;

    justify-items:center;
    justify-content:center;
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
    margin:auto;
    width:80%;
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
        height:100%;
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
        font-size:0.75em;
    }
    .projectName{
        font-size:1.3em;
    }
    img{
        margin:auto;
        max-width:80vw;
        object-fit:scale-down;
    }

}


`;


export default function OvitoProject(props) {

        return(
            <Ovito_Styles>
                <Container fluid>
                    <Card>
                    <div className = "grid" >
                        <img src = {animation}></img>                
                    <Card.Body>
                        <Card.Title className = "projectName" style={{margin:"10px 0px"}}><strong>Visualizing Vibrational Modes in OVITO</strong></Card.Title>
                        <div className = "card-text"> 
                            <p>
                                Energy is stored and transported through the crystal lattice as vibrations between atoms. These vibrations are useful for calculating material properties such as
                                heat capacity and can be engineered to develop multi-functional high perforamce materials. In a perfect crystal, these vibrations are typically sinusoidal motions that can be imagined and animated easily. However, in amorphous
                                materials and liquids the concept of a vibrational mode is less definitive. To help gain intuition and understand the atomic motions I developed a Python script to visualize
                                the atomic motion. This script interfaces with OVITO, a common molecular visualization tool, and can genrate animations given a set of particle positions and a corresponding vibrational mode. The animation on this page
                                is an example of a vibrational mode. There is definitive periodic motion, but it is not as organized as a crystalline lattice. The code is not publically available at the moment. Please contact me if you would like to try it.
                            </p>        
                            <p>
                                <strong>Languages: </strong>Python &nbsp;&nbsp; <br/>
                            </p>
                        </div>
                    </Card.Body>
                    </div>
                    </Card>
                </Container>   
            </Ovito_Styles>
        );

}