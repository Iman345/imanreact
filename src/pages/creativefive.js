

import React, { useState } from "react";

import { SketchPicker } from "react-color";
import '../Styles/creative.css';
import { Link } from "react-router-dom";


export default function Creativefive() {
  const [color, setColor] = useState("#ff0000");
  return (
    
    <div>
      <SketchPicker
        color={color}
        onChangeComplete={color => {
          setColor(color.hex);
        }}
      />
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
                
                <Link to="/creativesix">
           <button className="more-btn pointer btn">Back</button>
                   </Link>
                   
                   <Link to="/creativefour">
           <button className="pagebtn pointer btn">Next</button>
                   </Link>
                </div>
    </div>
    
    
  );
}