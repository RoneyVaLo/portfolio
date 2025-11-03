import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Toaster } from "sonner";
import Education from "./components/Education";

const App = () => {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <AboutMe />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact />
      </main>
      <Toaster />
    </Layout>
  );
};

export default App;
