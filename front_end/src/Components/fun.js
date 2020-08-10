import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

const FunStyles = styled.div `

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
.grid{
    display:grid;
    margin-top:60px;
    margin-bottom:20px;
    padding-bottom:30px;
    width: 80%;
    grid-template-columns: 40% 40%;
    grid-gap:20px;
 
    justify-items:center;
    justify-content:center;
    grid-auto-flow:row;
}

.animation{
    justify-items:center;
    justify-content:center;
    width:500px;
    height:500px;
    padding: 20px;
}
.animation h2{
    margin-bottom:10px;
}


@media screen and (max-width: 1600px) {
    .grid{
        display:grid;
        margin: 60px auto;
        grid-template-columns: 80%;
        width: 80%;
        grid-gap:20px;
 
        align-items:strech;
        justify-items:center;
        justify-content:center;
        grid-auto-flow:row;
    }

    .animation{
        justify-items:center;
        justify-content:center;
        width:500px;
        height:500px;
        padding: 20px;
    }

}

@media screen and (max-width: 900px) {
    iframe
    {
       width:300px;
       height:300px;
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
        height:350px;
    }

    .p5Canvas{
        margin:auto;
    }
    .animation h2{
        margin-bottom:10px;
    }
}

`;



export default class my_projects extends Component {

    render(){
        return (
    <>
        <FunStyles>  
                <main className = "grid">
                    <Container>
                        <h2 className = "title">Bouncing Balls</h2>
                        <div className = "animation a">
                            <iframe samesite = "None Secure"  title = "bouncing-balls" width="100%" height="100%" frameBorder="0" scrolling="no" id="ballFrame"  src="https://editor.p5js.org/ejmeitz/embed/Ggf2mFF9o"></iframe>
                        </div>
                    </Container>
                    <Container>
                        <h2 className = "title">TicTacToe</h2> 
                        <div className = "animation b">
                            <iframe  samesite = "None Secure" title = "tictactoe" width="100%" height="100%" frameBorder="0" scrolling="no" id="tttFrame" src="https://editor.p5js.org/ejmeitz/embed/6Ll3mkIKB"></iframe>
                        </div>
                    </Container>
                </main>
        </FunStyles>
    </>
        )
    }
}