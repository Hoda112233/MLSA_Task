/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "HODA SALEH",
  title: "I HUMANIZE TECHNOLOGY",
  email: "hodasalehbelal@gmail.com",
  gitHub: "https://github.com/Hoda112233",
  instagram: "https://www.instagram.com/hsaleh112001/",
  linkedIn: "https://www.linkedin.com/in/hoda-saleh-belal1/",
  medium: "https://medium.com/@hsalehbelal",
  twitter: "https://twitter.com/Hoda_Saleh1",
  youTube: "@hodasaleh2001",
};

const primaryColor = "#71797E";
const secondaryColor = "#71797E";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
