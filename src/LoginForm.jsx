import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (submit) => {
    submit.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(submit) => setUsername(submit.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(submit) => setPassword(submit.target.value)}
      />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
