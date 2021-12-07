import React from 'react'

import "../Styles/scope.css";
import styled from "styled-components";
import {Link} from 'react-router-dom';


       
        const Kaleidoscope = styled.div`
          ${(props) => {
            if (props.index % 2 !== 0) {
              return (
                "transform: scale(-1, 1) rotate(" +
                (360 * (props.index - 1)) / props.totalCount +
                "deg)"
              );
            }
            return (
              "transform: rotate(" + (360 * props.index) / props.totalCount + "deg)"
            );
          }};
          background-image: url("https://arabiconline.eu/wp-content/uploads/2019/11/preview_COLOURBOX2857663-480x300.jpg");
position: absolute;
top: 80%;
 left: 350px;
z-index: 0;
 overflow: hidden;
 height: 40%;
 width: 10%;
  transform-origin: right top;
  animation-duration: 10s;
     animation-name: move;
 animation-iteration-count: infinite;
animation-direction: alternate;
        `;
        
      /*  export default function Creativesix() {
          const paths = new Array(100).fill(0).map((_, index) => index);
          return (
           <div className="spotlight">
           <div className="scope">{paths.map((path) => (
                <Kaleidoscope key={path} index={path} totalCount={paths.length}></Kaleidoscope>
              ))}
            </div>
            </div>

          );
        }
*/

export default function Creativesix() {
  const paths = new Array(14).fill(0).map((_, index) => index);
  return (
    <div className="scope">
      {paths.map((path) => (
        <Kaleidoscope key={path} index={path} totalCount={paths.length}></Kaleidoscope>
      ))}

<div className="scope">
      {paths.map((path) => (
        <Kaleidoscope key={path} index={path} totalCount={paths.length}></Kaleidoscope>
      ))}
    </div>
    <div className="more-btn display-flex align-center justify-center paddingxy-30">
                
                <Link to="/creativefive">
           <button className="more-btn pointer btn">Back</button>
                   </Link>
                   
                   <Link to="/creativeseven">
           <button className="pagebtn pointer btn">Next</button>
                   </Link>
                </div>
    </div>
    
  );
}

