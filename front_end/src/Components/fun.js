import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

const FunStyles = styled.div `

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    justify-items:center;
}

.grid{
    display:grid;
    margin:60px auto 20px auto;
    width: 80%;
    grid-template-columns: 50% 50%;
    grid-gap:20px;
 
    justify-items:center;
    justify-content:center;
    grid-auto-flow:row;
}

.animation{
    margin:auto;
    width: 40vw;
    height:40vw;
    max-width: 500px;
    max-height:500px;
}
h2{
    margin-bottom:10px;
    text-align:center;
}
p{
    text-align:center;
}


@media screen and (max-width: 1600px) {
    .grid{
        display:grid;
        margin: 60px auto;
        grid-template-columns: 90%;
        width: 80%;
        grid-gap:20px;
 
        justify-items:center;
        justify-content:center;
        grid-auto-flow:row;
    }

    .animation{
        width:500px;
        height:500px;
        margin:auto;
    }
    iframe{
        width:500px;
        height:500px;
        margin:auto;
    }

}

@media screen and (max-width: 750px) {
    iframe
    {
       width:300px;
       height:300px;
       margin:auto;
    }

    .grid{
        display:grid;
        width: 80%;
        grid-gap:10px;
       
        margin: 60px auto;
    
        justify-items:center;
        justify-content:center;
        grid-auto-flow:row;
    }
    .animation{
        width:300px;
        height:300px;
        margin:auto;
    }

     h2{
        margin-bottom:5px;
        font-size:1.3rem;
    }
}


@media screen and (max-width: 750px) {
    iframe
    {
        width:275px;
        height:275px;
       margin:auto;
    }

    .grid{
        display:grid;
        width: 100%;
        grid-gap:10px;
       
        margin: 60px auto;
    
        justify-items:center;
        justify-content:center;
        grid-auto-flow:row;
    }
    .animation{
        width:275px;
        height:275px;
        margin:auto;
    }

}

`;



export default class my_projects extends Component {

    render(){
        return (
    <>
        <FunStyles>  
            <Container fluid>
                <div className = "grid">
                    <Container>  
                        <h2 className = "title">Bouncing Balls:</h2>
                        <div className = "animation a">
                            <iframe samesite = "None Secure"  title = "bouncing-balls" width="100%" height="100%" frameBorder="0" scrolling="no" id="ballFrame"  src="https://editor.p5js.org/ejmeitz/embed/Ggf2mFF9o"></iframe>
                        </div>
                    </Container>
                    <Container>
                        <h2 className = "title">TicTacToe w/ Mini-Max:</h2> 
                        <div className = "animation b">
                            <iframe  samesite = "None Secure" title = "tictactoe" width="100%" height="100%" frameBorder="0" scrolling="no" id="tttFrame" src="https://editor.p5js.org/ejmeitz/embed/6Ll3mkIKB"></iframe>
                        </div>
                        <p>Not supported on phones or tablets</p>
                    </Container>
                    {/* <Container>
                        <h2 className = "title">DFS Visualization:</h2> 
                        <div className = "animation c">
                        <iframe  samesite = "None Secure" title = "tictactoe" width="100%" height="100%" frameBorder="0" scrolling="no" id="tttFrame" src="https://editor.p5js.org/ejmeitz/embed/6Ll3mkIKB"></iframe>
                        </div>
                    </Container> */}
                </div>        
            </Container>
        </FunStyles>
    </>
        )
    }
}