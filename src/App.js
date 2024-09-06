import React, { useState } from "react";
import Nav from "./component/navbar/Nav";
import Hero from "./component/Hero/Hero";
import Programs from "./component/Programs/Programs";
import Title from "./component/Title/Title";
import About from "./component/About/About";
import Campus from "./component/Campus/Campus";
import Tesimonials from "./component/Tesimonials/Tesimonials";
import Contect from "./component/Contect/Contect";
import Footer from "./component/Footer/Footer";
import Videoplayer from "./component/Videoplayer/Videoplayer";

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Nav />
      <Hero />
      <div className="container">
        <Title subtitle="Our Program" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="Testimonials" title="What Students Says" />
        <Tesimonials />
        <Title subtitle="Contect us" title="Get in Touch" />
        <Contect />
        <Footer />
      </div> 
      {/* <Videoplayer playState={playState} setPlayState={setPlayState} /> */}
    </div>
  );
}

export default App;
