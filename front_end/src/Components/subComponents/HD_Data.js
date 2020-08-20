import React, { Component } from 'react';
import {Container, Figure} from 'react-bootstrap'
import styled from "styled-components"

import lumpedCap from "../../resources/LC.PNG";
import numerical from "../../resources/NumericalSoln.PNG";
import exp from "../../resources/ExpVsTheory.PNG";

const DataStyles = styled.div `

    .container-fluid{
        margin-top:60px;
    }
    .grid{
        display:flex;
        flex-flow:column nowrap; 
        flex-basis: 1200px;
        justify-items:center;
        justify-content:center;

        margin:auto;
        width:90vw;
    }
    .figure{
        margin: 10px auto 10px auto;
        text-align:center;
        max-width:60vw;
    }
    .figure-caption{
        font-size:1.25vw;
        max-width:40vw;
        margin:auto;
    }
    h5{
        font-size:1.6vw;
    }

    @media screen and (max-width: 1050px){
        .figure{
            margin: 10px auto 10px auto;
            text-align:center;
            max-width:70vw;
        }
        .figure-caption{
            margin:auto;
            font-size:1.4vw;
            max-width:50vw;
        }
        h5{
            font-size:2vw;
        }
    }

    @media screen and (max-width: 1050px){
        .figure{
            margin: 10px auto 10px auto;
            text-align:center;
            max-width: 85vw;
        }
        .figure-caption{
            margin:auto;
            font-size:2.25vw;
            max-width:80vw;
        }
        h5{
            font-size:3.5vw;
        }
    }

`;
export default class myData extends Component {


    render(){
        return (
            <DataStyles>
                <Container fluid>
                    <div className = "grid">
                        <Figure>
                            <h5>Lumped Capacitence Model</h5>
                            <Figure.Image
                                // width={171}
                                // height={180}
                                src={lumpedCap}
                            />
                            <Figure.Caption>
                                The lumped capacitence model has the correct general trend for large values of time, but over predicts the final cook time by a factor of 2.
                            </Figure.Caption>
                        </Figure>
                        <Figure>
                            <h5>Radial Finite Differencing Model</h5>
                            <Figure.Image
                                // width={171}
                                // height={180}
                                src={numerical}
                            />
                            <Figure.Caption>
                                The finite differencing model predicts the final time fairly well and is accurate at small time values. However, this model didn't account for the fact
                                that a real hot dog needs to be rotated. This caused the surface temperature to reach unacceptable temperatures before the centerline temperature was ideal.
                            </Figure.Caption>
                        </Figure>
                        <Figure>
                            <h5>Experiment Compared to FEA Model</h5>
                            <Figure.Image
                                // width={171}
                                // height={180}
                                src={exp}
                            />
                            <Figure.Caption>
                                Despite the slight inaccuracy of the finite element model, it predicted the final cook time (centerline at 68 degrees C) within 50 seconds. However, the real 
                                hotdog started 10 degrees colder than the hotdog in our model which could account for the discrepency if we were able to do more testing.
                            </Figure.Caption>
                        </Figure>
                    </div>
                </Container>
            </DataStyles>
            
        )
    }
    
    
}
