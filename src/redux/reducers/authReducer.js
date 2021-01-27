import { produce } from 'immer';
import * as Type from '../constants/authConstants';

const authState = {
  loading: false,
  user: JSON.parse(localStorage.getItem(`user`)) || {},
  register: {},
  token: JSON.parse(localStorage.getItem(`token`)) || '',
  isLoggedIn: !!JSON.parse(localStorage.getItem(`user`)),
  error: null,
};

const authReducers = produce((draft, action) => {
  switch (action.type) {
    case Type.LOGIN_REQUEST:
      draft.loading = true;
      draft.user = {};
      draft.isLoggedIn = false;
      draft.token = '';
      draft.error = null;
      return;

    case Type.LOGIN_SUCCESS:
      draft.loading = false;
      draft.user = action.payload;
      draft.token = action.payload;
      draft.isLoggedIn = action.payload;
      draft.error = null;
      return;

    case Type.LOGIN_ERROR:
      draft.loading = false;
      draft.user = {};
      draft.isLoggedIn = false;
      draft.token = '';
      draft.error = action.payload;
      return;

    case Type.REGISTER_REQUEST:
      draft.loading = true;
      draft.register = {};
      draft.error = null;
      return;

    case Type.REGISTER_SUCCESS:
      draft.loading = false;
      draft.register = action.payload;
      draft.error = null;
      return;

    case Type.REGISTER_ERROR:
      draft.loading = false;
      draft.register = {};
      draft.error = action.payload;
      return;

    case Type.LOGOUT_REQUEST:
      draft.loading = true;
      draft.user = {};
      draft.isLoggedIn = false;
      draft.token = '';
      draft.error = null;
      return;

    case Type.LOGOUT_SUCCESS:
      draft.loading = false;
      draft.user = action.payload;
      draft.isLoggedIn = action.payload;
      draft.token = action.payload;
      draft.error = null;
      return;

    case Type.LOGOUT_ERROR:
      draft.loading = false;
      draft.user = {};
      draft.isLoggedIn = false;
      draft.token = '';
      draft.error = action.payload;
      return;

    default:
      return;
  }
}, authState);

export default authReducers;
