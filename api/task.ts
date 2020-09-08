import { apiBaseUrl } from './index';
import { ApiRequest, UserCredentials } from './index';

export interface TaskPayload {
	title: string;
	description: string;
	projectId: number;
	tags: string[];
	pinned: boolean;
}

interface CreateTask extends UserCredentials {
	payload: TaskPayload;
}

interface DeleteTask extends UserCredentials {
	taskId: string | number;
}

export const createTaskApiConfig = ({
	payload,
	userId,
	token
}: CreateTask): ApiRequest => {
	return {
		url: `${apiBaseUrl}/tasks/${userId}`,
		method: 'post',
		payload: payload,
		token: token
	};
};

export const deleteTaskApiConfig = ({
	taskId,
	userId,
	token
}: DeleteTask): ApiRequest => {
	return {
		url: `${apiBaseUrl}/tasks/${userId}/${taskId}`,
		method: 'delete',
		token: token
	};
};
