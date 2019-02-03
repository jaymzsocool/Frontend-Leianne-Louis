import React from "react";

const LoginForm = props => {
  return (
    <>
      <h1>Sign in</h1>
      <form onSubmit={e => props.loginUser(e)}>
        <input
          onChange={props.handleChanges}
          type="text"
          name="email"
          value={props.login.email}
          placeholder="Email address"
        />
        <input
          onChange={props.handleChanges}
          type="text"
          name="password"
          value={props.login.password}
          placeholder="Password"
        />
        <button>Sign into Luncher</button>
      </form>
    </>
  );
};

export default LoginForm;
