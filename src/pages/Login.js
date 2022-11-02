import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loginUser } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    loginUser(email, password);
    navigate('/dashboard');
  };

  return (
    <section className="login__container">
      <form className="login">
        <h4>Login</h4>
        <div className="login__row">
          <input
            type="text"
            className="login__input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login__row">
          <input
            type="password"
            className="login__input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="login__submit-btn"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
