import React, {
  Component
} from 'react';

import Light from './Light';
import './App.css';

export default class App extends Component {
  state = {
    next: 'red',
    lights: [],
    timer: null
  }

  start = () => {
    setTimeout(() => this.handleLightChange(), 500);
  }

  clearTimeout = () => {
    clearTimeout(this.state.timer);
  }

  componentDidMount = () => {
    this.start();
  }

  componentWillUnmount = () => {
    this.clearTimeout();
  }

  handleLightChange = (e) => {
    const dict = {
      red: {
        next: 'green',
        lights: ['red', 'black', 'black']
      },
      yellow: {
        next: 'red',
        lights: ['black', 'yellow', 'black']
      },
      green: {
        next: 'yellow',
        lights: ['black', 'black', 'green']
      }
    };

    const timer = setTimeout(() => this.handleLightChange(), this.state.next === 'yellow' ? 30000 : 300000);
    const states = Object.assign({
      timer
    }, dict[this.state.next]);

    this.setState(states);
  }

  render() {
    if (this.state.lights.length === 0) {
      return (<div className='box'></div>);
    }

    const lights = this.state.lights.map((x, i) => {
      return (<Light className={x} key={i} />);
    });

    return (
      <div className='box'>
        {lights}
      </div>
    );
  }
}
