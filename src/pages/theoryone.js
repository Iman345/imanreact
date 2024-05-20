import React from 'react'

import "../Styles/blogs.css";
import image1 from '../img/aitweet.PNG';
import image2 from '../img/aitwo.PNG';
import image3 from '../img/aithree.jpg';
import image4 from '../img/api.PNG';

import image5 from '../img/screenshot.PNG';
import {Link} from 'react-router-dom';





function Theoryone() {


    return (


        
        <div>
         

            <div className="three"><h1 className="page-header">Decolonizing Technology</h1></div>



          
            
            <div className="intro">
                <div className="h-entry" >




              
            
                



                        <li>
                            Giroux, H. (2005). The Terror of Neoliberalism: Rethinking the Significance of Cultural Politics. College Literature.
                        </li>
                        <li>

                            EDRI. If AI is the problem, is debiasing the solution? https://edri.org/our-work/if-ai-is-the-problem-is-debiasing-the-solution/
                        </li>
                    </ul>

                </div>

            </div>
            <div className="more-btn display-flex align-center justify-center paddingxy-30">
                
                <Link to="/theory">
           <button className="more-btn pointer btn">Back</button>
                   </Link>
                   <Link to="/theorytwo">
           <button className="pagebtn pointer btn">Next</button>
                   </Link>
                </div>
        </div>




    );
    
}

export default Theoryone;
