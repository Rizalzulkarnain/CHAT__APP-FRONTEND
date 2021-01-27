import { useState, Fragment } from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../../../redux/actions/authActions';

import Modal from '../Modal/Modal';

import './Navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [avatar, setAvatar] = useState('');

  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutAction());
    history.push('/login');
  };

  const submitForm = (e) => {
    e.preventDefault();

    const form = { firstname, lastname, email, gender, password, avatar };

    const formData = new FormData();

    for (const key in form) {
      formData.append(key, form[key]);
    }
  };

  return (
    <div className="navbar card-shadow">
      <h2>Chat in Browser</h2>
      <div
        className="profile__menu"
        onClick={() =>
          setShowProfileOptions(
            (prevShowProfileOptions) => !prevShowProfileOptions
          )
        }
      >
        <img src={user.avatar} alt="avatar" />
        <p>
          {user.firstname} {user.lastname}
        </p>
        <i className="fas fa-caret-down caret__down"></i>
        {showProfileOptions && (
          <div className="profile__options">
            <p onClick={() => setShowProfileModal(true)}>Update Profile</p>
            <p onClick={handleLogout}>Log Out</p>
          </div>
        )}
        {showProfileModal && (
          <Modal>
            <Fragment key="header">
              <h3 className="mb-0">Update Profile</h3>
            </Fragment>
            <Fragment key="body">
              <form>
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
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="input__field mb-1">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="input__field mb-2">
                  <input
                    type="file"
                    onChange={(e) => setAvatar(e.target.files[0])}
                  />
                </div>
              </form>
            </Fragment>
            <Fragment key="footer">
              <button
                className="button__close"
                onClick={() => setShowProfileModal(false)}
              >
                close
              </button>

              <button className="button__success" onClick={submitForm}>
                Update Profile
              </button>
            </Fragment>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Navbar;
