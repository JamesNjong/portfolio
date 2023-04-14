import logo from "./logo.svg";
import Navbar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import './sassfiles/style.css'
import Header from "./Components/Header";
import Services from "./Components/Services";
import About from "./Components/Aboutme.jsx";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <About />
      <Experience /> 
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
