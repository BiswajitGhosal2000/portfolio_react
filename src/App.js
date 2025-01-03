import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Layout from './pages/Layout';
import Sidebar from './pages/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Education from './pages/Education';
// import Blog from './pages/blogs/Blog';
// import Activities from './pages/Activities';

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
      <div className={`flex-grow bg-inherit transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'} px-4 overflow-y-auto`}>
        <div className="flex justify-end py-4 bg-blue-400 h-12" />
        {/* Home Section */}
        <section id="home" className='py-4'>
          <Home />
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

        {/* Experience Section */}
        <section id="experience" className="py-4">
          <Layout>
            <Experience />
          </Layout>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-4">
          <Layout>
            <Projects />
          </Layout>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-4">
          <Layout>
            <Certifications />
          </Layout>
        </section>

        {/* Education Section */}
        <section id="education" className="py-4">
          <Layout>
            <Education />
          </Layout>
        </section>

        {/* Activities Section
        <section id="activities" className="py-4">
          <Layout>
            <Activities />
          </Layout>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="py-4">
          <Layout>
            <Contact />
          </Layout>
        </section>

        {/* Blog Section 
         <section id="blog" className="py-4">
          <Layout>
            <Blog />
          </Layout>
        </section> */}
      </div>
    </div>
  );
};

export default App;
