import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { Home } from './components/Home';
import { Video } from './components/Video';
import { Offer } from './components/Offer';
import { Review } from './components/Review';
import { Course } from './components/Course';
import { Resource } from './components/Resource';

class App extends React.Component{
  render(){
    return(
       <div>
    <Router>
         <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

  <a class="navbar-brand" href="#">ABC online</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <Link class="nav-link" to="/">Home</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/courses">Courses</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/offers">Offers</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/reviews">Reviews</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/resources">Resources</Link>
    </li>
  </ul>
</nav>
<div id="content-area">
  <div id="main-area">
          <Route exact path="/" component={Home} />
          <Route path="/videos" component={Video} />
          <Route path="/offers" component={Offer} />
          <Route path="/reviews" component={Review}/>
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
