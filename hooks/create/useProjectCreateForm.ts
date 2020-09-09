import { useState, useEffect, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user';

import { useInputState } from '../useInputState';
import { useApiRequest } from '../useApiRequest';
import { ErrorService } from '../../utils/ErrorService';
import { ApiError } from '../../api/index';
import { createProjectApiConfig, ProjectPayload } from '../../api/project';
import { selectCreateModal } from '../../redux/createModal';

interface Errors {
	title?: string;
	description?: string;
	generic?: ApiError[];
}

type handleClose = (e: SyntheticEvent) => void;

const useProjectCreateForm = (handleClose: handleClose) => {
	const { currentItem, createModalEditMode } = useSelector(selectCreateModal);
	const { userId, token } = useSelector(selectUser);

	const [ errors, setErrors ] = useState<Errors>({
		title: null,
		description: null,
		generic: []
	});

	const [ title, setTitle ] = useInputState(currentItem.title || '');
	const [ description, setDescription ] = useInputState(
		currentItem.description || ''
	);
	const [ pinned, setPinned ] = useState(currentItem.pinned || false);

	const {
		request: createProjectRequest,
		errors: createProjectErrors
	} = useApiRequest();

	useEffect(
		() => {
			const errors = ErrorService.formatErrors(
				[ 'title', 'description' ],
				createProjectErrors
			);

			setErrors(errors);
		},
		[ createProjectErrors ]
	);

	const handleCreateSubmit = async e => {
		e.preventDefault();
		const payload: ProjectPayload = { title, description, pinned };

		const config = createProjectApiConfig({ payload, userId, token });

		const res = await createProjectRequest(config);

		if (res.success === false) {
			return;
		}

		if (res.success) {
			handleClose(e);
		}
	};

	const handleEditSubmit = async e => {
		e.preventDefault();
		console.log('editing');
	};

	const formState = {
		title,
		description,
		pinned
	};

	const formHandlers = {
		setTitle,
		setDescription,
		setPinned
	};

	return {
		editMode: createModalEditMode,
		handleCreateSubmit,
		handleEditSubmit,
		errors,
		formState,
		formHandlers
	};
};

export { useProjectCreateForm };
