import React, {Component} from 'react';
import circleVid from "../../resources/circleTracking.mp4";
import {Container} from "react-bootstrap";


export default class videoExamples extends Component {
    render(){
        return (
            <Container fluid>
                 <video style = {{margin:"60px auto auto auto"}} autoPlay = {true} src = {circleVid}  type="video/mp4" loop/>
            </Container>
        )
    }
    
}