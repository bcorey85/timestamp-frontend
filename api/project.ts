import { apiBaseUrl } from './index';
import { ApiRequest, UserCredentials } from './index';

export interface ProjectPayload {
	title: string;
	description: string;
	pinned: boolean;
}

interface CreateProject extends UserCredentials {
	payload: ProjectPayload;
}

interface DeleteProject extends UserCredentials {
	projectId: string | number;
}

export const createProjectApiConfig = ({
	payload,
	userId,
	token
}: CreateProject): ApiRequest => {
	return {
		url: `${apiBaseUrl}/projects/${userId}`,
		method: 'post',
		payload: payload,
		token: token
	};
};

export const deleteProjectApiConfig = ({
	projectId,
	userId,
	token
}: DeleteProject): ApiRequest => {
	return {
		url: `${apiBaseUrl}/projects/${userId}/${projectId}`,
		method: 'delete',
		token: token
	};
};
