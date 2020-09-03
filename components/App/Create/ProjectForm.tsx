import React, { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/user';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';
import { PinInput } from './PinInput';

import { useInputState } from '../../../hooks/useInputState';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { createProjectApiConfig, ProjectPayload } from '../../../api/project';
import { useRouterService } from '../../../hooks/useRouterService';

interface Props {
	handleCancel: (e: SyntheticEvent) => void;
}

const ProjectForm = ({ handleCancel }: Props): JSX.Element => {
	const [ pinned, setPinned ] = useState(false);
	const [ title, setTitle ] = useInputState('');
	const [ description, setDescription ] = useInputState('');
	const { userId, token } = useSelector(selectUser);
	const {
		request: createProjectRequest,
		errors: createProjectErrors
	} = useApiRequest();
	const { router } = useRouterService();

	const handleSubmit = async () => {
		const payload: ProjectPayload = { title, description, pinned };

		const config = createProjectApiConfig({ payload, userId, token });

		const res = await createProjectRequest(config);
		// handle errors

		if (res.success) {
			router.push.dashboard();
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
					/>
				</FormRow>
				<FormRow>
					<Input
						type='textarea'
						id='description'
						label='Goal'
						value={description}
						onChange={setDescription}
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
