import React, {Component} from 'react';
import styled from 'styled-components';

const FunStyles = styled.div `

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
.p5Canvas{
    margin:auto;
}

.body{
   display:flex;
   justify-content:center;
   margin: 7vh auto 1vh auto;
}
.grid{
    display:grid;
    margin-top:20px;
    margin-bottom:20px;
    padding-bottom:30px;
    width: 80%;
    grid-template-columns: 40% 40%;
    grid-gap:20px;
    border: 3px solid blue;
    align-items:strech;
    justify-items:center;
    justify-content:center;
    grid-auto-flow:row;
}
.animation{
    justify-items:center;
    justify-content:center;
    width:500px;
    height:550px;
    padding: 20px;
}
.animation h2{
    margin-bottom:10px;
}

iframe{
    width: 500px;
    height: 500px;
    overflow:hidden;
}

@media screen and (max-width: 1600px) {
    .grid{
        display:grid;
        margin:auto;
        grid-template-columns: 80%;
        width: 80%;
        grid-gap:20px;
        border: 3px solid blue;
        align-items:strech;
        justify-items:center;
        justify-content:center;
        grid-auto-flow:row;
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
        border: 3px solid blue;
        margin:auto;
    
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
            <div className = "body">
                <main className = "grid">
                    <div className = "animation">
                        <h2 className = "title">Bouncing Balls</h2>
                        <iframe  title = "bouncing-balls" scrolling="no" frameBorder="0" src="https://editor.p5js.org/ejmeitz/embed/Ggf2mFF9o"></iframe>
                    </div>
                    <div className = "animation">
                        <h2 className = "title">Bouncing Balls</h2>
                        <iframe  title = "bouncing-balls" scrolling="no" frameBorder="0" src="https://editor.p5js.org/ejmeitz/embed/Ggf2mFF9o"></iframe>
                    </div>
                    <div className = "animation">
                        <h2 className = "title">Bouncing Balls</h2> 
                        <iframe  title = "bouncing-balls" scrolling="no" frameBorder="0" src="https://editor.p5js.org/ejmeitz/embed/Ggf2mFF9o"></iframe>
                    
                    </div>
                    <div className = "animation">
                        <h2 className = "title">Bouncing Balls</h2>
                        <iframe  title = "bouncing-balls" scrolling="no" frameBorder="0" src="https://editor.p5js.org/ejmeitz/embed/Ggf2mFF9o"></iframe>
                    </div>
                </main>
            </div>
        </FunStyles>
    </>
        )
    }
}