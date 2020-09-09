import React, { SyntheticEvent, useState, useEffect } from 'react';

import { useInputState } from '../useInputState';
import { useTags } from '../useTags';
import { useApiRequest } from '../useApiRequest';
import { ErrorService } from '../../utils/ErrorService';
import { ApiError } from '../../api/index';
import { useSelector } from 'react-redux';
import { createNoteApiConfig, NotePayload } from '../../api/note';
import { selectUser } from '../../redux/user';
import { selectCreateModal } from '../../redux/createModal';

interface Errors {
	title?: string;
	description?: string;
	projectId?: string;
	taskId?: string;
	startTime?: string;
	endTime?: string;
	generic?: ApiError[];
}

type handleClose = (e: SyntheticEvent) => void;

const useNoteCreateForm = (handleClose: handleClose) => {
	const [ errors, setErrors ] = useState<Errors>({
		title: null,
		description: null,
		projectId: null,
		taskId: null,
		startTime: null,
		endTime: null,
		generic: []
	});
	const { currentItemId, currentItem } = useSelector(selectCreateModal);
	const { userId, token } = useSelector(selectUser);

	const { tags, handleAddTag, handleRemoveTag } = useTags(
		currentItem.tags || []
	);
	const [ title, setTitle ] = useInputState(currentItem.title || '');
	const [ description, setDescription ] = useInputState(
		currentItem.description || ''
	);
	const [ projectId, setProjectId ] = useState(currentItemId.projectId || '');
	const [ taskId, setTaskId ] = useState(currentItemId.taskId || '');
	const [ startTime, setStartTime ] = useInputState(
		currentItem.formattedTime.startTime || ''
	);
	const [ endTime, setEndTime ] = useInputState(
		currentItem.formattedTime.endTime || ''
	);
	const [ startDate, setStartDate ] = useInputState(
		currentItem.formattedTime.startDate || ''
	);
	const [ endDate, setEndDate ] = useInputState(
		currentItem.formattedTime.endDate || ''
	);
	const [ pinned, setPinned ] = useState(currentItem.pinned || false);

	const {
		request: createNoteRequest,
		errors: createNoteErrors
	} = useApiRequest();

	useEffect(
		() => {
			const errors = ErrorService.formatErrors(
				[
					'title',
					'description',
					'startTime',
					'endTime',
					'projectId',
					'taskId'
				],
				createNoteErrors
			);

			setErrors(errors);
		},
		[ createNoteErrors ]
	);

	const handleSubmit = async e => {
		e.preventDefault();
		const start = new Date(startDate + ' ' + startTime);
		const end = new Date(endDate + ' ' + endTime);

		const payload: NotePayload = {
			title,
			projectId: parseInt(projectId),
			taskId: parseInt(taskId),
			startTime: start,
			endTime: end,
			description,
			tags,
			pinned
		};

		const config = createNoteApiConfig({ payload, userId, token });
		const res = await createNoteRequest(config);

		if (res.success === false) {
			return;
		}

		if (res.success) {
			handleClose(e);
		}
	};

	const formState = {
		title,
		description,
		projectId,
		taskId,
		startTime,
		endTime,
		startDate,
		endDate,
		tags,
		pinned
	};

	const formHandlers = {
		setTitle,
		setDescription,
		setProjectId,
		setTaskId,
		setStartTime,
		setEndTime,
		setStartDate,
		setEndDate,
		handleAddTag,
		handleRemoveTag,
		setPinned
	};

	return { handleSubmit, errors, formState, formHandlers };
};

export { useNoteCreateForm };
