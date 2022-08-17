import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
        username: "",
        password: "",
      }
    };

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      if (!Object.values(this.state).includes("")){
        this.props.handleLogin(this.state)
      }
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text" 
              value={this.state.username.value}
              onChange={this.handleChange}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password.value}
              onChange={this.handleChange}
              />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
export default LoginForm;
