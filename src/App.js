import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Blog from './components/blogs/Blog';
import BlogItem from './components/blogs/BlogItem';
import Activities from './components/Activities';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen mx-12">
      {/* Sidebar */}
      <div
        className={`fixed h-screen bg-white shadow-md transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}
      >
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className={`flex-grow transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'} px-4 overflow-y-auto`}      >
        {/* Home Section */}
        <section id="home" className='py-4'>
          <Layout>
            <Home />
          </Layout>
        </section>

        {/* About Section */}
        <section id="about" className='py-4'>
          <Layout>
            <About />
          </Layout>
        </section>

        {/* Skills Section */}
        <section id="skills" className='py-4'>
          <Layout>
            <Skills />
          </Layout>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-4">
          <Layout>
            <Projects />
          </Layout>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-4">
          <Layout>
            <Experience />
          </Layout>
        </section>

        {/* Education Section */}
        <section id="education" className="py-4">
          <Layout>
            <Education />
          </Layout>
        </section>

        {/* Activities Section */}
        <section id="activities" className="py-4">
          <Layout>
            <Activities />
          </Layout>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-4">
          <Layout>
            <Contact />
          </Layout>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-4">
          <Blog />
          <BlogItem />
        </section>
      </div>
    </div>
  );
};

export default App;
