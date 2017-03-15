import React, {
  Component
} from 'react';
import './App.css';

var trafficStyle = {
  red: {
    backgroundColor: "red"
  },
  yellow: {
    backgroundColor: "yellow"
  },
  green: {
    backgroundColor: "green"
  },
  black: {
    backgroundColor: "black"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: trafficStyle.red,
      yellow: trafficStyle.black,
      green: trafficStyle.black,
      next: "yellow"
    };
  }

  setInterval() {
    this._timeout = setTimeout(function () {
      this.changeHandle();
    }.bind(this), 500);
  }
  componentDidMount() {
    this.setInterval(this.tick, 500);
  }
  componentWillUnmount() {
    clearInterval(this._timeout);
  }
  changeHandle() {
    console.log('call handle');
    switch (this.state.next) {
      case "red":
        this.setState({
          red: trafficStyle.red,
          yellow: trafficStyle.black,
          green: trafficStyle.black,
          interval: 300000,
          next: "yellow"
        });
        break;
      case "yellow":
        this.setState({
          red: trafficStyle.black,
          yellow: trafficStyle.yellow,
          green: trafficStyle.black,
          interval: 30000,
          next: this.state.green == trafficStyle.green ? "red" : "green"
        });
        break;
      case "green":
        this.setState({
          red: trafficStyle.black,
          yellow: trafficStyle.black,
          green: trafficStyle.green,
          interval: 300000,
          next: "yellow"
        });
        break;
    }

    this._timeout = setTimeout(function () {
      this.changeHandle();
    }.bind(this), this.state.interval);
  }

  render() {
    return (
      <div className="box">
              <div className="circle" style={this.state.red}></div>
              <div className="circle" style={this.state.yellow}></div>
              <div className="circle" style={this.state.green}></div>
          </div>

    );
  }
}

export default App;
