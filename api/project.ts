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

interface UpdateProject extends UserCredentials {
	payload: ProjectPayload;
	projectId: string | number;
}

interface CompleteProject extends UserCredentials {
	projectId: string | number;
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

export const updateProjectApiConfig = ({
	projectId,
	payload,
	userId,
	token
}: UpdateProject): ApiRequest => {
	return {
		url: `${apiBaseUrl}/projects/${userId}/${projectId}`,
		method: 'put',
		payload: payload,
		token: token
	};
};

export const completeProjectApiConfig = ({
	projectId,
	userId,
	token
}: CompleteProject): ApiRequest => {
	return {
		url: `${apiBaseUrl}/projects/${userId}/${projectId}/actions?completed=true`,
		method: 'put',
		payload: null,
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
