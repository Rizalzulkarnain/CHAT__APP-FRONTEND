import * as Type from '../constants/authConstants';
import * as API from '../../services/Api';

export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: Type.LOGIN_REQUEST,
    });

    const res = await API.login(email, password);
    localStorage.setItem(`user`, JSON.stringify(res.data.data));
    localStorage.setItem(
      `token`,
      JSON.stringify(`Bearer ${res.data.data.token}`)
    );

    dispatch({
      type: Type.LOGIN_SUCCESS,
      payload: {
        firstname: res.data.data.firstname,
        lastname: res.data.data.lastname,
        email: res.data.data.email,
        gender: res.data.data.gender,
        avatar: res.data.data.avatar,
        token: res.data.data.token,
        isLoggedIn: true,
      },
    });
  } catch (error) {
    dispatch({
      type: Type.LOGIN_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const registerAction = (
  firstname,
  lastname,
  email,
  gender,
  password
) => async (dispatch) => {
  try {
    dispatch({
      type: Type.REGISTER_REQUEST,
    });

    const res = await API.register(
      firstname,
      lastname,
      email,
      gender,
      password
    );
    dispatch({
      type: Type.REGISTER_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: Type.REGISTER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    dispatch({
      type: Type.LOGOUT_REQUEST,
    });

    dispatch({
      type: Type.LOGOUT_SUCCESS,
      payload: {
        firstname: null,
        lastname: null,
        email: null,
        gender: null,
        avatar: null,
        token: '',
        isLoggedIn: false,
      },
    });
    localStorage.removeItem(`user`);
    localStorage.removeItem(`token`);
  } catch (error) {
    dispatch({
      type: Type.LOGOUT_ERROR,
      payload: `Logout Error`,
    });
  }
};
