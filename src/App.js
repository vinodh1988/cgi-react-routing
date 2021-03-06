import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Home } from './components/Home';
import { Video } from './components/Video';
import { OfferComponent, ReviewComponent } from './Redux/mappings/componentMappings';
import { Course } from './components/Course';
import { Resource } from './components/Resource';

class App extends React.Component{
  render(){
    return(
       <div>
    <Router>
         <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  <a className="navbar-brand" href="#">ABC online</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/courses">Courses</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/offers">Offers</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/reviews">Reviews</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/resources">Resources</Link>
    </li>
  </ul>
</nav>
<div id="content-area">
  <div id="main-area">
          <Route exact path="/" component={Home} />
          <Route path="/videos" component={Video} />
          <Route path="/offers" component={OfferComponent} />
          <Route path="/reviews" component={ReviewComponent}/>
          <Route path="/courses" component={Course}/>
          <Route path="/resources" component={Resource}/>
  </div>
  <div id="right-bar"></div>
</div>
<div id="footer"></div>
</Router>
       </div>
    );
  }
}
export default App;
