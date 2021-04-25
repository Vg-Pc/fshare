import React from "react";
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <home className="App-home">
        <Home />
      </home>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
