import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavigation from "./components/UI/Navigation/MainNavigationMenu/MainNavigationMenu";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import "./App.css";

const App: React.FC  = () => {
 return (
   <Router>
     <MainNavigation />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/projects" element={<Projects />} />
         {/* Define other routes that you need*/}
       </Routes>
     </main>
   </Router>
 );
};

export default App;