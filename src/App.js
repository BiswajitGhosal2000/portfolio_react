import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Projects from './components/projects/Projects';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <BrowserRouter>
      <Layout sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
