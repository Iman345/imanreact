import React from 'react';
import {Link} from 'react-router-dom';
import "../Styles/blogs.css";



function Theoryeight() {

    
    return (
        <div>
            <div className="three"><h1 className="page-header">Internet Art and Museums</h1></div>




            <div className="intro">
                <div className="h-entry" >


<p>
In their paper, <i> Challenges Facing Artists and Institutions when Showcasing and Collecting Internet Art</i>, Mazwi Vezi discusses defines internet art and the curation process of internet art on a national and international level. The paper investigates how curation of internet art is done or why it is not done in a South African context and all the challenges that come with the curation. This blog focuses on Vezi’s first chapter, discussing what is internet art and how it is entirely different from the art that dresses the walls of museums. Museums and galleries as well as curators aren’t well-versed enough regarding internet art and thus it is difficult to curate. This is a major reason that internet art is rarely showcased at institutes that collect and display art. 
</p>

<p>

Vezi classifies something as internet art when its primary creation, medium and source of distribution and presentation is the internet. Internet Art can be anything from text-based works to the embedded code of the work itself.  Internet art offers exciting avenues for artists to explore through software, programming, and interaction. Technology is always rapidly changing and adapting especially software, Vezi discusses that this gives internet art an erratic nature. An entire internet art piece can be lost if the software or programming language it utilises becomes obsolete. For instance, many websites and games on the internet will no longer function because they hinge on Adobe Flash which has become old and obsolete despite being used everywhere just a few years ago. This makes collecting internet art pieces for curation difficult because it would require frequent and expensive maintenance to keep all the different pieces operable. Vezi also mentions that while curation is an important process to expose important cultural products, internet artists do not make art with the same intentions as more traditional artists. Traditional artists may aim for museums and curation, but internet artists do not share the same aspirations. Internet art has a rebellious flair to it and being confined to an institution and being commercialised does not fit with what the artists intended for their work. Museums have symbolized a sort of elitism that internet artists reject and therefor they do not build their art with curation or museums in mind. 
</p>

<p>

Internet art is mostly free to view or interact with and is embedded with interaction at its core. Interaction is a sin in museums where the art is meant to be observed but never touched but internet art engages with its audience entirely differently. Every audience member could have a completely unique outcome because of interacting with the internet art, they can actively participate in the work giving a much more intimate feel and potential for a greater emotional impact. The interactive nature of internet art is difficult for museums to adapt to and grapple with thus displaying internet art is increasingly difficult for these spaces. 
</p>
<p>
Internet art cannot be viewed, displayed, or even documented the same as an oil painting or 3D installation. Galleries and museums still struggle with outdated practices making internet art increasingly rare and difficult to be curated by them. If curation of internet is done, the curator cannot use standard practices instead new practises made specifically with internet art must be implemented. With new and modernised methods of curation and collection of internet art it may be possible to see more internet art in gallery spaces and museums. 



</p>

                </div>

            </div>
            <div className="more-btn display-flex align-center justify-center paddingxy-30">
                
                <Link to="/theoryseven">
           <button className="more-btn pointer btn">Back</button>
                   </Link>
                   
                   <Link to="/theorynine">
           <button className="pagebtn pointer btn">Next</button>
                   </Link>
                </div>
        </div>




    );
}

export default Theoryeight;
