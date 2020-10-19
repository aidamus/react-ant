import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Navbar from './component/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
