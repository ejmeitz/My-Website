import React, {Component} from 'react';
import styled from 'styled-components';
import Socials from './socials';




const FooterStyles = styled.div `

        *{
            margin: 0px;
            padding: 0px;
        }

      .footer {
          display:grid;
          width:100vw;
          grid-template-rows: 80% 20%;
          height:20vh;
          

          background-color:rgba( 140, 194, 255,0.6);
          
          justify-items:center;
          justify-content:center;
          align-items:center;
          align-self:bottom;
          z-index:10;
        }   
        
        .svg-inline--fa {
            grid-row:1;
            align-self:center;            
        }

        .copy{
            width:100vw;
            grid-row:2;
            height: 4vh;
            background-color: rgb( 140, 194, 255);
            align-self:center;
            text-align:center;
            padding:0px
        }
      

    }
`;



export default function Footer (props) {

    
    return(


    <FooterStyles> 
        <div className = "footer">
            <Socials />
            <p className = "copy">
                Copyright {'\u00A9'} {new Date().getFullYear()}, Ethan Meitz
            </p>
        </div>
    </FooterStyles>


);


}