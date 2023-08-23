import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0,
  };

  initialState = null;

  // counter functions
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // timer functions
  handleTimerStart = () => {
    if (this.state.count > 0 && !this.initialState) {
      this.initialState = setInterval(() => {
        this.setState({ count: this.state.count - 1 });

        if (this.state.count === 0) {
          clearInterval(this.setState({ count: this.state.count }));
        }
      }, 1000);
    }
  };

  handleTimerStop = () => {
    if (this.initialState) {
      clearInterval(this.initialState);
      this.initialState = null;
    }
  };

  handleTimerReset = () => {
    if (this.initialState) {
      clearInterval(this.initialState);
      this.initialState = null;
    }
    this.setState({ count: 0 });
  };

  handleCountChange = (event) => {
    this.setState({ count: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Counter app</h1>
        <div className="counter">
          <button onClick={this.handleDecrement}>- Decrement</button>
          <input
            className="count"
            type="number"
            value={this.state.count}
            onChange={this.handleCountChange}
          />

          <button onClick={this.handleIncrement}>+ Increment</button>
        </div>
        <div className="counter">
          <button onClick={this.handleTimerStart}>start</button>
          <button onClick={this.handleTimerStop}>stop</button>
          <button onClick={this.handleTimerReset}>reset</button>
        </div>
      </div>
    );
  }
}

export default App;
