import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import axios from 'axios';

import Home from "./Components/Home";
import Art from "./Components/art";
import Projects from './Components/my_projects';
import NotFound  from './Components/NotFound';
import Contact from './Components/contact';
import Fun from './Components/fun';
import Nav from './Components/nav-home.js';


import Blackfly from './Components/subComponents/blackfly';
import websiteProj from './Components/subComponents/website';
import Project3 from './Components/subComponents/project3';


import Footer from './Components/footer.js';


import './App.css';
import './index.css'


class App extends Component{ 
  
  constructor(props) {
    super(props);
    this.updateViewers = this.updateViewers.bind(this);
  }

updateViewers() {

  const viewerInfo = {
    viewerIP : '',
    pageViewed : window.location.pathname.toString(),
    timestamp : Date.now()
  }


  axios.post('http://ethanmeitz.com/views/add' || 'http://localhost:5000/views/add', viewerInfo )
  
    .then(res => console.log(res.data))
    .catch(err => console.log('Could not send information: ' + err));
}

componentWillMount() {
    this.updateViewers();
}

render(){
  return (
    <React.Fragment >
        <Nav />
                  <Router>
                      <Switch>
                        <Route updateViewers={this.updateViewers} exact path = "/" component ={Home} />
                        <Route  path = "/art" component ={Art} />
                        <Route  path = "/fun" component ={Fun} />
                        <Route  exact path = "/projects" component ={Projects} />
                        <Route  path = "/contact" component ={Contact} />
                        <Route  exact path = "/projects/blackfly" component ={Blackfly} />
                        <Route  exact path = "/projects/website" component ={websiteProj} />
                        <Route  exact path = "/projects/project3" component ={Project3} />
                        <Route path = "*" component = {NotFound} status = {404} />
                      </Switch>
                  </Router> 
        <Footer />
     </React.Fragment>
  )
}
}
export default App;


/*

<footer>
          <p>
            Copyright {'\u00A9'} {new Date().getFullYear()}, Ethan Meitz
          </p>
        </footer>

*/