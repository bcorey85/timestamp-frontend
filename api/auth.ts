import { apiBaseUrl } from './index';

interface UserCredentials {
	email: String;
	password: String;
}

export const signupRequest = (payload: UserCredentials) => {
	return {
		url: `${apiBaseUrl}/auth/signup`,
		method: 'post',
		payload: payload,
		token: null
	};
};

export const loginRequest = (payload: UserCredentials) => {
	return {
		url: `${apiBaseUrl}/auth/login`,
		method: 'post',
		payload: payload,
		token: null
	};
};
