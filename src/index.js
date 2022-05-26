import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const name = `Jack`;
const element = <h1>Hello, {name}</h1>

//can use <React.Fragment>...</React.Fragment>
//can use <React.StrictMode>...</React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*{element}*/}
    <h3>Hello {name}</h3>
    <h4>Full Stack Developer</h4>
    <h2>Welcome to my page</h2>
  </React.StrictMode>
);