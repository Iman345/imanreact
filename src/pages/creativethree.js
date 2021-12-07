



import React from "react";
import "../Styles/art.css";


import {Link} from 'react-router-dom';


function Creativethree() {

   
    return (
<div> <h1 class="page-header">Geometric patterns</h1>
        <div className='patterns' id="art-container">
 
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
<div class='card'></div>
</div>   
  
<div className="more-btn display-flex align-center justify-center paddingxy-30">
                
                <Link to="/creativetwo">
           <button className="more-btn pointer btn">Back</button>
                   </Link>
                   
                   <Link to="/creativefour">
           <button className="pagebtn pointer btn">Next</button>
                   </Link>
                </div>
     
    </div>
  );
}

export default Creativethree;

