import React, { SyntheticEvent, useState } from 'react';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';

import { useInputState } from '../../../hooks/useInputState';
import { useTags } from '../../../hooks/useTags';
import { TagInput } from './TagInput';

interface Props {
	handleCancel: (e: SyntheticEvent) => void;
}

const NoteForm = ({ handleCancel }: Props): JSX.Element => {
	const { tags, handleAddTag, handleRemoveTag } = useTags();
	const [ title, setTitle ] = useInputState('');
	const [ description, setDescription ] = useInputState('');
	const [ project, setProject ] = useInputState('');
	const [ task, setTask ] = useInputState('');
	const [ start, setStart ] = useInputState('');
	const [ end, setEnd ] = useInputState('');

	const handleSubmit = () => {
		const payload = { title, project, task, start, end, description, tags };
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
						label='Note Title'
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
						<option value={null} />
						<option value='One'>One</option>
						<option value='Two'>Two</option>
						<option value='Three'>Three</option>
					</Input>
					<Input
						type='select'
						id='task'
						label='Task'
						value={task}
						onChange={setTask}>
						<option value={null} />
						<option value='One'>One</option>
						<option value='Two'>Two</option>
						<option value='Three'>Three</option>
					</Input>
				</FormRow>
				<FormRow half>
					<Input
						type='datetime-local'
						id='start'
						label='Start'
						value={start}
						onChange={setStart}
					/>
					<Input
						type='datetime-local'
						id='end'
						label='End'
						value={end}
						onChange={setEnd}
					/>
				</FormRow>
				<FormRow>
					<TagInput
						handleAddTag={handleAddTag}
						handleRemoveTag={handleRemoveTag}
						tags={tags}
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
					Create Note
				</Button>
			</CreateBtnContainer>
		</div>
	);
};

export { NoteForm };
