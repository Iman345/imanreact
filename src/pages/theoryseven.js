import React from 'react'

import "../Styles/blogs.css";
import payblack1 from '../img/whitepeople.jpg';
import payblack2 from '../img/pbt.jpg';

import {Link} from 'react-router-dom';

function Theoryseven() {


    return (
        <div>
            <div className="three"><h1 className="page-header">Internet Art Analysis</h1></div>




            <div className="intro">
                <div className="h-entry" >



                <p>
                        <q><i>
                            
                        Pay Black Time is a play on the phrase “Payback Time,” and also a demand to pay back black people for the hundreds of years of free labour and continuing trauma in the US alone. It is time to pay back / pay black
                            
                            </i></q>- RaFia Santana 
                        </p>

                        
<p>
White supremacy is still heavily prevalent in most societies and especially in America. America is a society built on systematic racism and capitalism which constantly feed white supremacy and continuously disadvantage brown and black people. While brown and black people suffer at the hands of their society and its racist history, the American government does little to aid or end the unjust. Instead, big corporates and governments flourish off of white supremacy and capitalism but there are artists like Rafia Santana who are constantly fighting back and finding ways to bring about some change. This blog discusses how Rafia Santana’s use of net art and the internet for activism through her work #PAYBLACKTIME. 
   </p>
<p>


Santana started the project in 2016 after the idea was born from a facebook post she made, “Can a white friend Postmates me NyQuil and Soup? Is that how this works?” This sparked the flame that would result in #PlayblackTime. Santana devised the idea to use her platform on social media and the internet to request donations from white people for black and brown who need food. Santana created images with her idea and instructions on how to participate. Santana revealed, promoted, and circulated the project through images she made including memes. The images contained what the project was about, how to receive help from the project as well as how to donate and all the posts contained #PAYBLACKTIME. 
</p>

<p>

<q>All orders are paid for by the White Guilt Reparations Fund for white people who ask, “What can I do?” during a time when we have heavily publicized evidence of their race’s direct connection to the continuous suffering and disenfranchisement of Black / Brown people globally. YOU CAN HELP in alleviating our stress by putting $ into my PayPal.me/rafiasworld/20 the account I use to pay for the delivery orders. It is an easy, bare minimum action that has a major impact on real living people. It’s TANGiBLE, it’s DiRECT, it’s iMMEDIATE, it’s #PAYBLACKTiME</q>
</p>
<div className='imgs'>
                    <img src={payblack1} alt="#PAYBLACKTIME internet art" className="sc" width="100" height="300"/>
                    <img src={payblack2} alt="#PAYBLACKTIME internet art" className="sc"width="400" height="400" />
                    
                  
                  
                    
                    </div>
<p>
    
This movement showed how powerful internet art can be because a project like this was only made possible through the internet and internet art created by Santana. Santana was able to launch an entire activist project through visual images she created as an artist. She used memes and other internet vernacular to generate interest and connect with her followers. Using visual art as a medium for the message of the project ensured it was easy to share and the message was simple and clear garnering people’s attention and donations.  Her followers were easily able to share the project with each other and thus create a large network of potential donors. Santana was able to connect with people who needed help through the internet and was able to offer relief to wide array of black and brown people and not only people from her social circle or neighbourhood. 
</p>

<p>

Through her art not only was Santana able to help people but she was also able to spread an important message that black and brown people need justice. White people have historically built themselves on the backs of brown and black people and that has never stopped. Every system in America works against black and brown people from their police and healthcare system to their education system. Santana posts the powerful message that “White People Owe Us the World” as one of her posts. This message helps people see that America isn’t the land of the free or a place where the American dream exists but a place where black and brown people are systematically disadvantaged, and nothing is being done about it and so this is an action someone can take to make a small difference. 
</p>
                </div>

            </div>
            <div className="more-btn display-flex align-center justify-center paddingxy-30">
                
                <Link to="/theorysix">
           <button className="more-btn pointer btn">Back</button>
                   </Link>
                   
                   <Link to="/theoryeight">
           <button className="pagebtn pointer btn">Next</button>
                   </Link>
                </div>
        </div>




    );
}

export default Theoryseven;
