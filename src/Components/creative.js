import React from "react";
import "../Styles/creative.css";
import Bg1 from '../img/bg2.jpg';
import Bg2 from '../img/bg3.jpg';
import Bg3 from '../img/bg4.jpg';
import Bg4 from '../img/bg5.jpg';

import {Link} from 'react-router-dom';

function Creative() {
    return (
        <div className="creative-blogs comp-space" id="Creative">
          <div className="creative-section">
            <h1 className="heading">My Creative Blogs!</h1>
            
           
          </div>
           <div className="container">
               <div className="row">
                 
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box-img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg1} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>

                         <div className="creative-log absolute">
                         <h5 className="creative-text">Creative Reflection</h5>
                         <h4 className="creative-text">A blog about the website's design</h4>
                         <Link to="/creativeone">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>
    
    
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box-img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg2} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">Internet Art proposal</h5>
                         <h4 className="creative-text">Read about my creative project!</h4>
                         <Link to="/creativetwo">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>
    
    
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box__img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg3} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">Art Prototype 1</h5>
                         <h4 className="creative-text">Look at my art</h4>
                         <Link to="/creativethree">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>
    
    
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box__img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg4} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">Updated Creative proposal and Reflection Two</h5>
                         <h4 className="creative-text">A look at what I have implemented</h4>
                         <Link to="/creativefour">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>
    
    
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box__img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg3} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">Prototype Two</h5>
                         <h4 className="creative-text">art</h4>
                         <Link to="/creativefive">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>
    
    
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box-img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg1} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">Kaleidoscope art</h5>
                         <h4 className="creative-text">Another piece of internet art</h4>
                         <Link to="/creativesix">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>


                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box__img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg2} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">Final Internet Art</h5>
                         <h4 className="creative-text">The final product</h4>
                         <Link to="/creativeseven">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box__img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg3} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">Gallery</h5>
                         <h4 className="creative-text">A collection of Islamic geometric art from around the globe</h4>
                         <Link to="/gallery">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>
    

                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box__img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg4} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">Final Creative Reflection</h5>
                         <h4 className="creative-text">The final thoughts on the website's design</h4>
                         <Link to="/creativereflection">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                     
                 </div>
                 
    
                 <div className="col-3">
                     <div className="creative-box pointer relative">
                         <div className="creative-box__img pointer relative">
                             <div className="creative-img-box">
                                 <img src={Bg1} alt="" className="creative-img" />
                             </div>
                             <div className="mask"></div>
                         </div>
                         <div className="creative-log absolute">
                         <h5 className="creative-text">Internet Art Rationale</h5>
                         <h4 className="creative-text">Discussing my final internet art</h4>
                         <Link to="/creativeeight">
            <button className="creative-btn">Read More</button>
                    </Link>
                         </div>
                     </div>
                 </div>




                 
    
               </div>
           </div>
        </div>
      );
    }
  export default Creative;