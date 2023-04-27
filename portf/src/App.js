import logo from './logo.svg';
import './App.css';
import './Decor/Main.css' 
import './Decor/medium.css'
import './Decor/small.css'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBar from './Komponents/NavBar';
import Header from './Komponents/Header';
import Services from './Komponents/Services';
import AboutMe from './Komponents/AboutMe';
import Background from './Komponents/Background';
import Portfolio from './Komponents/Portfolio';
import Contact from './Komponents/Contact';
import Footer from './Komponents/Footer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Header/>
     <Services/>
     <AboutMe/>
     <Background/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
