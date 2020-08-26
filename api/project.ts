import { apiBaseUrl } from './index';
import { ApiRequest, UserCredentials } from './index';

export interface Project {
	title?: string;
	description?: string;
}

interface CreateProject extends UserCredentials {
	payload: Project;
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
