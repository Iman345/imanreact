import React from 'react'
import "../Styles/theory.css"
import {Link} from 'react-router-dom';

function Theory() {
    return (
        <div className="theory comp-space" id="Blogs">

            <div className="heading">
                <h1 className="page-header">Theory Blogs</h1>
                <p className="heading p__color">
                    Read all about the internet and tech
                </p>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="theory-box pointer">
                            <div className="icon">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fill="none" d="M19.629,9.655c-0.021-0.589-0.088-1.165-0.21-1.723h-3.907V7.244h1.378V6.555h-2.756V5.866h2.067V5.177h-0.689V4.488h-1.378V3.799h0.689V3.11h-1.378V2.421h0.689V1.731V1.294C12.88,0.697,11.482,0.353,10,0.353c-5.212,0-9.446,4.135-9.629,9.302H19.629z M6.555,2.421c1.522,0,2.756,1.234,2.756,2.756S8.077,7.933,6.555,7.933S3.799,6.699,3.799,5.177S5.033,2.421,6.555,2.421z"></path>
                                    <path fill="none" d="M12.067,18.958h-0.689v-0.689h2.067v-0.689h0.689V16.89h2.067v-0.689h0.689v-0.689h-1.378v-0.689h-2.067v-0.689h1.378v-0.689h2.756v-0.689h-1.378v-0.689h3.218c0.122-0.557,0.189-1.134,0.21-1.723H0.371c0.183,5.167,4.418,9.302,9.629,9.302c0.711,0,1.401-0.082,2.067-0.227V18.958z"></path>
                                    <line x1="2" y1="20" x2="2" y2="20"></line>
                                </svg>
                            </div>
                            <div className="theory-log">
                                <h1 className="theory-text">Decolonizing the internet</h1>
                                <p className="p theory-text p__color">
                                    This blog discusses Abeba Birhane(2020) paper <i>Algorithmic Colonization of Africa </i>.
                                </p>


                            </div>
                            <Link to="/theoryone">
            <button className="more">Read More</button>
                    </Link>
                        </div>
                       
                       
                               </div>

                    <div className="col-3">
                        <div className="theory-box pointer">
                            <div className="icon">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fill="none" d="M10,15.654c-0.417,0-0.754,0.338-0.754,0.754S9.583,17.162,10,17.162s0.754-0.338,0.754-0.754S10.417,15.654,10,15.654z M14.523,1.33H5.477c-0.833,0-1.508,0.675-1.508,1.508v14.324c0,0.833,0.675,1.508,1.508,1.508h9.047c0.833,0,1.508-0.675,1.508-1.508V2.838C16.031,2.005,15.356,1.33,14.523,1.33z M15.277,17.162c0,0.416-0.338,0.754-0.754,0.754H5.477c-0.417,0-0.754-0.338-0.754-0.754V2.838c0-0.417,0.337-0.754,0.754-0.754h9.047c0.416,0,0.754,0.337,0.754,0.754V17.162zM13.77,2.838H6.23c-0.417,0-0.754,0.337-0.754,0.754v10.555c0,0.416,0.337,0.754,0.754,0.754h7.539c0.416,0,0.754-0.338,0.754-0.754V3.592C14.523,3.175,14.186,2.838,13.77,2.838z M13.77,13.77c0,0.208-0.169,0.377-0.377,0.377H6.607c-0.208,0-0.377-0.169-0.377-0.377V3.969c0-0.208,0.169-0.377,0.377-0.377h6.785c0.208,0,0.377,0.169,0.377,0.377V13.77z"></path>
                                </svg>
                            </div>
                            <div className="theory-log">
                                <h1 className="theory-text">Case Study</h1>
                                <p className="p theory-text p__color">
                                    This blog is an analysis of a net art piece called Phone Story. (Trigger warning mentions of suicide).
                                </p>

                            </div>
                            <Link to="/theorytwo">
            <button className="more">Read More</button>
                    </Link>

                        </div>
                        
                       
                             </div>

                    <div className="col-3">
                        <div className="theory-box pointer">
                            <div className="icon">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fill="none" d="M18.21,16.157v-8.21c0-0.756-0.613-1.368-1.368-1.368h-1.368v1.368v1.368v6.841l-1.368,3.421h5.473L18.21,16.157z"></path>
                                    <path fill="none" d="M4.527,9.316V7.948V6.579H3.159c-0.756,0-1.368,0.613-1.368,1.368v8.21l-1.368,3.421h5.473l-1.368-3.421V9.316z"></path>
                                    <path fill="none" d="M14.766,5.895h0.023V5.21c0-2.644-2.145-4.788-4.789-4.788S5.211,2.566,5.211,5.21v0.685h0.023H14.766zM12.737,3.843c0.378,0,0.684,0.307,0.684,0.684s-0.306,0.684-0.684,0.684c-0.378,0-0.684-0.307-0.684-0.684S12.358,3.843,12.737,3.843z M10,1.448c0.755,0,1.368,0.613,1.368,1.368S10.755,4.185,10,4.185c-0.756,0-1.368-0.613-1.368-1.368S9.244,1.448,10,1.448z"></path>
                                    <path fill="none" d="M14.789,6.579H5.211v9.578l1.368,1.368h6.841l1.368-1.368V6.579z M12.052,12.052H7.948c-0.378,0-0.684-0.306-0.684-0.684c0-0.378,0.306-0.684,0.684-0.684h4.105c0.378,0,0.684,0.306,0.684,0.684C12.737,11.746,12.431,12.052,12.052,12.052z M12.052,9.316H7.948c-0.378,0-0.684-0.307-0.684-0.684s0.306-0.684,0.684-0.684h4.105c0.378,0,0.684,0.307,0.684,0.684S12.431,9.316,12.052,9.316z"></path>
                                </svg>
                            </div>
                            <div className="theory-log">
                                <h1 className="theory-text">Technical Reflection</h1>
                                <p className="p theory-text p__color">
                                    A blog that details the technical aspects of the website and its design
                                </p>

                            </div>
                            <Link to="/theorythree">
            <button className="more">Read More</button>
                    </Link>
                        </div>
                       
                        
                            </div>

                    <div className="col-3">
                        <div className="theory-box pointer">
                            <div className="icon">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fill="none" d="M16.853,8.355V5.888c0-3.015-2.467-5.482-5.482-5.482H8.629c-3.015,0-5.482,2.467-5.482,5.482v2.467l-2.741,7.127c0,1.371,4.295,4.112,9.594,4.112s9.594-2.741,9.594-4.112L16.853,8.355z M5.888,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C6.402,17.137,6.173,17.367,5.888,17.367z M5.203,10c0-0.377,0.19-0.928,0.423-1.225c0,0,0.651-0.831,1.976-0.831c0.672,0,1.141,0.309,1.141,0.309C9.057,8.46,9.315,8.938,9.315,9.315v1.028c0,0.188-0.308,0.343-0.685,0.343H5.888C5.511,10.685,5.203,10.377,5.203,10z M7.944,16.853H7.259v-1.371l0.685-0.685V16.853z M9.657,16.853H8.629v-2.741h1.028V16.853zM8.972,13.426v-1.028c0-0.568,0.46-1.028,1.028-1.028c0.568,0,1.028,0.46,1.028,1.028v1.028H8.972z M11.371,16.853h-1.028v-2.741h1.028V16.853z M12.741,16.853h-0.685v-2.056l0.685,0.685V16.853z M14.112,17.367c-0.284,0-0.514-0.23-0.514-0.514c0-0.284,0.23-0.514,0.514-0.514c0.284,0,0.514,0.23,0.514,0.514C14.626,17.137,14.396,17.367,14.112,17.367z M14.112,10.685h-2.741c-0.377,0-0.685-0.154-0.685-0.343V9.315c0-0.377,0.258-0.855,0.572-1.062c0,0,0.469-0.309,1.141-0.309c1.325,0,1.976,0.831,1.976,0.831c0.232,0.297,0.423,0.848,0.423,1.225S14.489,10.685,14.112,10.685z M18.347,15.801c-0.041,0.016-0.083,0.023-0.124,0.023c-0.137,0-0.267-0.083-0.319-0.218l-2.492-6.401c-0.659-1.647-1.474-2.289-2.905-2.289c-0.95,0-1.746,0.589-1.754,0.595c-0.422,0.317-1.084,0.316-1.507,0C9.239,7.505,8.435,6.916,7.492,6.916c-1.431,0-2.246,0.642-2.906,2.292l-2.491,6.398c-0.069,0.176-0.268,0.264-0.443,0.195c-0.176-0.068-0.264-0.267-0.195-0.444l2.492-6.401c0.765-1.911,1.824-2.726,3.543-2.726c1.176,0,2.125,0.702,2.165,0.731c0.179,0.135,0.506,0.135,0.685,0c0.04-0.029,0.99-0.731,2.165-0.731c1.719,0,2.779,0.814,3.542,2.723l2.493,6.404C18.611,15.534,18.524,15.733,18.347,15.801z"></path>
                                </svg>
                            </div>
                            <div className="theory-log">
                                <h1 className="theory-text">Digital Inclusion and Africa</h1>
                                <p className="p theory-text p__color">
                                    A theory blog about the neglect of digital inclusion and how we can change that.
                                </p>

                            </div>
                            <Link to="/theoryfour">
            <button className="more">Read More</button>
                    </Link>
                        </div>
                      
                           </div>

                    <div className="col-3">
                        <div className="theory-box pointer">
                            <div className="icon">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                   <path fill="none" d="M5.177,17.658c0,0,3.445,1.987,4.823,1.987c2.067,0,4.823-1.987,4.823-1.987c0.024-0.025,0.044-0.054,0.068-0.08H5.109C5.133,17.604,5.153,17.633,5.177,17.658z M8.622,1.583V0.531C6.496,0.973,2.539,2.521,1.376,7.933H0.699c-0.189,0-0.344,0.155-0.344,0.344v1.378C0.354,9.845,0.509,10,0.699,10h0.392c-0.016,0.224-0.026,0.454-0.033,0.689H0.699c-0.189,0-0.344,0.155-0.344,0.344v1.378c0,0.189,0.155,0.344,0.344,0.344h0.439c0.089,0.79,0.262,1.804,0.594,2.849v2.663H4.34c-2.233-2.449-2.264-6.822-2.264-7.01C2.077,4.052,6.353,2.108,8.622,1.583zM10.689,0.354H9.311v2.059h1.378V0.354z M11.378,2.63v0.472H8.622V2.63C6.612,3.147,3.11,4.951,3.11,11.258c0,0,0.004,3.373,1.47,5.632h4.042v-0.689h2.756v0.689h4.042c1.466-2.259,1.47-5.632,1.47-5.632C16.89,4.951,13.388,3.147,11.378,2.63z M5.005,12.035c-0.318-0.364-0.517-0.833-0.517-1.354S4.687,9.69,5.005,9.327V12.035zM6.383,10.026c-0.295,0.078-0.517,0.335-0.517,0.654c0,0.319,0.222,0.576,0.517,0.654v1.395c-0.384-0.032-0.738-0.163-1.033-0.377V9.008c0.296-0.214,0.649-0.345,1.033-0.377V10.026z M7.761,12.353c-0.296,0.214-0.649,0.345-1.033,0.377v-1.395C7.022,11.257,7.244,11,7.244,10.681c0-0.319-0.222-0.576-0.517-0.654V8.631c0.384,0.032,0.738,0.163,1.033,0.377V12.353zM8.105,12.035V9.327c0.318,0.363,0.517,0.833,0.517,1.354S8.423,11.671,8.105,12.035z M10,13.445l-1.378,0.689L10,12.756l1.378,1.378L10,13.445z M11.895,12.035c-0.318-0.364-0.517-0.833-0.517-1.354s0.199-0.991,0.517-1.354V12.035z M13.273,10.026c-0.295,0.078-0.517,0.335-0.517,0.654c0,0.319,0.222,0.576,0.517,0.654v1.395c-0.384-0.032-0.738-0.163-1.033-0.377V9.008c0.296-0.214,0.649-0.345,1.033-0.377V10.026z M14.651,12.353c-0.296,0.214-0.649,0.345-1.033,0.377v-1.395c0.295-0.078,0.517-0.335,0.517-0.654c0-0.319-0.222-0.576-0.517-0.654V8.631c0.384,0.032,0.738,0.163,1.033,0.377V12.353zM14.995,12.035V9.327c0.318,0.363,0.517,0.833,0.517,1.354S15.313,11.671,14.995,12.035z M19.646,9.656V8.278c0-0.189-0.155-0.344-0.344-0.344h-0.678c-1.163-5.413-5.12-6.96-7.246-7.402v1.052c2.269,0.525,6.545,2.469,6.545,9.675c0,0.188-0.031,4.561-2.264,7.01h2.608v-2.663c0.333-1.044,0.505-2.058,0.594-2.849h0.439c0.189,0,0.344-0.155,0.344-0.344v-1.378c0-0.189-0.155-0.344-0.344-0.344h-0.359c-0.007-0.235-0.017-0.465-0.033-0.689h0.392C19.491,10,19.646,9.845,19.646,9.656z"></path>   </svg>

                            </div>
                            <div className="theory-log">
                                <h1 className="theory-text">Internet Acess + the Digital Divide</h1>
                                <p className="p theory-text p__color">
                                    Internet access should be a right and not a luxury, this blog centers on this topic.
                                </p>

                            </div>
                            <Link to="/theoryfive">
            <button className="more">Read More</button>
                    </Link>
                        </div>
                        
                        </div>

                    <div className="col-3">
                        <div className="theory-box pointer">
                            <div className="icon">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                   <polygon fill="none" points="18.198,7.95 3.168,7.95 3.168,8.634 9.317,9.727 9.317,19.564 12.05,19.564 12.05,9.727 18.198,8.634 "></polygon>
							<path fill="none" d="M2.485,10.057v-3.41H2.473l0.012-4.845h1.366c0.378,0,0.683-0.306,0.683-0.683c0-0.378-0.306-0.683-0.683-0.683H1.119c-0.378,0-0.683,0.306-0.683,0.683c0,0.378,0.306,0.683,0.683,0.683h0.683v4.845C1.406,6.788,1.119,7.163,1.119,7.609v2.733c0,0.566,0.459,1.025,1.025,1.025c0.053,0,0.105-0.008,0.157-0.016l-0.499,5.481l5.9,2.733h0.931C8.634,13.266,5.234,10.458,2.485,10.057z"></path>
							<path fill="none" d="M18.169,6.584c-0.303-3.896-3.202-6.149-7.486-6.149c-4.282,0-7.183,2.252-7.484,6.149H18.169z M15.463,3.187c0.024,0.351-0.103,0.709-0.394,0.977c-0.535,0.495-1.405,0.495-1.94,0c-0.29-0.268-0.418-0.626-0.394-0.977C13.513,3.827,14.683,3.827,15.463,3.187z"></path>
							<path fill="none" d="M18.887,10.056c-2.749,0.398-6.154,3.206-6.154,9.508h0.933l5.899-2.733L18.887,10.056z"></path>
                                      </svg>
                            </div>
                            <div className="theory-log">
                                <h1 className="theory-text">Technical Reflection 2</h1>
                                <p className="p theory-text p__color">
                                    Another engaging and exciting blog about the theoritcal world of tech and the internet
                                </p>

                            </div>
                            <Link to="/theorysix">
            <button className="more">Read More</button>
                    </Link>
                 
                        </div>
                        
                      
                    </div>
                    <div className="col-3">
                        <div className="theory-box pointer">
                            <div className="icon">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                   <path fill="none" d="M18.21,16.157v-8.21c0-0.756-0.613-1.368-1.368-1.368h-1.368v1.368v1.368v6.841l-1.368,3.421h5.473L18.21,16.157z"></path>
							<path fill="none" d="M4.527,9.316V7.948V6.579H3.159c-0.756,0-1.368,0.613-1.368,1.368v8.21l-1.368,3.421h5.473l-1.368-3.421V9.316z"></path>
							<path fill="none" d="M14.766,5.895h0.023V5.21c0-2.644-2.145-4.788-4.789-4.788S5.211,2.566,5.211,5.21v0.685h0.023H14.766zM12.737,3.843c0.378,0,0.684,0.307,0.684,0.684s-0.306,0.684-0.684,0.684c-0.378,0-0.684-0.307-0.684-0.684S12.358,3.843,12.737,3.843z M10,1.448c0.755,0,1.368,0.613,1.368,1.368S10.755,4.185,10,4.185c-0.756,0-1.368-0.613-1.368-1.368S9.244,1.448,10,1.448z"></path>
							<path fill="none" d="M14.789,6.579H5.211v9.578l1.368,1.368h6.841l1.368-1.368V6.579z M12.052,12.052H7.948c-0.378,0-0.684-0.306-0.684-0.684c0-0.378,0.306-0.684,0.684-0.684h4.105c0.378,0,0.684,0.306,0.684,0.684C12.737,11.746,12.431,12.052,12.052,12.052z M12.052,9.316H7.948c-0.378,0-0.684-0.307-0.684-0.684s0.306-0.684,0.684-0.684h4.105c0.378,0,0.684,0.307,0.684,0.684S12.431,9.316,12.052,9.316z"></path>     </svg>
                            </div>
                            <div className="theory-log">
                                <h1 className="theory-text">Internet Art Analysis</h1>
                                <p className="p theory-text p__color">
                                  Looking at Rafia Santana's impressive internet art, #PAYBLACKTIME.
                                </p>

                            </div>
                            <Link to="/theoryseven">
            <button className="more">Read More</button>
                    </Link>
                 
                        </div>
                        
                      
                    </div>
                    
                    <div className="col-3">
                        <div className="theory-box pointer">
                            <div className="icon">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fill="none" d="M8.652,16.404c-0.186,0-0.337,0.151-0.337,0.337v2.022c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.022C8.989,16.555,8.838,16.404,8.652,16.404z"></path>
                                    <path fill="none" d="M11.348,16.404c-0.186,0-0.337,0.151-0.337,0.337v2.022c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.022C11.685,16.555,11.535,16.404,11.348,16.404z"></path>
                                    <path fill="none" d="M17.415,5.281V4.607c0-2.224-1.847-4.045-4.103-4.045H10H6.687c-2.256,0-4.103,1.82-4.103,4.045v0.674H10H17.415z"></path>
                                    <path fill="none" d="M18.089,10.674V7.304c0,0,0-0.674-0.674-0.674V5.955H10H2.585v0.674c-0.674,0-0.674,0.674-0.674,0.674v3.371c-0.855,0.379-1.348,1.084-1.348,2.022c0,1.253,2.009,3.008,2.009,3.371c0,2.022,1.398,3.371,3.436,3.371c0.746,0,1.43-0.236,1.98-0.627c-0.001-0.016-0.009-0.03-0.009-0.047v-2.022c0-0.372,0.303-0.674,0.674-0.674c0.301,0,0.547,0.201,0.633,0.474h0.041v-0.137c0-0.372,0.303-0.674,0.674-0.674s0.674,0.302,0.674,0.674v0.137h0.041c0.086-0.273,0.332-0.474,0.633-0.474c0.371,0,0.674,0.302,0.674,0.674v2.022c0,0.016-0.008,0.03-0.009,0.047c0.55,0.391,1.234,0.627,1.98,0.627c2.039,0,3.436-1.348,3.436-3.371c0-0.362,2.009-2.118,2.009-3.371C19.438,11.758,18.944,11.053,18.089,10.674z M5.618,18.089c-0.558,0-1.011-0.453-1.011-1.011s0.453-1.011,1.011-1.011s1.011,0.453,1.011,1.011S6.177,18.089,5.618,18.089z M6.629,13.371H5.474c-0.112,0-0.192-0.061-0.192-0.135c0-0.074,0.08-0.151,0.192-0.174l1.156-0.365V13.371z M8.652,12.521c-0.394,0.163-0.774,0.366-1.148,0.55c-0.061,0.03-0.132,0.052-0.2,0.076v-0.934c0.479-0.411,0.906-0.694,1.348-0.879V12.521z M5.281,10c-1.348,0-1.348-2.696-1.348-2.696h5.393C9.326,7.304,6.629,10,5.281,10z M10.674,12.296c-0.22-0.053-0.444-0.084-0.674-0.084s-0.454,0.032-0.674,0.084v-1.168C9.539,11.086,9.762,11.06,10,11.05c0.238,0.01,0.461,0.036,0.674,0.078V12.296z M12.696,13.146c-0.068-0.024-0.14-0.046-0.2-0.076c-0.374-0.184-0.754-0.386-1.148-0.55v-1.188c0.442,0.185,0.87,0.467,1.348,0.879V13.146zM14.382,18.089c-0.558,0-1.011-0.453-1.011-1.011s0.453-1.011,1.011-1.011c0.558,0,1.011,0.453,1.011,1.011S14.94,18.089,14.382,18.089z M13.371,13.371v-0.674l1.156,0.365c0.112,0.022,0.192,0.099,0.192,0.174c0,0.074-0.08,0.135-0.192,0.135H13.371z M14.719,10c-1.348,0-4.045-2.696-4.045-2.696h5.393C16.067,7.304,16.067,10,14.719,10z"></path>
                                    <path fill="none" d="M10,16.067c-0.186,0-0.337,0.151-0.337,0.337V19.1c0,0.186,0.151,0.337,0.337,0.337s0.337-0.151,0.337-0.337v-2.696C10.337,16.218,10.186,16.067,10,16.067z"></path>
                                </svg>
                            </div>
                            <div className="theory-log">
                                <h1 className="theory-text">Internet Art and Museums</h1>
                                <p className="p theory-text p__color">
                                   A short blog discussing internet art (what it is) and why it is not curated in museums just yet.
                                </p>

                            </div>
                            <Link to="/theoryeight">
            <button className="more">Read More</button>
                    </Link>
                 
                        </div>
                        
                      
                    </div>
                    <div className="col-3">
                        <div className="theory-box pointer">
                            <div className="icon">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                   <path fill="none" d="M18.21,16.157v-8.21c0-0.756-0.613-1.368-1.368-1.368h-1.368v1.368v1.368v6.841l-1.368,3.421h5.473L18.21,16.157z"></path>
							<path fill="none" d="M4.527,9.316V7.948V6.579H3.159c-0.756,0-1.368,0.613-1.368,1.368v8.21l-1.368,3.421h5.473l-1.368-3.421V9.316z"></path>
							<path fill="none" d="M14.766,5.895h0.023V5.21c0-2.644-2.145-4.788-4.789-4.788S5.211,2.566,5.211,5.21v0.685h0.023H14.766zM12.737,3.843c0.378,0,0.684,0.307,0.684,0.684s-0.306,0.684-0.684,0.684c-0.378,0-0.684-0.307-0.684-0.684S12.358,3.843,12.737,3.843z M10,1.448c0.755,0,1.368,0.613,1.368,1.368S10.755,4.185,10,4.185c-0.756,0-1.368-0.613-1.368-1.368S9.244,1.448,10,1.448z"></path>
							<path fill="none" d="M14.789,6.579H5.211v9.578l1.368,1.368h6.841l1.368-1.368V6.579z M12.052,12.052H7.948c-0.378,0-0.684-0.306-0.684-0.684c0-0.378,0.306-0.684,0.684-0.684h4.105c0.378,0,0.684,0.306,0.684,0.684C12.737,11.746,12.431,12.052,12.052,12.052z M12.052,9.316H7.948c-0.378,0-0.684-0.307-0.684-0.684s0.306-0.684,0.684-0.684h4.105c0.378,0,0.684,0.307,0.684,0.684S12.431,9.316,12.052,9.316z"></path>     </svg>
                            </div>
                            <div className="theory-log">
                                <h1 className="theory-text">Technical Reflection 3</h1>
                                <p className="p theory-text p__color">
                              Final Technical Reflection on my website and how it has progressed since its initial launch.
                                </p>

                            </div>
                            <Link to="/theorynine">
            <button className="more">Read More</button>
                    </Link>
                 
                        </div>
                        
                      
                    </div>
                    </div>

                   

                </div>
            </div>
            
        
    );
}

export default Theory;
