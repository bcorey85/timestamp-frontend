import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInputState } from '../useInputState';
import { useTags } from '../useTags';
import { useApiRequest } from '../useApiRequest';
import { ErrorService } from '../../utils/ErrorService';
import { selectUser } from '../../redux/user';
import {
	createTaskApiConfig,
	TaskPayload,
	updateTaskApiConfig
} from '../../api/task';
import { selectCreateModal } from '../../redux/createModal';
import { TaskErrors, handleClose, SubmitType } from './index';
import { setAppDataSynced } from '../../redux/appData';
import { TagService } from '../../utils/TagService';

const useTaskCreateForm = (handleClose: handleClose) => {
	const dispatch = useDispatch();
	const [ isLoading, setIsLoading ] = useState(false);
	const { currentItem, createModalEditMode } = useSelector(selectCreateModal);
	const [ errors, setErrors ] = useState<TaskErrors>({
		title: null,
		description: null,
		projectId: null,
		generic: []
	});
	const { userId, token } = useSelector(selectUser);

	const [ title, setTitle ] = useInputState(currentItem.title || '');
	const [ description, setDescription ] = useInputState(
		currentItem.description || ''
	);

	const [ projectId, setProjectId ] = useState(
		currentItem.itemId.projectId || ''
	);

	const { tags, handleAddTag, handleRemoveTag } = useTags(
		(currentItem.tags &&
			currentItem.tags.length > 0 &&
			TagService.split(currentItem.tags)) ||
			[]
	);
	const [ pinned, setPinned ] = useState(currentItem.pinned || false);

	const {
		request: createTaskRequest,
		errors: createTaskErrors
	} = useApiRequest();

	const {
		request: updateTaskRequest,
		errors: updateTaskErrors
	} = useApiRequest();

	useEffect(
		() => {
			const errors = ErrorService.formatErrors(
				[ 'title', 'description', 'projectId' ],
				createTaskErrors
			);

			setErrors(errors);
		},
		[ createTaskErrors ]
	);

	useEffect(
		() => {
			const errors = ErrorService.formatErrors(
				[ 'title', 'description', 'projectId' ],
				updateTaskErrors
			);

			setErrors(errors);
		},
		[ updateTaskErrors ]
	);

	const handleSubmit = async (e: SyntheticEvent, type: keyof SubmitType) => {
		e.preventDefault();
		setIsLoading(true);

		const payload: TaskPayload = {
			title,
			projectId: projectId as number,
			description,
			tags,
			pinned
		};

		let res, config;
		if (type === 'edit') {
			config = updateTaskApiConfig({
				taskId: currentItem.itemId.taskId,
				payload,
				userId,
				token
			});
			res = await updateTaskRequest(config);
		} else {
			config = createTaskApiConfig({ payload, userId, token });
			res = await createTaskRequest(config);
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
		tags,
		pinned
	};

	const formHandlers = {
		setTitle,
		setDescription,
		setProjectId,
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

export { useTaskCreateForm };
