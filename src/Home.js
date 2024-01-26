import './App.css';
import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Invest & Fund</h1>
      <div className="topnav">
        <Link to="/"><a href="#">Home</a></Link>
        <Link to="/about"><a href="#">About</a></Link>
        <Link to="/news"><a href="#">News</a></Link>
      </div>

      <div className='row'>
        <div className="side">
          <h2>About Me</h2>
          <div class="fakeimg" style={{height:"200px"}}></div>
          {/* Database call to upload an image*/}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. </p>
            <h3>More Text</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <div className="fakeimg" style={{height:"60px"}}></div><br/>
          {/* Database call to upload an image*/}
        </div>

      <div className="main">
        <h2>TITLE HEADING</h2>
        <div className="fakeimg" style={{height:"200px"}}>Image</div>
        {/* Database call to upload an image*/}
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est 
            laborum consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco.</p>
          <br/>
          <h2>TITLE HEADING</h2>
          <h5>Description</h5>
          <div class="fakeimg" style={{height:"200px"}}>Image</div>
        {/* Database call to upload an image*/}
        </div>        
      </div>
    </div>
  );
}

export default Home;
