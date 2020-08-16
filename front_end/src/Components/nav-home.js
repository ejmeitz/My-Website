import React,{Component} from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const NavStyles = styled.div `

*{
    margin: 0px;
    padding: 0px;
    border-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    
}

.navbar{
    background-color:rgb( 140, 194, 255);
    position:fixed;
    width: 100%;
    padding: 10px;
    height:50px;
    
    top: 0;
    transition: top 0.5s;

    z-index:10;
  }


   .navbar-nav .nav-link {
    color: white;
    font-weight:20px;
    margin: 10px 20px 8px 20px;

    background-color:rgb( 140, 194, 255);

    &:hover {
      color: #ffcb3d;
    }
  }

   a, .navbar-brand{
      color:white;
      font-size: 20px;
      margin-left:10px;

      &:hover {
        color: white;
      }
  }

  #nav-dropdown{
    color: white;
    font-weight:20px;
    margin:10px 20px 10px 20px;
    background-color:rgb( 140, 194, 255);
    &:hover {
      color: #ffcb3d;
    }
    

  }
 
  .navbar-nav li:hover .dropdown-menu {
    display: block;
    background-color:rgb( 140, 194, 255);
}


.navbar-toggler{
  margin-right:20px;
  
}
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline-color: black;
}

.dropdown-menu, .dropdown-item{
  background-color:rgb( 140, 194, 255);
  margin:auto;
  color:white;

  &:hover{
    color: #ffcb3d;
  }

}

.navbar-nav{
  background-color:rgb( 140, 194, 255);
}
.dropdown-item{
  background-color:rgb( 140, 194, 255);
    text-align:center;
}

.svg-inline--fa.fa-w-14 {
  width: 1em;
}
.navbar-toggler {
  border:none;
}
.navbar-toggler:focus{
  outline-color:rgba(0,0,0,0);
}


@media screen and (max-width: 1000px){
  .navbar{
    background-color:rgb( 140, 194, 255);
    position:fixed;
    width: 100%;
    padding: 10px;
    height:50px;
    
    top: 0;
    z-index:10;
  }

  .navbar--hidden {
    top:0;
  }



}



@media screen and (max-device-width: 1000px){
  .navbar{
    background-color:rgb( 140, 194, 255);
    position:fixed;
    width: 100%;
    padding: 10px;
    height:50px;
    
    top: 0;
    z-index:10;
  }
}



`;


export default class NavHome extends Component{
    
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollPos: window.pageYOffset,
        };
        this.handleScroll = this.handleScroll.bind(this);
      }
    

      // Adds an event listener when the component is mounted.
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmounted.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      // Hide or show the menu.
      handleScroll = () => {
      if(document.documentElement.clientWidth >= 1100){
        const nav = document.getElementById('navbar');

        let currentScrollPos = window.pageYOffset;
        if(currentScrollPos < 0){
          currentScrollPos = 0;
        }
        let temp = this.state.prevScrollPos - currentScrollPos;
        temp = Math.abs(temp);
        if (this.state.prevScrollPos > currentScrollPos && temp < 50) {
         nav.style.top = "0px";
        } else {
         nav.style.top = "-50px";
        }

        console.log("Current: " + currentScrollPos);
        console.log("Prev: " + this.state.prevScrollPos);

        this.setState({
          prevScrollPos : currentScrollPos
          });

      }

      }
        
    
    
    
    render(){
    return (
            <NavStyles>
                <Navbar id = "navbar" fixed = "top" variant = "dark" expand = "lg">
                <Navbar.Brand href = "/"> 
                    Ethan Meitz
                </Navbar.Brand> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                      <span>
                        <FontAwesomeIcon
                          icon={faBars} color="white" size="lg"
                        />
                      </span>
                    </Navbar.Toggle>
                        <Navbar.Collapse id = "basic-navbar-nav">
                            <Nav  className = "ml-auto">
                                    <Nav.Link href="/">HOME</Nav.Link>              
                                    <Nav.Link href="/art">ART</Nav.Link>            
                                    <NavDropdown title = "PROJECTS" id = "nav-dropdown">
                                        <NavDropdown.Item href = "/projects/blackfly">Camera UI</NavDropdown.Item>
                                        <NavDropdown.Item href = "/projects/website">Website</NavDropdown.Item>
                                        <NavDropdown.Item href = "/projects/hotdog">FEA Model</NavDropdown.Item>
                                        <NavDropdown.Item href = "/projects/strain">Strain Tracking</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href = "/projects/home">Project Home</NavDropdown.Item>
                                    </NavDropdown>  
                                    <Nav.Link href="/fun">ANIMATIONS</Nav.Link>
                                    <Nav.Link href="/contact">CONTACT ME</Nav.Link>    
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>  
            </NavStyles>
            )
    }
}

