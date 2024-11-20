import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000/api';

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
};

export const loginUser = async (loginData) => {
    const response = await axios.post(`${API_URL}/users/login`, loginData);
    return response.data;
};

export const logoutUser = async () => {
    const response = await axios.post(`${API_URL}/users/logout`);
    return response.data;
};
