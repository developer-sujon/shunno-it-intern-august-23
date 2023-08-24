import { Component } from "react";

class Form extends Component {
  state = {
    email: "",
    password: "",
    errorMsg: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  handleEmail = (event) => {
    if (event.target.value.length < 5) {
      this.setState({ errorMsg: "Email must be at least 5 characters" });
    } else {
      this.setState({ errorMsg: "" });
    }
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
    if (event.target.value.length < 5) {
      this.setState({ errorMsg: "Password must be at least 5 characters" });
    } else {
      this.setState({ errorMsg: "" });
    }
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <form className="text-start" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <br />
            {this.state.errorMsg && (
              <small className="text-danger">{this.state.errorMsg}</small>
            )}
            <input
              type="email"
              className="form-control my-2"
              id="exampleInputEmail1"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
