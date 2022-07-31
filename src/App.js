// import logo from './logo.svg';
import './App.css';
import React  from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/navbar";
import { Maniple } from "./components/Maniple";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';


function App() {
  return (

    <div className="App">
      <NavBar />
      <Maniple />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
