import React, { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/user';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';

import { useInputState } from '../../../hooks/useInputState';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { createProjectApiConfig, Project } from '../../../api/project';
import { useRouter } from 'next/router';

interface Props {
	handleCancel: (e: SyntheticEvent) => void;
}

const ProjectForm = ({ handleCancel }: Props): JSX.Element => {
	const [ title, setTitle ] = useInputState('');
	const [ description, setDescription ] = useInputState('');
	const { userId, token } = useSelector(selectUser);
	const {
		request: createProjectRequest,
		errors: createProjectErrors
	} = useApiRequest();
	const router = useRouter();

	const handleSubmit = async () => {
		const payload = { title, description } as Project;

		const config = createProjectApiConfig({ payload, userId, token });

		const res = await createProjectRequest(config);
		// handle errors

		if (res.success) {
			router.push(
				`/app/[userId]/dashboard`,
				`/app/${res.data.id}/dashboard`
			);
		}
	};

	return (
		<div>
			<BaseForm>
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
						label='Description'
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
		</div>
	);
};

export { ProjectForm };
