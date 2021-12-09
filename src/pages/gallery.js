import React from 'react';
import "./gallery.css";
import "../Styles/blogs.css";
import { SRLWrapper } from "simple-react-lightbox";

export const Gallery = () => {

    return (
<div>
    <h1 className="page-header">Gallery</h1>
   
    <p className="creative-p"> Click on any image to view the gallery in fullscreen as a slideshow or download the image.
                           
                           
                              </p>
                            
        <div className="image-gallery"> 
         
            
        <SRLWrapper>
            <div className="galleryimg" style={{width: "100%", display: 'flex', flexWrap: "wrap"}}>
                <div style={{width: "25%", margin: 10 }}>
                    <img className="galleryimg" alt="Dome decoration of Selimiye Mosque in Turkey by Ihsan Gercelman "
                    src={require('../images/image1.jpeg').default} style={{width: "100%"}} />
                </div>
                <div className="galleryimg" style={{width: "25%", margin: 10 }}>
                    <img alt="Geometric pattern on a wall of Alhambra palace in Spain" src={require('../images/image2.jpeg').default} style={{width: "100%"}} />
                </div>
                <div className="galleryimg" style={{width: "25%", margin: 10 }}>
                    <img alt="Infinite Patterns in Albayzin in Spain" src={require('../images/image3.jpeg').default} style={{width: "100%"}} />
                </div>
                <div className="galleryimg" style={{width: "25%", margin: 10 }}>
                    <img alt="Geometric Islamic art and design in the Samarkand Uzbekistan" src={require('../images/image4.jpg').default} style={{width: "100%"}} />
                </div>
                <div  className="galleryimg" style={{width: "25%", margin: 10 }}>
                    <img alt="Tiled patterns on the wall of the Blue Mosque, Istanbul, Turkey" src={require('../images/image5.jpg').default} style={{width: "100%"}} />
                </div>
                <div className="galleryimg" style={{width: "25%", margin: 10 }}>
                    <img alt="Mosque of Aqsunqur in Egypt" src={require('../images/image6.jpg').default} style={{width: "100%"}} />
                </div>
                <div className="galleryimg" style={{width: "25%", margin: 10 }}>
                    <img alt="A geometric tile pattern from the mosque at the Mausoleum of Zaouia Moulay Idriss in Morocco " src={require('../images/image7.jpg').default} style={{width: "100%"}} />
                </div>
                <div  className="galleryimg" style={{width: "25%", margin: 10 }}>
                    <img alt="Ceramic tile with geometric patterns in the Nasir-ol-Molk Mosque in Shiraz, Iran" src={require('../images/image8.jpg').default} style={{width: "100%"}} />
                </div>
                <div className="galleryimg" style={{width: "25%", margin: 10 }}>
                    <img alt="Saint Petersburg Mosque, Russia" src={require('../images/image9.jpeg').default} style={{width: "100%"}} />
                </div>
                <div className="galleryimg" style={{width: "25%", margin: 10 }}>
                    <img alt="Nasir al-Mulk Mosque, Iran" src={require('../images/image10.jpg').default} style={{width: "100%"}} />
                </div>
                <div className="galleryimg" style={{width: "25%", margin: 10 }}>
                    <img alt="14th-15th century, Textile Fragment from North Africa" src={require('../images/image12.jpg').default} style={{width: "100%"}} />
                </div>
                <div className="galleryimg" style={{width: "25%", margin: 10 }}>
                    <img alt="Plates in a Cairo market place" src={require('../images/image11.jpg').default} style={{width: "100%"}} />
                </div>
            </div>
        </SRLWrapper>
        </div>
        </div>
    )
}
