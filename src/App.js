import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
// import About from "./components/About/About";

import "./App.css";

const App = () => {
  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     console.log('resizing');
  //   });
  // }, [])
  return (
    <div className="container-fluid dev">
      {/* <Home /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      <Resume />
    </div>
  );
};

export default App;

// class App extends React.Component{
//   constructor(){
//     super();

//     this.state = {
//       sidebar: true
//     }
//   }

//   sidebarToggle = () => {
//     this.setState({
//       sidebar: !this.state.sidebar
//     })
//   }

//   sidebarCheck = () => {
//     if(window.innerWidth > 786){
//       this.setState({sidebar: true});
//     }else{
//       this.setState({sidebar: false});
//     }
//   }

//   componentDidMount(){
//     this.sidebarCheck();

//     window.addEventListener('resize', () => {
//       this.sidebarCheck();
//     });
//   }

//   render(){
//     return (
//       <Router>

//           <Sidebar sidebar={this.state.sidebar} sidebarToggle={this.sidebarToggle}/>
//           {/* <Home exact path="/home"/> */}

//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>

//             <Route exact path="/contact">
//               <Contact />
//             </Route>

//             <Route exact path="/portfolio">
//               <Portfolio/>
//             </Route>

//             <Route exact path="/resume">
//               <Resume/>
//             </Route>

//             <Route exact path="/about">
//               <About/>
//             </Route>

//           </Switch>

//       </Router>
//     )
//   }

// }

// export default App;
