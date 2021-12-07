
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";



import Home from './Components/home';
import About from './Components/about';
import Theory from './Components/theory';
import Creative from './Components/creative';
import Theoryone from './pages/theoryone';
import Theorytwo from './pages/theorytwo';
import Theorythree from './pages/theorythree';
import Theoryfour from './pages/theoryfour';
import Theoryfive from './pages/theoryfive';
import Theorysix from './pages/theorysix';
import Theoryseven from './pages/theoryseven';
import Theoryeight from './pages/theoryeight';
import Creativeone from './pages/creativeone';
import Creativetwo from './pages/creativetwo';
import Creativethree from './pages/creativethree';
import Creativefour from './pages/creativefour';
import Creativefive from './pages/creativefive';
import Creativesix from './pages/creativesix';
import Footer from './pages/footer';
import Creativeseven from './pages/creativeseven';
import { Gallery } from './pages/gallery';
import Theorynine from './pages/theorynine';



function App() {
  return (
    <div className="App"> 
   
    <Router>

    <nav className="navbar">
<ul className='nav-links'><li className="logo"><li><Link to="home">Iman's corner</Link></li></li></ul>
<ul className="nav-links">

<input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
    
       <div class="menu">
       <li><Link to="/about">About</Link></li>
<li><Link to="theory">Theory</Link></li>
<li><Link to="creative">Creative</Link></li>


</div>
</ul>
</nav>

<Routes>
<Route exact path="/" exact element={<Home />} />
<Route exact path="/home" exact element={<Home />} />
<Route exact path="about" element={<About />} />
<Route exact path="theory" element={<Theory />} />
<Route exact path="creative" element={<Creative />} />
<Route exact path="newpage" element={<newpage />} />
<Route exact path="theoryone" element={<Theoryone />} />
<Route exact path="theorytwo" element={<Theorytwo />} />
<Route exact path="theorythree" element={<Theorythree />} />
<Route exact path="theoryfour" element={<Theoryfour />} />
<Route exact path="theoryfive" element={<Theoryfive />} />
<Route exact path="theorysix" element={<Theorysix />} />
<Route exact path="theoryseven" element={<Theoryseven />} />
<Route exact path="theoryeight" element={<Theoryeight />} />
<Route exact path="creativeone" element={<Creativeone />} />
<Route exact path="creativetwo" element={<Creativetwo />} />
<Route exact path="creativethree" element={<Creativethree />} />
<Route exact path="creativefour" element={<Creativefour />} />
<Route exact path="creativefive" element={<Creativefive />} />
<Route exact path="creativesix" element={<Creativesix />} />
<Route exact path="creativeseven" element={<Creativeseven />} />
<Route exact path="gallery" element={<Gallery />} />
<Route exact path="theorynine" element={<Theorynine />} />
</Routes>






    </Router>
    
    <Footer/>
    </div>
    
  );
}

export default App;
