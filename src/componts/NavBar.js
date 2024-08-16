import {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import   logo1 from "../assets/logo1.png";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";



function BasicExample() {
    const [activeLink,setActivLink] = useState ('home')
    const [scolled,setScrolled] = useState ('false')


        useEffect (()=>{
            const onScroll = ()=>{
                if (window.scroll > 50){
                    setScrolled(true)
                }else {
                    setScrolled(false);
                }
                
            }
            window.addEventListener("scroll",onScroll);

            return () => window.removeEventListener("scroll", onScroll);




        },[])

const onUpdateActiveLink = (value)=>{
    setActivLink(value);
}





  return (
    <Navbar  expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">React</Navbar.Brand> */}

        <Navbar.Brand href="#home">
            <img src={logo1} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-Link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#project" className={activeLink ==='project' ? 'active navbar-Link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('project')}>Project</Nav.Link>
            <Nav.Link href="#skills" className={activeLink ==='skills' ? 'active navbar-Link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>skills</Nav.Link>
            {/* <Nav.Link href="#contact" className={activeLink ==='contact' ? 'active navbar-Link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('Contact')}>contact</Nav.Link> */}
            <Nav.Link href="#contactus" className={activeLink ==='contactus' ? 'active navbar-Link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contactus')}>Contactus</Nav.Link>
            
          </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/digvijay-mahadik/"> <img src={navIcon1} alt="" /> </a>
                    <a href="http://wa.me/7057194242"> <img src={navIcon2} alt="" /> </a>
                    <a href="http://wa.me/7057194242"> <img src={navIcon3} alt="" /> </a>
                
                    {/* <a href="http://wa.me/917620491422"> <img src={navIcon3} alt="" /> </a> */}
                </div>

                    <button className="vvd" onClick={()=> console.log('connect')}>  <span>Let's connect</span> </button>    

            </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;