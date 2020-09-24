import React, { useState, useEffect, SyntheticEvent } from 'react';
import moment from 'moment';

import { useInputState } from '../useInputState';
import { useTags } from '../useTags';
import { useApiRequest } from '../useApiRequest';
import { ErrorService } from '../../utils/ErrorService';
import { useDispatch, useSelector } from 'react-redux';
import {
	createNoteApiConfig,
	NotePayload,
	updateNoteApiConfig
} from '../../api/note';
import { selectUser } from '../../redux/user';
import { selectCreateModal } from '../../redux/createModal';
import { NoteErrors, handleClose, SubmitType } from './index';
import { setAppDataSynced } from '../../redux/appData';
import { TagService } from '../../utils/TagService';

const useNoteCreateForm = (handleClose: handleClose) => {
	const dispatch = useDispatch();
	const [ isLoading, setIsLoading ] = useState(false);
	const [ errors, setErrors ] = useState<NoteErrors>({
		title: null,
		description: null,
		projectId: null,
		taskId: null,
		startTime: null,
		endTime: null,
		generic: []
	});
	const { currentItem, createModalEditMode } = useSelector(selectCreateModal);

	const { userId, token } = useSelector(selectUser);

	const { tags, handleAddTag, handleRemoveTag } = useTags(
		(currentItem.tags &&
			currentItem.tags.length > 0 &&
			TagService.split(currentItem.tags)) ||
			[]
	);
	const [ title, setTitle ] = useInputState(currentItem.title || '');
	const [ description, setDescription ] = useInputState(
		currentItem.description || ''
	);
	const [ projectId, setProjectId ] = useState(
		currentItem.itemId.projectId || ''
	);
	const [ taskId, setTaskId ] = useState(currentItem.itemId.taskId || '');

	const [ startDate, setStartDate ] = useState(
		moment(currentItem.meta.startTime) || ''
	);
	const [ endDate, setEndDate ] = useState(
		moment(currentItem.meta.endTime) || ''
	);
	const [ pinned, setPinned ] = useState(currentItem.pinned || false);

	const {
		request: createNoteRequest,
		errors: createNoteErrors
	} = useApiRequest();

	const {
		request: updateNoteRequest,
		errors: updateNoteErrors
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
				updateNoteErrors
			);

			setErrors(errors);
		},
		[ updateNoteErrors ]
	);

	const handleSubmit = async (e: SyntheticEvent, type: keyof SubmitType) => {
		e.preventDefault();
		setIsLoading(true);
		let start, end;
		if (typeof startDate !== 'string' && typeof endDate !== 'string') {
			start = startDate.toISOString();
			end = endDate.toISOString();
		}

		const payload: NotePayload = {
			title,
			projectId: projectId as number,
			taskId: taskId as number,
			startTime: start,
			endTime: end,
			description,
			tags,
			pinned
		};

		let res, config;
		if (type === 'edit') {
			config = updateNoteApiConfig({
				noteId: currentItem.itemId.noteId,
				payload,
				userId,
				token
			});
			res = await updateNoteRequest(config);
		} else {
			config = createNoteApiConfig({ payload, userId, token });
			res = await createNoteRequest(config);
		}

		setIsLoading(false);

		if (res.success === false) {
			return;
		}

		if (res.success) {
			handleClose(e);
			dispatch(setAppDataSynced(false));
		}
	};

	const formState = {
		title,
		description,
		projectId,
		taskId,
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
		setStartDate,
		setEndDate,
		handleAddTag,
		handleRemoveTag,
		setPinned
	};

	return {
		editMode: createModalEditMode,
		handleSubmit,
		errors,
		formState,
		formHandlers,
		isLoading
	};
};

export { useNoteCreateForm };
