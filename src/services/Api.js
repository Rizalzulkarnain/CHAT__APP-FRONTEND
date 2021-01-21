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
