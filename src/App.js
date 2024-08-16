
import NavBar from "./componts/NavBar";
import './App.css';
import Banner from "./componts/Banner";
// import Projects from "./componts/Projects";
import Skills from "./componts/Skills";
import Newsletter from "./componts/Newsletter";
import Footer from "./componts/Footer";
import MailchimpForm from "./componts/MailchimpForm";
import Contact from "./componts/Contact";
import Contactus from "./componts/Contactus";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      {/* <Projects/> */}
      <Skills/>
      <Newsletter/>
      {/* <Contact/> */}
      <Contactus/>
      <Footer/>
      {/* <MailchimpForm/> */}
    </div>
  );
}

export default App;
