import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Components/Footer';


function App() {
  return (
     <>
    <Navbar />
    <div className="main">
   <Home />
    </div>
   <About />
   <Contact />
   <Footer />
    </>
    

  );
}

export default App;
