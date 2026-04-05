import './App.css'
import Navbar from './components/navbar';
import Slider from './components/slider';
import About from './components/about';
import Gallery from './components/gallery';
import Blog from './components/blog';
import Socials from './components/socials';
import Footer from './components/footer'

import { useEffect } from 'react';
import { logBlogPosts } from './firebase';

function App() {

  useEffect(() => {
    logBlogPosts();
  }, []);

  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Gallery />
      <Blog />
      <Socials />
      <Footer />
    </>
  )
}

export default App
