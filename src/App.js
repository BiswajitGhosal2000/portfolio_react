import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';

import Layout from './components/Layout';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Blog from './components/blogs/Blog';
import BlogItem from './components/blogs/BlogItem';
import Activities from './components/Activities';


const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:postId' element={<BlogItem />} />
          <Route path='/activities' element={<Activities />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
