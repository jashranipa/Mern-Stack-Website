import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Form from './pages/Form.js'
import Form2 from './pages/Form2.js'
import Home from './pages/Home.js'
import Student from './pages/Student.js'
import Contact from './pages/Contact.js'
import Faculty from './pages/Faculty.js'


function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<Form />} />
          
          <Route path="/form2" element={<Form2 />} />
          
          <Route path="/home" element={<Home />} />
          
          <Route path="/student" element={<Student />} />
          
          <Route path="/faculty" element={<Faculty />} />
          
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
