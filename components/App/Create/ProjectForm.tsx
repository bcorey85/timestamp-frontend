import React, { SyntheticEvent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/user';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';
import { PinInput } from './PinInput';

import { ErrorService } from '../../../utils/ErrorService';
import { ApiError } from '../../../api/index';
import { useInputState } from '../../../hooks/useInputState';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { createProjectApiConfig, ProjectPayload } from '../../../api/project';
import { useRouterService } from '../../../hooks/useRouterService';
import { selectCreateModal } from '../../../redux/createModal';

interface Props {
	handleCancel: (e: SyntheticEvent) => void;
}

interface Errors {
	title?: string;
	description?: string;
	generic?: ApiError[];
}

const ProjectForm = ({ handleCancel }: Props): JSX.Element => {
	const { currentItem } = useSelector(selectCreateModal);
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
	const { router } = useRouterService();

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

	const handleSubmit = async e => {
		e.preventDefault();
		const payload: ProjectPayload = { title, description, pinned };

		const config = createProjectApiConfig({ payload, userId, token });

		const res = await createProjectRequest(config);

		if (res.success === false) {
			return;
		}

		if (res.success) {
			handleCancel(e);
		}
	};

	return (
		<React.Fragment>
			<BaseForm>
				<FormRow>
					<PinInput
						pinned={pinned}
						handlePin={() => setPinned(!pinned)}
					/>
				</FormRow>
				<FormRow>
					<Input
						type='text'
						id='title'
						label='Project Title'
						value={title}
						onChange={setTitle}
						error={errors.title}
					/>
				</FormRow>
				<FormRow>
					<Input
						type='textarea'
						id='description'
						label='Description'
						value={description}
						onChange={setDescription}
						error={errors.description}
					/>
				</FormRow>
			</BaseForm>

			<CreateBtnContainer>
				<Button btnStyle='link_gray' onClick={handleCancel}>
					Cancel
				</Button>
				<Button btnStyle='primary' onClick={handleSubmit}>
					Create Project
				</Button>
			</CreateBtnContainer>
		</React.Fragment>
	);
};

export { ProjectForm };
