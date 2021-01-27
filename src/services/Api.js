import Http from './Http';

export const login = (email, password) => {
  return Http.post('/api/login', { email, password });
};

export const register = (firstname, lastname, email, gender, password) => {
  return Http.post('/api/register', {
    firstname,
    lastname,
    email,
    gender,
    password,
  });
};

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: JSON.parse(localStorage.getItem(`token`)),
  },
};

export const fetchChats = () => Http.get('/api/chats', config);
