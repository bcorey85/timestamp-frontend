import { useState, useEffect, SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/user';

import { useInputState } from '../useInputState';
import { useApiRequest } from '../useApiRequest';
import { ErrorService } from '../../utils/ErrorService';
import {
	createProjectApiConfig,
	ProjectPayload,
	updateProjectApiConfig
} from '../../api/project';
import { selectCreateModal } from '../../redux/createModal';
import { handleClose, ProjectErrors, SubmitType } from './index';
import { setAppDataSynced } from '../../redux/appData';

const useProjectCreateForm = (handleClose: handleClose) => {
	const dispatch = useDispatch();
	const { currentItem, createModalEditMode } = useSelector(selectCreateModal);
	const { userId, token } = useSelector(selectUser);

	const [ errors, setErrors ] = useState<ProjectErrors>({
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

	const {
		request: updateProjectRequest,
		errors: updateProjectErrors
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

	useEffect(
		() => {
			const errors = ErrorService.formatErrors(
				[ 'title', 'description' ],
				updateProjectErrors
			);

			setErrors(errors);
		},
		[ updateProjectErrors ]
	);

	const handleSubmit = async (e, type: keyof SubmitType) => {
		e.preventDefault();
		const payload: ProjectPayload = { title, description, pinned };

		let res, config;
		if (type === 'edit') {
			config = updateProjectApiConfig({
				projectId: currentItem.project_id,
				payload,
				userId,
				token
			});
			res = await updateProjectRequest(config);
		} else {
			config = createProjectApiConfig({ payload, userId, token });
			res = await createProjectRequest(config);
		}

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
		pinned
	};

	const formHandlers = {
		setTitle,
		setDescription,
		setPinned
	};

	return {
		editMode: createModalEditMode,
		handleSubmit,
		errors,
		formState,
		formHandlers
	};
};

export { useProjectCreateForm };
