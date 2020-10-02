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

interface UpdateTask extends UserCredentials {
	payload: TaskPayload;
	taskId: string | number;
}

interface CompleteTask extends UserCredentials {
	taskId: string | number;
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

export const updateTaskApiConfig = ({
	payload,
	taskId,
	userId,
	token
}: UpdateTask): ApiRequest => {
	return {
		url: `${apiBaseUrl}/tasks/${userId}/${taskId}`,
		method: 'put',
		payload: payload,
		token: token
	};
};

export const completeTaskApiConfig = ({
	taskId,
	userId,
	token
}: CompleteTask): ApiRequest => {
	return {
		url: `${apiBaseUrl}/tasks/${userId}/${taskId}/actions?completed=true`,
		method: 'put',
		payload: null,
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
