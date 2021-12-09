import React from 'react'

import "../Styles/blogs.css";

import {Link} from 'react-router-dom';


function TheoryTen() {


    return (
        <div>
            <div className="three"><h1 className="page-header"> Final Technical Reflection</h1></div>




            <div className="intro">
                <div className="h-entry" >


<p>
My goals for my website on a technical level is to have a fully responsive react website. Having a responsive website is an important aspect to me because it means that more devices can access your website and thus more people can have access. Accessibility is a central pillar in web design. My website is largely responsive. The blogs are all responsive, the navigation is responsive, the blog cards are responsive, the images and text are all responsive and my image gallery is responsive. My initial prototypes for my internet art are responsive however, the final internet art piece is not responsive due to the colour picker. I could not manage to scale it according to screen size therefor it is not responsive despite the pattern cards being responsive. The kaleidoscope art is not responsive either. Given more time I would have liked to try and have my website me responsive in every aspect.</p>

<p>

My other technical goals were the use of the correct semantic tags and semantic mark-up which is implemented on my website. I want my page to also be accessible to those with visual impairments that might be using screen readers. Therefore, it was important to use meta tags and the alt tag for all images and add an appropriate description. I used the Web accessibility in Mind guide to title my alternative tags appropriately.
</p>
<p>
Another major goal was utilizing react. My website is a react website using the latest version of react. However, using the latest version of react caused many technical difficulties. I tried to return to the older versions of react but with no luck, so I had to try and adjust my website and work with the new version. This meant that some issues I faced I could not fix, for instance I could not use the Switch tag and so I had to redo my websites routing using Routes and Router tags.  This method made it difficult to add functions like scroll to the top. I had a major issue where my pages did not begin at the top but at the bottom of the page. This meant that the user was stuck constantly having to scroll to the top of every new page they clicked on.  I spent a lot of time trying to fix this issue but could not do it by myself. Thanks to Andre, the issue was solved and now my site successfully loads correctly from the top and not the bottom. I also added buttons at the bottom of every blog to navigate to the previous blog or to the next blog this will hopefully allow the user to easily go from blog to blog. I also paid attention to the cursor ensuring that when it hovers on clickable elements it changes to pointer and reverts when the element is not clickable. 
</p>
<p>
A technical difficulty that I was unable to fix is that when my website initially opens it does not open on the homepage. This is due to an error with my Github repository that I was unable to fix. The pages of my website do not reload either which I was also unable to fix and due to fix. I tried making a new repository and adding it to my website, but it still gave the same issues and a new set of its own issues, so I just reverted to my original repository.


</p>

                </div>

            </div>
            <div className="more-btn display-flex align-center justify-center paddingxy-30">
                
                <Link to="/theoryone">
           <button className="more-btn pointer btn">Back</button>
                   </Link>
                   
                   <Link to="/theoryeight">
           <button className="pagebtn pointer btn">Next</button>
                   </Link>
                </div>
        </div>




    );
}

export default TheoryTen;