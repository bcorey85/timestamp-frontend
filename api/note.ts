import { apiBaseUrl } from './index';
import { ApiRequest, UserCredentials } from './index';

export interface NotePayload {
	title: string;
	description: string;
	projectId: number;
	taskId: number;
	startTime: string;
	endTime: string;
	tags: string[];
	pinned: boolean;
}

interface CreateNote extends UserCredentials {
	payload: NotePayload;
}

interface UpdateNote extends UserCredentials {
	payload: NotePayload;
	noteId: string | number;
}

interface DeleteNote extends UserCredentials {
	noteId: string | number;
}

interface CompleteNote extends UserCredentials {
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

export const updateNoteApiConfig = ({
	noteId,
	payload,
	userId,
	token
}: UpdateNote): ApiRequest => {
	return {
		url: `${apiBaseUrl}/notes/${userId}/${noteId}`,
		method: 'put',
		payload: payload,
		token: token
	};
};

// export const moveNoteApiConfig = ({
// 	noteId,
// 	userId,
// 	token
// }: CompleteNote): ApiRequest => {
// 	return {
// 		url: `${apiBaseUrl}/notes/${userId}/${noteId}/actions?move=true`,
// 		method: 'put',
// 		payload: null,
// 		token: token
// 	};
// };

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
