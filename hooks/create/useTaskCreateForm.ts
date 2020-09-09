import React, { SyntheticEvent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useInputState } from '../useInputState';
import { useTags } from '../useTags';
import { useApiRequest } from '../useApiRequest';
import { ApiError } from '../../api/index';
import { ErrorService } from '../../utils/ErrorService';
import { selectUser } from '../../redux/user';
import { createTaskApiConfig, TaskPayload } from '../../api/task';
import { selectCreateModal } from '../../redux/createModal';

interface Errors {
	title?: string;
	description?: string;
	projectId?: string;
	generic?: ApiError[];
}

type handleClose = (e: SyntheticEvent) => void;

const useTaskCreateForm = (handleClose: handleClose) => {
	const { currentItemId, currentItem } = useSelector(selectCreateModal);
	const [ errors, setErrors ] = useState<Errors>({
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
	const [ projectId, setProjectId ] = useState(currentItemId.projectId || '');
	const { tags, handleAddTag, handleRemoveTag } = useTags(
		currentItem.tags || []
	);
	const [ pinned, setPinned ] = useState(currentItem.pinned || false);

	const {
		request: createTaskRequest,
		errors: createTaskErrors
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

	const handleSubmit = async e => {
		e.preventDefault();
		const payload: TaskPayload = {
			title,
			projectId: parseInt(projectId),
			description,
			tags,
			pinned
		};

		const config = createTaskApiConfig({ payload, userId, token });

		const res = await createTaskRequest(config);

		if (res.success) {
			handleClose(e);
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

	return { handleSubmit, errors, formState, formHandlers };
};

export { useTaskCreateForm };
