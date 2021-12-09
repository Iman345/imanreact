import React from 'react'

import "../Styles/blogs.css";


import {Link} from 'react-router-dom';

function CreativeReflection() {


    return (
        <div>
            <div className="three"><h1 className="page-header">Final Creative Reflection</h1></div>




            <div className="intro">
                <div className="h-entry" >


                
                <p>
                The most important principle to my design of this website is simplicity.  Because having a simple website lets me focus on UI design and UX design. Having clear and concise navigation, buttons and consistency allows for the user to easily navigate from page to page without frustration.  I wanted the theory blogs content to be the focus of the page so on the theory blogs there are no background images or animations as it often looks too cluttered and is distracting. I used two colours as my main colour pallet, pastel pink, pastel blue, and bright purple for any icons. I chose these colours because they are calming yet playful and easy on the eyes. I primarily use white and black for my body text as they are the most readable colours given my colour pallet. To ensure that all content is readable I use “Yuusei Magic” font which is clear and easy to read in all sizes. For consistency I use the font for all my text. 
                </p>
                            
                            <p>
                            To ensure the website is clear and concise, I made sure that every blog page is consistent with each other, all the cards on the blog home pages are the same size, and the buttons all look and act the same on all cards. I also made sure that the navigation is consistent, and the colour scheme is carried across all pages.      </p> 
                            <p>
                            Throughout the process of creating my website I struggled with expressing the creative elements across my website. The theory aspect of my website revolves around technology and the internet and specifically talks to accessibility, digital equality, decolonization and analysing internet art.  To connect to my website’s theory in a creative form, I centred a piece of internet art around Islamic geometric art as a form of decolonizing art. I implemented a gallery to illustrate different real-life examples of Islamic geometric art to supplement the creative component of my website and my internet art. The gallery can be viewed as a slideshow, the images can be downloaded and it is fully responsive.</p>
                            <p>
                            Each pattern will be made up of two or three different colours that the user can choose from. The colours will be from a pre-established pallet that I create. I will have to consider colour-blindness in my curation of different pallets for the player to choose from to ensure the art is visible to the widest range of people. 
                            </p>
                            
                <p>Therefore, patterns have become a form of creative expression across my website. I decided to express my creative components throughout my website by implementing for patterns in subtle ways. I did not want to overwhelm my website and distract my users with an abundance of patterns everywhere, so I use a pattern in my header that is on all pages to display the website revolves around technology by having a circuit board pattern. I use a geometric pattern in my footer which appears on every page to highlight the creative component of my project. I also use Islamic geometric patterns in the background of my homepage and about page to add more visual representation of my creative components. The creative blog page has cards which all have geometric patterns in the background to further add a little bit of the creative side to the websites design. My theory page does not have patterns on the cards because the focus of the theory is the content so instead, I used relevant icons to represent the subject matter of each blog.</p>
                
                    
                 <p>
                 I am content with the consistency throughout the website in terms of style and colour. It is easy to navigate, and the content is presented in appealing and simple manner. I would have liked to find more ways to incorporate patterns in a subtle but noticable way across my website like in the hover but I am pleased witht the patterns present in the header and footer.
                 </p>
                        
                 </div>

            </div>

            <div className="more-btn display-flex align-center justify-center paddingxy-30">
                
                <Link to="/creativeseven">
           <button className="more-btn pointer btn">Back</button>
                   </Link>
                   
                   <Link to="/creativeone">
           <button className="pagebtn pointer btn">Next</button>
                   </Link>
                </div>
        </div>




    );
}

export default CreativeReflection;