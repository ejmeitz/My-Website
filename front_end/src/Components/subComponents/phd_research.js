import React from 'react';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';


import alan from "../../resources/alan.png"
import jerry from "../../resources/jerry.jpg"

const PHD_Styles = styled.div `

.container-fluid{
    margin-top:60px;
    margin-bottom:15px;
    text-align:center;
    max-width:60vw;
}

p{
    font-size:22px;
    text-align:justify;
}

.flex-container{
    display:flex;
    flex-flow: row wrap;
    justify-content:center;
}

.alan{
    flex-basis:30%;
}
.jerry{
    flex-basis:30%;
}

img{
    height: 20vw;
}

@media screen and (max-width: 1100px){
    .container-fluid{ 
        max-width: 80vw;
    }
    img{
        height: 300px;
    }

    .flex-container{
        justify-content:space-around;
    }
}

@media screen and (max-width: 600px){
    p{
        font-size:18px;
    }
}

@media screen and (max-width: 450px){
    p{
        font-size:14px;
    }
}

`;


export default function Research_PHD(props) {

        return(
            <PHD_Styles>
                <Container fluid>
                    <h1 className = "title">Ph.D. Research</h1>
                    <hr></hr>
                    
                    <h3>Advisors:</h3>
                    <div className='flex-container'>
                    <div className='alan'>
                        <img src = {alan}></img>
                        <h5>Alan McGaughey</h5>
                        <a href="https://www.meche.engineering.cmu.edu/faculty/mcgaughey-ntpl.html" target = "_blank"><strong>Lab Website</strong> </a>
                    </div>
                    <div className='jerry'>
                        <img src = {jerry}></img>
                        <h5>Gerald Wang</h5>
                        <a href="https://www.cmu.edu/cee/m5lab/" target = "_blank"><strong>Lab Website</strong> </a>  
                    </div>
                        
                    </div>
                    <hr></hr>
                    <div>
                         <h3>Research Statement:</h3>
                        <p>
                        Liquids are an essential component of energy storage and generation technologies due to their ability to transport mass, heat, and momentum efficiently.
                        The multi-functional thermal properties of liquids like R134a, water, and thermo-oils make them ideal choices for energy infrastructure applications. 
                        However, as climate change necessitates more environmentally friendly and energy-efficient infrastructure, many of these liquids will need to be replaced with sustainable alternatives. 
                        Due to the combinatorially large search space of new molecules, a computational approach is required to supplement and inform experiments. Molecular simulation tools are increasingly 
                        accurate and effective tools for predicting material properties; however, many liquid properties like heat capacity and thermal conductivity lack the nanoscale description required to 
                        calculate them from a molecular simulation. Liquids pose a unique challenge because their molecules are not bound to a lattice site (like in a solid) and do not weakly interact (like in a gas). 
                        <strong> My research aims to create physically-grounded and predictive models for liquid thermophysical properties to accelerate the design and validation of multi-functional liquids. </strong>
                        </p>

                    </div>
                   

                </Container>   
            </PHD_Styles>
        );

}