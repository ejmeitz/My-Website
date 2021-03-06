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

import videoExamples from './Components/subComponents/exampleVideos.js';
import HD_Data from './Components/subComponents/HD_Data.js';
import Blackfly from './Components/subComponents/blackfly.js';
import websiteProj from './Components/subComponents/website.js';
import hotDogProj from './Components/subComponents/hotDogProject.js';
import strainProj from './Components/subComponents/strainTracking.js';
import seniorDesign from './Components/subComponents/seniorDesign.js';


import Footer from './Components/footer.js';


import './App.css';
import './index.css'

require('dotenv').config();

class App extends Component{ 
  
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn : false
    };

    this.updateViewers = this.updateViewers.bind(this);
  }

updateViewers() {
  if(process.env.NODE_ENV === "production"){  //only send if its the real website
    
      const viewerInfo = {
        viewerIP : 'N/A',
        pageViewed : window.location.pathname.toString(),
        timestamp : Date.now()
      }

      axios.post("/views", viewerInfo )
        .then(res => console.log(res.data))
        .catch(err => console.log('Could not send information: ' + err));
   }

}

componentDidMount(){
  this.updateViewers();
}


render(){
  return (
   
    <React.Fragment >
        <Nav />
                  <Router>
                      <Switch>
                        <Route updateViewers={() => this.updateViewers()} exact path = "/" component ={Home} />
                        <Route  path = "/art" component ={Art} />
                        <Route  path = "/fun" component ={Fun} />
                        <Route  path = "/projects">
                        <Route   path = "/projects/home" component ={Projects} />
                          <Route   path = "/projects/blackfly" component ={Blackfly} />
                          <Route   path = "/projects/website" component ={websiteProj} />
                          <Route   path = "/projects/hotdog" component ={hotDogProj} />
                          <Route   path = "/projects/strain" component ={strainProj} />
                          <Route   path = "/projects/senior-design" component ={seniorDesign} />
                        </Route>
                        <Route  path = "/contact" component ={Contact} />
                        <Route path = "/examples" component = {videoExamples}/>
                        <Route path = "/data" component = {HD_Data}/>
                        <Route path = "*" component = {NotFound} status = {404} />
                      </Switch>
                  </Router> 
        <Footer />
     </React.Fragment>
  )
}
}
export default App;

