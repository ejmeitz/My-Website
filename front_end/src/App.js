import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
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
            <Routes>
              <Route updateViewers={() => this.updateViewers()} exact path = "/" element ={<Home/>} />
              <Route  path = "/art" element ={<Art/>} />
              <Route  path = "/fun" element ={<Fun/>} />
              <Route  path = "/projects">
              <Route   path = "/projects/home" element ={<Projects/>} />
                <Route   path = "/projects/blackfly" element ={<Blackfly/>} />
                <Route   path = "/projects/website" element ={<websiteProj/>} />
                <Route   path = "/projects/hotdog" element ={<hotDogProj/>} />
                <Route   path = "/projects/strain" element ={<strainProj/>} />
                <Route   path = "/projects/senior-design" element ={<seniorDesign/>} />
              </Route>
              <Route  path = "/contact" element ={<Contact/>} />
              <Route path = "/examples" element = {<videoExamples/>}/>
              <Route path = "/data" element = {<HD_Data/>}/>
              <Route path = "*" element = {<NotFound/>} status = {404} />
            </Routes>
        </Router> 
        <Footer />
     </React.Fragment>
  )
}
}
export default App;

