"use client";

import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
