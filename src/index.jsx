import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Component1 } from './components/Component1';
import { Component2 } from './components/Component2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <Component1/>
  <Component2/>

  </React.StrictMode>
);