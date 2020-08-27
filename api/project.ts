import { apiBaseUrl } from './index';
import { ApiRequest, UserCredentials } from './index';

export interface ProjectPayload {
	title?: string;
	description?: string;
}

interface CreateProject extends UserCredentials {
	payload: ProjectPayload;
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
