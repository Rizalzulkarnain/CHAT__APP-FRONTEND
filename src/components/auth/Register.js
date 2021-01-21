import { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterImage from '../../assets/images/register.svg';

import { useDispatch } from 'react-redux';
import { registerAction } from '../../redux/actions/authActions';

import './Auth.scss';

const Register = ({ history }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      registerAction(firstname, lastname, email, gender, password)
    ).then(() => history.push('/login'));
  };

  return (
    <div id="auth__container">
      <div id="auth__card">
        <div className="card-shadow">
          <div id="image__section">
            <img src={RegisterImage} alt="register" />
          </div>

          <div id="form__section">
            <h2>Register User</h2>

            <form onSubmit={handleSubmit}>
              <div className="input__field mb-1">
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Firstname"
                />
              </div>

              <div className="input__field mb-1">
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Lastname"
                />
              </div>

              <div className="input__field mb-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>

              <div className="input__field mb-1">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  type="text"
                >
                  <option>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
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
                disabled={
                  !firstname && !lastname && !email && !gender && !password
                }
                className="button__submit"
              >
                Register
              </button>
            </form>

            <p>
              Already have an account?, <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
