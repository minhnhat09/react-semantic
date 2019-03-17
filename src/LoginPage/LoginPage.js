import React from "react";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import "./Login.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn, alert } = this.props;
    const { username, password, submitted } = this.state;

    const classErrorUserName = `field ${submitted && !username ? "error" : ""}`;
    const classErrorPassword = `field ${submitted && !password ? "error" : ""}`;
    return (
      <div className="page-login">
        <div className="ui centered grid container">
          <div className="nine wide column">
            {alert.message && (
              <div className="ui icon warning message">
                <i className="lock icon" />
                <div className="content">
                  <div className="header">Login failed!</div>
                  <p>You might have misspelled your username or password!</p>
                </div>
              </div>
            )}
            <div className="ui fluid card">
              <div className="content">
                <form className="ui form error" onSubmit={this.handleSubmit}>
                  <div className={classErrorUserName}>
                    <label>User</label>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                    {submitted && !username && (
                      <div className="help-block">
                        <div className="ui error message">
                          <div className="header">Username is required</div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={classErrorPassword}>
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    {submitted && !password && (
                      <div className="help-block">
                        <div className="ui error message">
                          <div className="header">Password is required</div>
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    className="ui primary labeled icon button"
                    type="submit"
                  >
                    <i className="unlock alternate icon" />
                    Login
                  </button>
                  {loggingIn && (
                    <div className="ui active inline loader"></div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  const { loggingIn } = state.authentication;
  return {
    alert,
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
