import Button from 'react-bootstrap/Button';
import './App.css';
import './Zoo.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Zoo/Home';
import Aboutpark from './Zoo/Aboutpark';
import Safari from './Zoo/Safari';
import Contact from './Zoo/Contact';
import Animal from './Zoo/Animal';
import Propsan from './Zoo/Propsan';

function App() {
  return (
    <div className="App">
      <div className='main'>
      <BrowserRouter>
<div className='link'>
<link/>
<header>
<ul>
  <Link to="/" id="link">HOME</Link>
  <Link to="/about" id="link">ABOUT PARK</Link>
  <Link to="/safari" id="link">SAFARI</Link>
  <Link to="/animal" id="link">ANIMAL</Link>  
  <Link to="/contact" id="link">CONTACT</Link>
  </ul> 
  </header>
  </div> 

       <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<Aboutpark />}></Route>
        <Route path='/safari' element={<Safari />}></Route>
        <Route path='/animal' element={<Propsan />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
       

      </Routes>
      </BrowserRouter>
</div>
<footer>
copyright 2020-All rights reserved
</footer>

    </div>);
}
export default App;
