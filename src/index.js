import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Content />
    <Footer/>
  </>
);

reportWebVitals();

