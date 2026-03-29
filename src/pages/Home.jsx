import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Members from '../components/Members';
import Gallery from '../components/Gallery';
import Timeline from '../components/Timeline';
import FunSection from '../components/FunSection';
import Letters from '../components/Letters';
import Footer from '../components/Footer';

const Home = ({ onMemberClick, isDarkMode, onThemeToggle }) => {
  return (
    <>
      <Navbar isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} />
      <Hero />
      <Members onMemberClick={onMemberClick} />
      <Gallery isFullPage={false} />
      <Timeline />
      <FunSection />
      <Letters />
      <Footer />
    </>
  );
};

export default Home;
