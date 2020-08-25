import React, { SyntheticEvent, useState } from 'react';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';

import { useInputState } from '../../../hooks/useInputState';

interface Props {
	handleCancel: (e: SyntheticEvent) => void;
}

const ProjectForm = ({ handleCancel }: Props): JSX.Element => {
	const [ title, setTitle ] = useInputState('');
	const [ description, setDescription ] = useInputState('');

	const handleSubmit = () => {
		const payload = { title, description };
		console.log(payload);

		// handle config, api submit, errors
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
