import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header/Header';
import Forms from './components/Forms/Forms';
import Highlight from './components/Highlight/Highlight';
import Features from './components/Features/Features';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Element name="home">
        <Header />
      </Element>
      <Element name="forms">
        <Forms />
      </Element>
      <Element name="premium">
        <Highlight />
      </Element>
      <Element name="features">
        <Features />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
