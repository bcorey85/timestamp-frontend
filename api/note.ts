import { apiBaseUrl } from './index';
import { ApiRequest, UserCredentials } from './index';

export interface NotePayload {
	title: string;
	description: string;
	projectId: number;
	taskId: number;
	startTime: Date;
	endTime: Date;
	tags: string[];
	pinned: boolean;
}

interface CreateNote extends UserCredentials {
	payload: NotePayload;
}

interface DeleteNote extends UserCredentials {
	noteId: string | number;
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

export const deleteNoteApiConfig = ({
	noteId,
	userId,
	token
}: DeleteNote): ApiRequest => {
	return {
		url: `${apiBaseUrl}/notes/${userId}/${noteId}`,
		method: 'delete',
		token: token
	};
};
