import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import Komponente from './Komponente';
import ChartsOverviewDemo from './ChartsOverviewDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Komponente Name="Max" />
    <Komponente Name="Suheib" />
    <Komponente Name="Hans" />
    <ChartsOverviewDemo />
    <ChartsOverviewDemo />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();