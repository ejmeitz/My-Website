import React, {Component} from 'react';
import {Container} from "react-bootstrap";

import circleVid from "../../resources/circleTracking.mp4";
import deformationVid from "../../resources/exampleDeformation.mp4"


import styled from "styled-components"


const ExamplesStyles = styled.div `
    *{
        margin:0;
        padding:0;
    }

    .grid{
        display:grid;
        width: 90vw;
        grid-template-columns: 50% 50%;
        grid-gap:10px;

        justify-items:center;
        justify-content:center;

        grid-auto-flow:row;
        margin:auto;
    }
    .videoA{
        height : 30vw;
        margin:auto;
        padding:10px 0px;
    }
    .a{
        grid-column: 1 / span 1;
        margin:auto;
    }
    .videoB{
        height : 30vw;
        margin:auto;
        padding:10px 0px;
    }
    .b{
        grid-column: 2 / span 1;
        margin:auto;
    }
    .title{
        font-size: 1.33vw;
    }
    @media screen and (max-width: 1200px){
        .title{
            font-size: 1.5vw;
        }
    }

    @media screen and (max-width: 800px){
        .grid{
            display:grid;
            width: 90vw;
            grid-template-columns: 100%;
            grid-gap:10px;
    
            justify-items:center;
            justify-content:center;
    
            grid-auto-flow:row;
            margin:auto;
        }
        .videoA{
            height : 50vw;
            margin:auto;
            padding:10px 0px;
        }
        .a{
            grid-column: 1 / span 1;
            margin:auto;
        }
        .videoB{
            height : 50vw;
            margin:auto;
            padding:10px 0px;
        }
        .b{
            grid-column: 1 / span 1;
            margin:auto;
        }
        .title{
            font-size: 2.3vw;
        }
    }


`;

export default class videoExamples extends Component {
    render(){
        return (
            <ExamplesStyles>
                <Container style = {{margin:"60px auto 10px auto"}} fluid>
                    <div className = "grid">
                        <div className = "a">
                            <h5 className = "title">Tracking Pins to get Displacement Data</h5>
                            <video className = "videoA" autoPlay = {true} src = {circleVid} preload="auto" type="video/mp4" playsInline  muted loop/>
                        </div>
                        <div className = "b "> 
                            <h5 className = "title">Applying Deformation to the Heatmap</h5>
                            <video className = "videoB" autoPlay = {true} src = {deformationVid} preload="auto" type="video/mp4" playsInline  muted  loop/>
                        </div>

                    </div>
                </Container>
            </ExamplesStyles>
        )
    }
    
}