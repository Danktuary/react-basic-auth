import axios from 'axios';

const { token } = JSON.parse(localStorage.getItem('react-user')) || {};
const http = axios.create({ baseURL: 'http://localhost:4242' });

http.setAuthHeader = function setAuthHeader(authToken) {
	if (authToken) {
		return this.defaults.headers.common.Authorization = `Bearer ${authToken}`;
	}

	delete this.defaults.headers.common.Authorization;
};

if (token) http.setAuthHeader(token);

export default http;
