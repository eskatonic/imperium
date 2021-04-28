import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Map from './components/Map';
import Library from './components/Library';
import './App.css';



function App() {
  return (
    <div className="App">

      <div className="App-Header">
      <Header />
      </div>

      <div className="App-Main">
        <Route path="/" exact component={Main} />
        <Route path="/map" component={Map} />
        <Route path="/library" component={Library} />

      <Main />
      </div>

      <div className="App-Footer">
      <Footer />
      </div>


    </div>
  );
}

export default App;
