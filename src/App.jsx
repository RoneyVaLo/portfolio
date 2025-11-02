import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <Layout>
      <main className="min-h-screen bg-[#F0F0F0]">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <AboutMe />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />
      </main>
    </Layout>
  );
};

export default App;
