import React,{Component} from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';


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
    height:6vh;
   
    top: 0;
    transition: top 0.4s;
    z-index:10;
   
  }
  
  .navbar--hidden {
    top: -6vh;
  }

   .navbar-nav .nav-link {
    color: white;
    font-weight:20px;
    margin:10px 20px 10px 20px;
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

@supports (-webkit-touch-callout: none) {
  .navbar{
  
    background-color:rgb( 140, 194, 255);
    position:fixed;
    width: 100%;
    padding: 10px;
    height:6vh;
   
    top: 0;
    z-index:10;
   
  }
  .navbar--hidden {
    top: 0;
  }
}


`;


export default class NavHome extends Component{
    
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
      }
    
      // Adds an event listener when the component is mount.
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      // Hide or show the menu.
      handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };
    
    
    
    render(){
    return (
            <NavStyles>
                <Navbar fixed = "top" expand = "lg" className={"navbar", {
          "navbar--hidden": !this.state.visible}}>
                <Navbar.Brand href = "/"> 
                    Ethan Meitz
                </Navbar.Brand> 
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id = "basic-navbar-nav">
                            <Nav  className = "ml-auto">
                                    <Nav.Link href="/">HOME</Nav.Link>              
                                    <Nav.Link href="/art">ART</Nav.Link>            
                                    <NavDropdown title = "PROJECTS" id = "nav-dropdown">
                                        <NavDropdown.Item href = "/projects/blackfly">Camera UI</NavDropdown.Item>
                                        <NavDropdown.Item href = "/projects/website">Website</NavDropdown.Item>
                                        <NavDropdown.Item href = "/projects/project3">FEA Model</NavDropdown.Item>
                                        <NavDropdown.Item href = "/projects/project4">Strain Tracking</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href = "/projects">Project Home</NavDropdown.Item>
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

