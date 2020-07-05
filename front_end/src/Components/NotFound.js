import React, {Component} from 'react';
import styled from 'styled-components';

const errorStyle = styled.div `

p{
    text-align:center;
}

`;


export default class NotFound extends Component {
    render(){
        return(
            <errorStyle>
                <p>Error <strong>404</strong> Page Not Found</p>
            </errorStyle>
        );
    }
}