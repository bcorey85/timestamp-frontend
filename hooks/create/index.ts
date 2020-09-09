import { SyntheticEvent } from 'react';

import { ApiError } from '../../api/index';

export interface NoteErrors {
	title?: string;
	description?: string;
	projectId?: string;
	taskId?: string;
	startTime?: string;
	endTime?: string;
	generic?: ApiError[];
}

export interface TaskErrors {
	title?: string;
	description?: string;
	projectId?: string;
	generic?: ApiError[];
}

export interface ProjectErrors {
	title?: string;
	description?: string;
	generic?: ApiError[];
}

export interface SubmitType {
	new: 'new';
	edit: 'edit';
}

export type handleClose = (e: SyntheticEvent) => void;
