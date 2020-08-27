import { apiBaseUrl } from './index';
import { ApiRequest, UserCredentials } from './index';

export interface NotePayload {
	title?: string;
	description?: string;
	projectId: number;
	taskId: number;
	start: Date;
	end: Date;
	tags: string[];
}

interface CreateNote extends UserCredentials {
	payload: NotePayload;
}

export const createNoteApiConfig = ({
	payload,
	userId,
	token
}: CreateNote): ApiRequest => {
	return {
		url: `${apiBaseUrl}/notes/${userId}`,
		method: 'post',
		payload: payload,
		token: token
	};
};
