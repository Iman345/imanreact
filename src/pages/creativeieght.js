import React from 'react'

import "../Styles/blogs.css";


import {Link} from 'react-router-dom';

function CreativeEight() {


    return (
        <div>
            <div className="three"><h1 className="page-header">Internet Art Rationale</h1></div>




            <div className="intro">
                <div className="h-entry" >


                
                <p>
                My internet art is meant to highlight the beauty and vast possibilities of Islamic geometric art. To create a piece that achieves this goal, I wanted to showcase the patterns and bring awareness to the art form. My internet art is geometric art patterns inspired by Islamic geometric patterns. There are thirty different patterns displayed on thirty different cards. The patterns are made using CSS and the user can change the background colour of the pattern to view the pattern in different colours. The user changes the colours of the background using a React colour picker. The user can just look at the patterns and observe how they are formed and constructed or appreciate all the different combinations or they can engage with the artwork by changing the colours.  To supplement the artwork, I created a gallery of Islamic geometric art that the users can view real life examples of Islamic geometric art from around the world and download them as well. I also display an experimental kaleidoscope using an image of Islamic geometric patterns.       </p>
                            
                            <p>
                            Islam and Islamic culture are often demonized by Western media and represented through negative stereotypes. The art and culture of Islam from around the world is rarely celebrated and appreciated in mainstream media or in Museums or school curriculum. An important theme in my blogs is decolonization. I aim to contribute to the decolonization of art by bringing Islamic geometric art into the spotlight through my internet art. Making the art central and visible will spark discussions and recognition for Islamic geometric art. When looking at my internet art I hope to spark the audiences intrigue into Islamic geometric art. I wish for the art to gain more acknowledgement and allow the audience to appreciate and recognize the beauty behind the abstract art form. Read more about my internet art and how it connects to my decolonization in my blog.  </p> 
                            <p>
                            The art successfully displays different patterns. They align next to each other allowing for multiple patterns to be viewed at the same time. The colour picker works successfully, the user can change colours of a wide variety and view the different patterns in whatever colour they would like. I wanted to display forty patterns but only managed to display thirty due to time constrictions. The thirty patterns do highlight the intricacy and endless possibilities of the geometric patterns. The cards are responsive, but the colour picker is not. Therefore, the internet art is not responsive. Ideally, I would have wanted to have the entire artwork be responsive, but I could not achieve this goal.  The colour picker does move around the page and is a React component fulfilling my goals for the colour picker. However, I wanted the colour picker to move around the page following the mouse does and open and close on click. I did not manage to achieve this and thus the colour picker only moves up and down the page on the left-hand side of the page and is not responsive. The art performs its function, but it could be presented better. 


                             </p>
                      
                            
                
                
                    
                 
                       

               
       
                 </div>

            </div>

            <div className="more-btn display-flex align-center justify-center paddingxy-30">
                
                <Link to="/creativereflection">
           <button className="more-btn pointer btn">Back</button>
                   </Link>
                   
                   <Link to="/creativeone">
           <button className="pagebtn pointer btn">Next</button>
                   </Link>
                </div>
        </div>




    );
}

export default CreativeEight;