import React, { useState } from "react";

import { SketchPicker } from "react-color";
import '../Styles/creative.css';
import { Link } from "react-router-dom";


export default function Creativeseven() {
  const [color, setColor] = useState("#ff0000");
  return (
    
    <div>
        <div className="colourpicker">
      <SketchPicker
        color={color}
        onChangeComplete={color => {
          setColor(color.hex);
        }}
      />
      </div>
     <div className="patterns">
      <div
        style={{

          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
        <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
 <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
       <div
        style={{
        
          backgroundColor: color,
         
          transition: "ease all 500ms"
        }}
        class="card"

      />
      
      
    </div>
    <div className="more-btn display-flex align-center justify-center paddingxy-30">
                
                <Link to="/gallery">
           <button className="more-btn pointer btn">Back</button>
                   </Link>
                   
                   <Link to="/creativesix">
           <button className="pagebtn pointer btn">Next</button>
                   </Link>
                </div>
    </div>
    
    
  );
}