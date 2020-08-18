import { apiBaseUrl } from './index';

interface UserCredentials {
	email: string;
	password: string;
}

interface ResetRequest {
	password: string;
	token: string;
}

type email = string;

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

export const forgotPasswordRequestConfig = (email: email) => {
	return {
		url: `${apiBaseUrl}/auth/forgot-password`,
		method: 'post',
		payload: { email },
		token: null
	};
};

export const resetPasswordRequestConfig = ({
	password,
	token
}: ResetRequest) => {
	return {
		url: `${apiBaseUrl}/auth/reset-password/${token}`,
		method: 'put',
		payload: { password },
		token: null
	};
};
