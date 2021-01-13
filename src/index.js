import React from 'react';
import { render } from 'react-dom';
import './style.css';

const Greeting = () => (
  <div>
    <h1>Hello from React!</h1>
    <div id="image" />
  </div>
);

render(
  <Greeting />,
  document.getElementById('target'),
);
