import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar';
import Slider from './components/slider';
import About from './components/about';
import Gallery from './components/gallery';
import Blog from './components/blog';
import Socials from './components/socials';
import Footer from './components/footer'
import BlogPost from './components/BlogPost';

import { useEffect } from 'react';
import { logBlogPosts } from './firebase';

const Home = () => (
  <>
    <Slider />
    <About />
    <Gallery />
    <Blog />
    <Socials />
  </>
);

function App() {

  useEffect(() => {
    logBlogPosts();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
