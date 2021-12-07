import React from 'react'

import "../Styles/blogs.css";

import {Link} from 'react-router-dom';


function Theorysix() {


    return (
        <div>
            <div className="three"><h1 className="page-header">Technical Reflection 2.0</h1></div>




            <div className="intro">
                <div className="h-entry" >


<p>
For this assignment, my focus was on converting my website from a purely html, css and vanilla JavaScript website to a react app. React allows for mobile and desktop applications to be made. React also offers an avenue for an interaction between the use and the application. My focus lied on keeping the website responsive and simple but utilising different react packages and features. The project uses many npm packages such as npm icons and the colour picker. The idea was to explore react and translate my original website into a jsx project.  I wanted to add a responsive navbar as my first challenge for react. My main challenge was learning to use Routes instead of Switch because of the version of react-router-dom that I had, that did not allow me to use Switch. The website does contain a drop-down menu that is accessible on mobile phones and small screens. My next challenge was ensuring that all the blog cards on my website were the same height and length and were responsive as well. My original website did not contain cards that were the same height, and it would often cut off the read more button. The changes I have made ensure that the cards scale with the screen, are all the same size and no information and buttons are cut off. Additionally, I wanted to add more life to my website by adding more hover effects over cards and links. My other main technical goals were to make sure that the images and text of my website were responsive as well. This was achieved; however, the images still need tweaking as they do not scale small enough on small screens. A flaw on the technical side is that the page does not start at the top of the page when changing between different locations on the website. To make navigation on the website easier I have added a back button on the blogs. I wanted to focus on clean navigation and ensure the user has an easy experience exploring the website. 
</p>

<p>

My creative yet technical challenge was the internet art challenge. For this I wanted to create patterns of geometric art inspired by African and Muslim geometric patterns. For this project I tried to use react components to generate patterns, but I was unable to produce the patterns I envisioned for my project. Instead, I opted to create the patterns using CSS instead of JavaScript and would add interactivity to the art via JavaScript and react. I managed to create a colour picker using react, but its functionality is still in its development phase. The colour picker works and changes the colour of my patterns, but I am yet to make the colour picker responsive and allow it to be easily used from anywhere on the page. I need to style the colour picker similarly to a sticky navbar so that the user can play with the colours from any point in the page. For my experimentation with kaleidoscopes, I need to try and make the art responsive and add interactive elements such as zoom and changing size. 

</p>


                </div>

            </div>
            <div className="more-btn display-flex align-center justify-center paddingxy-30">
                
                <Link to="/theoryfive">
           <button className="more-btn pointer btn">Back</button>
                   </Link>
                   
                   <Link to="/theoryseven">
           <button className="pagebtn pointer btn">Next</button>
                   </Link>
                </div>
        </div>




    );
}

export default Theorysix;
