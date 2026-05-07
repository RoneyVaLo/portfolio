import Layout from "./components/Layout";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Toaster } from "sonner";
import Education from "./components/Education";
import { Analytics } from "@vercel/analytics/react";
import SEO from "./components/SEO";

const App = () => {
  return (
    <Layout>
      <SEO />
      <Analytics />
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

      <Toaster richColors position="bottom-right" />
    </Layout>
  );
};

export default App;
