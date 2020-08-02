import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Container} from 'react-bootstrap';
import {faFacebook,faGithub,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styled from 'styled-components';

const SocialStyles = styled.div `

.social-container{
  
}
    .social {
        margin-left: 10px;
        margin-top:10px;
    }

    a.social{
        transition: transform 300ms; 
        display: inline-block;

        &:hover{
            transform: translateY(-4px)
        }
        
    }

    .linkedIn{
        color:#2867B2;
    }
    .facebook{
        color:#3b5998;
    }
    .gitHub{
        color:black;
    }
    .insta{
        color:#C13584;
    }
   

`;


const SocialButtonsPage = () => {
  return (
 <SocialStyles>
     <Container className = "social-container">
        <a 
        href = "https://github.com/ejmeitz"
        className = "gitHub social" 
        target = "_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon = {faGithub} size = "2x" />
        </a>

        <a 
        href = "https://www.linkedin.com/in/ethan-meitz-48ab8b15b/"
        className = "linkedIn social" 
        target = "_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon = {faLinkedin} size = "2x" />
        </a>

        <a 
        href = "https://www.instagram.com/ethanmeitz/"
        className = "insta social" 
        target = "_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon = {faInstagram} size = "2x" />
        </a>

        <a 
        href = "https://www.facebook.com/ethan.meitz/"
        className = "fb social" 
        target = "_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon = {faFacebook} size = "2x" />
        </a>
    </Container>
</SocialStyles>
  );
}

export default SocialButtonsPage;