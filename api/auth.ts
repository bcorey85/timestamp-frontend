import { apiBaseUrl } from './index';
import { ApiRequest } from './index';

interface UserCredentials {
	email: string;
	password: string;
	passwordConfirm?: string;
}

interface ResetRequest {
	password: string;
	passwordConfirm: string;
	token: string;
}

export interface AuthenticatedResponse {
	id: string;
	token: string;
}

type email = string;

export const signupApiConfig = (payload: UserCredentials): ApiRequest => {
	return {
		url: `${apiBaseUrl}/auth/signup`,
		method: 'post',
		payload: payload,
		token: null
	};
};

export const loginApiConfig = (payload: UserCredentials): ApiRequest => {
	return {
		url: `${apiBaseUrl}/auth/login`,
		method: 'post',
		payload: payload,
		token: null
	};
};

export const forgotPasswordApiConfig = (email: email): ApiRequest => {
	return {
		url: `${apiBaseUrl}/auth/forgot-password`,
		method: 'post',
		payload: { email },
		token: null
	};
};

export const resetPasswordApiConfig = ({
	password,
	passwordConfirm,
	token
}: ResetRequest): ApiRequest => {
	return {
		url: `${apiBaseUrl}/auth/reset-password/${token}`,
		method: 'put',
		payload: { password, passwordConfirm },
		token: null
	};
};
