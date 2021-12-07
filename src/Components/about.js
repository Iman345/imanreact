import React from 'react'
import "../Styles/about.css";
import aboutImg from "../img/me.png";
import {Link} from 'react-router-dom';


function About() {

   
  return (
      <div className="bg">
    <div className="about comp-space" id="About">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img src={aboutImg} alt="A picture of me" className="me-img" />
          </div>
          <div className="col-2">
            <h1 className="about-heading">About Me</h1>
            <div className="about-log">
              <p className="about-text">
              
           I'm 22 in my fourth year at wits and this is my interactive media website. This website hosts my theory work and practical work. I am interested in decoloniality and social activism so most of the work on this website revolves around those themes.
        
              </p>
              
              <div className="btns">
              
            <Link to="/theory">
            <button className="btns-theory">Theory</button>
                    </Link>
                 
              
                <Link to="/creative">
                  <button className="btns-creative" >Creative</button>
                  </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
   
    </div>
    </div>
  );
}

export default About;