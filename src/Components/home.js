import React from 'react'
import Cover from '../img/coverimg.png'
import "../Styles/home.css";
import {Link} from 'react-router-dom';



function Home() {


    return (
  <div className="bg">
<div className="about comp-space" id="home">
      <div className="container">
        <div className="row">
          <div className="col-2">
           <div className="cover"> <img src={Cover} alt="Pink African continent" className="sc"/></div>
          </div>
          <div className="col-2">
            <h1 className="page-header">Welcome to my website</h1>
       
              <p className="about-text">
              This website is all about my interactive media course. I have both theory and creative blogs for you to browse. The theory is all about decolonizing and social justice when it comes to technology and the internet. My creative blogs experiment with patterns and colours of geometric art. Let's explore them!
           
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
    );
}

export default Home;
