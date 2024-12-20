import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;