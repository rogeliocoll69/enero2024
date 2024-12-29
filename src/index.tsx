import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from "./components/footer";
import './globals.css';
import Cards from "./components/Cards";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Cards />
     <Footer />
    
  </React.StrictMode>
);


