import { apiBaseUrl } from './index';

interface UserCredentials {
	email: String;
	password: String;
}

export const signupRequestConfig = (payload: UserCredentials) => {
	return {
		url: `${apiBaseUrl}/auth/signup`,
		method: 'post',
		payload: payload,
		token: null
	};
};

export const loginRequestConfig = (payload: UserCredentials) => {
	return {
		url: `${apiBaseUrl}/auth/login`,
		method: 'post',
		payload: payload,
		token: null
	};
};
