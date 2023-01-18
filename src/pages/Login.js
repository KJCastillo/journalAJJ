import { useState } from "react";
import "./Login.css";
import { useLogin } from "../hooks/useLogin"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()

    login(email, password)
  }

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
        <label>
          <span>
            Email:
            <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </span>
        </label>
        <label>
          <span>
            Password:
            <input
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </span>
        </label>
        <button className="btn">Log In</button>
      </form>
    </div>
  );
}
