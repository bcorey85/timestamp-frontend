import React, { SyntheticEvent, useState } from 'react';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';

import { useInputState } from '../../../hooks/useInputState';

interface Props {
	handleCancel: (e: SyntheticEvent) => void;
}

const TaskForm = ({ handleCancel }: Props): JSX.Element => {
	const [ title, setTitle ] = useInputState('');
	const [ description, setDescription ] = useInputState('');
	const [ project, setProject ] = useInputState('');
	const [ tags, setTags ] = useState([]);

	const handleTags = () => {}; // create useTagInput hook

	const handleSubmit = () => {
		const payload = { title, project, description };
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
						label='Task Title'
						value={title}
						onChange={setTitle}
					/>
				</FormRow>
				<FormRow half>
					<Input
						type='select'
						id='project'
						label='Project'
						value={project}
						onChange={setProject}>
						<option value='One'>One</option>
						<option value='Two'>Two</option>
						<option value='Three'>Three</option>
					</Input>
				</FormRow>
				<FormRow>
					<Input
						type='text'
						id='tags'
						label='Tags'
						value={tags[0]}
						onChange={handleTags}
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
					Create Task
				</Button>
			</CreateBtnContainer>
		</div>
	);
};

export { TaskForm };
