import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import ContactBar from "./components/ContactBar/ContactBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <section id="main">
        <h1>Michie Willman</h1>
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Education />
        <ContactBar />
      </section>
    </>
  );
}

export default App;
