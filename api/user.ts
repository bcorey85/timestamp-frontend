import { apiBaseUrl } from './index';
import { ApiRequest } from './index';

interface UpdateRequest {
	email?: string;
	password?: string;
	passwordConfirm?: string;
}

export const updateUserApiConfig = (
	payload: UpdateRequest,
	token: string,
	userId: string
): ApiRequest => {
	return {
		url: `${apiBaseUrl}/users/${userId}`,
		method: 'put',
		payload: payload,
		token: token
	};
};

export const deleteUserApiConfig = (
	userId: string,
	token: string
): ApiRequest => {
	return {
		url: `${apiBaseUrl}/users/${userId}`,
		method: 'delete',
		payload: null,
		token: token
	};
};
