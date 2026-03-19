import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import SocialFeed from './components/SocialFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { 
  IS_MENU_LIVE, 
  IS_GALLERY_LIVE, 
  IS_TESTIMONIALS_LIVE, 
  IS_SOCIAL_FEED_LIVE, 
  IS_CONTACT_LIVE 
} from './config';

function App() {
  return (
    <div className="min-h-screen selection:bg-olive selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        {IS_MENU_LIVE && <Menu />}
        {IS_GALLERY_LIVE && <Gallery />}
        {IS_TESTIMONIALS_LIVE && <Testimonials />}
        {IS_SOCIAL_FEED_LIVE && <SocialFeed />}
        {IS_CONTACT_LIVE && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
