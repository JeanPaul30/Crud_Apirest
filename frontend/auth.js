import axios from 'axios';

// Function to handle user login
export const login = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8080/login', { username, password });
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to log the user out
export const logout = () => {
  localStorage.removeItem('user');
};

// Function to get the current user from local storage
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

// Function to set the authentication header
export const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
