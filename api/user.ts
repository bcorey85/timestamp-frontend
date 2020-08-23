import { apiBaseUrl } from './index';
import { ApiRequest } from './index';

interface UpdateRequest {
	email?: string;
	password?: string;
	passwordConfirm?: string;
}

export const updateUserApiConfig = (
	payload: UpdateRequest,
	userId: string
): ApiRequest => {
	return {
		url: `${apiBaseUrl}/user/${userId}`,
		method: 'put',
		payload: payload,
		token: null
	};
};
