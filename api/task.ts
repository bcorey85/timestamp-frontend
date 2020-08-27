import { apiBaseUrl } from './index';
import { ApiRequest, UserCredentials } from './index';

export interface TaskPayload {
	title?: string;
	description?: string;
	projectId: number;
	tags: string[];
}

interface CreateTask extends UserCredentials {
	payload: TaskPayload;
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
