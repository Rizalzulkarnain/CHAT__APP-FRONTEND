import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginImage from '../../assets/images/login.svg';

import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/actions/authActions';

import './Auth.scss';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginAction(email, password)).then(() => history.push('/'));

    setEmail('');
    setPassword('');
  };

  return (
    <div id="auth__container">
      <div id="auth__card">
        <div className="card-shadow">
          <div id="image__section">
            <img src={LoginImage} alt="login" />
          </div>

          <div id="form__section">
            <h2>Login User</h2>

            <form onSubmit={handleSubmit}>
              <div className="input__field mb-1">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="input__field mb-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                disabled={!email && !password}
                className="button__submit"
              >
                Login
              </button>
            </form>

            <p>
              Don't have an account?,
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
