import React from 'react'

import "../Styles/blogs.css";
import {Link} from 'react-router-dom';



function Theoryfour() {


    return (
        <div>
            <div className="three"><h1 className="page-header">Digital Inclusion and Reform</h1></div>




            <div className="intro">
                <div className="h-entry" >







                <p> Digital Inclusion is a movement that campaigns for the inclusion of all people especially marginalized and excluded groups to have access to Information and Communication Technology, this includes hardware, software, and the internet.  Technology is rapidly advancing but according to the Internet Justice Society only 39.3% of African people have access to ICT’s. Life without ICT access will further disadvantage those who are already disadvantaged. We live in an information society so it is only fair that all people should have the same access to the internet as a human right.  ICT is imperative to social, economic, and democratic spheres of life and people without access to it are at a disadvantage especially during COVID-19 when going to places in person is not a reliable option. For instance, libraries closed during lockdown, bookstores closed as well, therefor, information was limited to those who have internet access and enough data to download or view the research or information needed. Schooling was stopped and so people had to rely on internet access and technology to receive an education and those without the means were excluded and disadvantaged because they could not receive online education the same way their more privileged peers could. People without internet access are not the only people excluded. Websites and technology are designed for non-disabled people leading to people who are differently abled to find difficulty with websites and technologies because they were not considered in their design. For instance, blind children were not permitted to go into school thus had to receive their education online. Most websites do not make use of the correct semantic tags to ensure accessibility is possible for blind users. Often websites lack “alt” tags and use busy and cluttered pages creating a page difficult for a screen reader to appropriately relay information. </p>
                    <p> With all these issues surrounding digital inclusion and digital equality it is our duty as South African innovators and creatives to try and help find solutions. Here are some ways we can get involved in shaping policy and trying to increase accessibility, inclusion and equality. </p>
                    <p> A formidable program to apply to is AfriSIG (The African School on Internet Governance). Every year the Association for Progressive Communications runs AfriSIG which is a five-day residential course. AfriSIG has this event online now since COVID-19 struck. The overall goal of AfriSIG is to create African innovators who will change internet governance structures for the better and lead Africa’s technological development and internet access ethically with goals for equality and inclusivity. AfriSIG also prepares African technologists to participate in international policy making discussions and local government policy.  Participating in AfriSIG allows locals to engage with the policies and issues facing their own countries and facing most African countries, giving opportunities to people to find solutions and how to start laying the foundation for change. Learn more about AfriSIG <a class="here" href="https://afrisig.org/">here</a> </p>
                    
                    <p>
                    Another organisation that offers panels, discussions and exhibitions that will transform Africa’s internet climate is the Collaboration on International ICT Policy for East and Southern Africa (CIPESA) who host the Forum on Internet Freedom Africa or FIFA. FIFA hosts events and exhibitions hosted by tech industry professionals that anyone can register for and attend them online. The exhibitions showcase new technology and local inventions and discusses how it can be implemented in African states. FIFA has panels on digital rights and internet governance and what concerns revolve around them focusing on a purely African context. FIFA’s main goal is to change international internet governance to include Africa because it is rooted in a Eurocentric perspective and therefor only caters to fulfil Western needs. FIFA also works to discuss potential opportunities that would close the gap in digital inequality as well as how digital rights like privacy are being upheld and how they can better be protected.  Read more about FIFA21 <a class="here" href="https://cipesa.org/2021/08/forum-on-internet-freedom-in-africa-2021-fifafrica21-opens-for-registration/">here</a>
                    
                    </p>
                    
                    <p>
                    Lastly, there’s the international organisation IGF, The Internet Governance Forum. The IGF aims to have people from all around the world join forces to discuss public policies around internet governance. Usually, delegates are sponsored to attend the Forum which is hosted internationally by one country. This year the government of Poland will host the IGF and will be online and in-person becoming a hybrid event. The theme for this year’s IGF is ‘’Internet United’ focusing on <q> Economic and social inclusion and human rights </q>. Delegates can speak and interact with people from different countries and professionals from the private and public sector working on internet infrastructure and exchange ideas and feedback on any proposals for policies. The IGF has their own mandate which acts as their agenda, it has principles like: 
                    <ul className='dots' >
                    <li>Discussing public policy issues related to key elements of Internet governance to foster the sustainability, robustness, security, stability and development of the Internet.  </li>
                    <li>Facilitating discourse between bodies dealing with different cross-cutting international public policies regarding the Internet and discuss issues that do not fall within the scope of any existing body. </li> 
                    <li>Interface with appropriate inter-governmental organizations and other institutions on matters under their purview. </li>
                    <li>Advise all stakeholders in proposing ways and means to accelerate the availability and affordability of the Internet in the developing world. </li>
                    <li>Contribute to capacity building for Internet governance in developing countries, drawing fully on local sources of knowledge and expertise. </li>
                    
                    <li>Publish its proceedings</li>
                    
                    
                    </ul>
                    If a local South African has an initiative they would like to implement regarding the internet landscape, the IGF will listen to the proposal and consider aiding and the initiative as part of their National and Regional IGF initiatives (NRIs).
                    </p>
                    <p>NRI’s function independently from the IGF even though they may be endorsed by IGF. The creator of the initiative has free reign if they uphold the global principles of the IGF which equate to being ethical and inclusive. This gives local people a chance to drive the change they would like to see in their own internet landscape whether it be environmental change, accessibility, inclusion, or privacy. Read more about the IGF <a class="here" href="https://www.intgovforum.org/multilingual/content/invitation-to-the-sixteenth-annual-meeting-of-the-internet-%E2%80%8Egovernance-forum-igf-%E2%80%8E">here</a> </p>
                    <p> There are a multitude more of organisations that South Africans can participate in to gain more experience and connections with internet governance and digital rights and inclusion to drive change in the South African technological space. We especially need these organisations to challenge government who still ignore the MIOS (Minimum Interoperability Standards) and create websites that are purely inaccessible by not using the prescribed open standards. For example, everyone needs access to the SARS website, but the SARS website uses flash which is propriety and does not meet the criteria to be considered an open standard. The website functioned mostly as a giant image making it incredibly difficult for screen-readers to use. SARS went against government policy and their inaccessible website forced them create their own browser purely to run the SARS website. This shows lack of consideration for South African citizens and displays outdated practises by using Flash which has been dead for a long period of time. Issues like these need to be taken up with government and challenged by local organisations and it starts by getting involved in the conversations like the ones hosted by the IGF, FIFA and AfriSIG. </p>
                    


            </div>
        </div>
        <div className="more-btn display-flex align-center justify-center paddingxy-30">
                
                <Link to="/theorythree">
           <button className="more-btn pointer btn">Back</button>
                   </Link>
                   
                   <Link to="/theoryfive">
           <button className="pagebtn pointer btn">Next</button>
                   </Link>
                </div>
        </div>




    );
}

export default Theoryfour;
