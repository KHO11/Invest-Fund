import './App.css';
import React from 'react';
import { Link } from "react-router-dom";
 
function News(){
    return (
        <div>
            <h1>News</h1>
            <div className='topnav'>
                <Link to="/"><a href="#">Home</a></Link>
                <Link to="/about"><a href="#">About</a></Link>
                <Link to="/news"><a href="#">News</a></Link>
            </div>
            <section>
                {/* API call to get the section details*/}
                <h2>News Section</h2>
                <p><i>News</i></p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div class="fakeimg" style={{height:"500px"}}>Image</div>
                {/* Database call to upload an image*/}
            </section>
        </div>
    );
};
 
export default News;