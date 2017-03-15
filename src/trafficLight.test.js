import React from 'react';
import ReactDOM from 'react-dom';
import trafficLight from './trafficLight';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<trafficLight />, div);
});
