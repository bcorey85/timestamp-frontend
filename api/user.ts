import { apiBaseUrl } from './index';
import { ApiRequest, UserCredentials } from './index';

interface UpdatePayload {
	email?: string;
	password?: string;
	passwordConfirm?: string;
}

interface UpdateRequest extends UserCredentials {
	payload: UpdatePayload;
}

interface GetRequest extends UserCredentials {}

interface DeleteRequest extends UserCredentials {}

export const getUserApiConfig = ({ userId, token }: GetRequest): ApiRequest => {
	return {
		url: `${apiBaseUrl}/users/${userId}`,
		method: 'get',
		payload: null,
		token: token
	};
};

export const updateUserApiConfig = ({
	payload,
	token,
	userId
}: UpdateRequest): ApiRequest => {
	return {
		url: `${apiBaseUrl}/users/${userId}`,
		method: 'put',
		payload: payload,
		token: token
	};
};

export const deleteUserApiConfig = ({
	userId,
	token
}: DeleteRequest): ApiRequest => {
	return {
		url: `${apiBaseUrl}/users/${userId}`,
		method: 'delete',
		payload: null,
		token: token
	};
};
