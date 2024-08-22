import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const login = (credentials) => axios.post(`${API_BASE_URL}/login`, credentials);
export const getHistory = (userId) => axios.get(`${API_BASE_URL}/history/${userId}`);
export const recordGameResult = (data) => axios.post(`${API_BASE_URL}/record`, data);
