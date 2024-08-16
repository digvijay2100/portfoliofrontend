// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// // import projImg1 from "../assets/project-img1.png";
// // import projImg2 from "../assets/project-img2.png";
// // import projImg3 from "../assets/project-img3.png";
// import banner from "../assets/banner.png";
// import banner1 from "../assets/banner1.png";
// import banner2 from "../assets/banner2.png";
// import banner3 from "../assets/banner3.png";
// import banner4 from "../assets/banner4.png";
// import banner5 from "../assets/banner5.png";
// import colorSharp2 from "../assets/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

//  const Projects = () => {

//   const projects = [
    
//     {
//       title: "Food Delivery App",
//       description: "Design & Development",
//       // imgUrl: projImg1,
//       imgUrl: banner,
      
      
      
//     },
//     {
//       title: "Healthcare Website",
//       description: "Design & Development",
//       imgUrl:banner1 ,
//     },
//     {
//       title: "News Portal",
//       description: "Design & Development",
//       imgUrl:banner2 ,
//     },
//     {
//       title: "User Profile",
//       description: "Design & Development",
//       imgUrl: banner3,
//     },
//     {
//       title: "Registration Form",
//       description: "Design & Development",
//       imgUrl: banner4,
//     },
//     {
//       title: "Enquery Form",
//       description: "Design & Development",
//       imgUrl: banner5,
//     },
//   ];

//   return (
//     <section className="project" id="project">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>I am making a front-end project in React js This is Following few Projects. 
//                   The First Project is a Food Delivery Website.
//                   Second Project is a Healthcare Website thee the get touch in near healthcare center and Enquery the multipal services in healthcare
//                   third project is a News Portal in English the News Api integrate a front-end Element 
//                   fourth project is a user profile github use deatals show in how many project.

//                 </p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      
            
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                       {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>React such a desirable library to learn is that it doesn't replace HTML. It takes advantage of HTML's popularity and strength as the most popular programming language, by letting you use a very similar syntax to HTML to build interfaces and add dynamic features to it using JavaScript.</p>
//                       {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }

// export default Projects;