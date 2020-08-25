import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import About from './components/About/About';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      sidebar: true
    }
  }

  sidebarToggle = () => {
    this.setState({
      sidebar: !this.state.sidebar
    }) 
  }

  sidebarCheck = () => {
    if(window.screen.availWidth > 786){
      this.setState({sidebar: true});
    }else{
      this.setState({sidebar: false});
    }
  }

  componentWillMount(){
    this.sidebarCheck();

    window.addEventListener('resize', () => {
      this.sidebarCheck();
    });
  }

  render(){
    console.log('Render');
    return (
      <Router>
  
          <Sidebar sidebar={this.state.sidebar} sidebarToggle={this.sidebarToggle}/>
          {/* <Home exact path="/home"/> */}
  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
  
            <Route exact path="/contact">
              <Contact />
            </Route>
  
            <Route exact path="/portfolio">
              <Portfolio/>
            </Route>
  
            <Route exact path="/resume">
              <Resume/>
            </Route>
  
            <Route exact path="/about">
              <About/>
            </Route>
  
          </Switch>
  
      </Router>
    )
  }

  
}

export default App;
