import React from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <Layout>
      <main className="min-h-screen bg-[#F0F0F0]">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <AboutMe />
      </main>
    </Layout>
  );
};

export default App;
