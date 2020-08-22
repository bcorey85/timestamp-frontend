import React from 'react';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';

const TaskForm = () => {
	return (
		<div>
			<BaseForm>
				<FormRow>
					<Input
						type='text'
						id='title'
						label='Task Title'
						value={null}
						onChange={() => {}}
					/>
				</FormRow>
				<FormRow half>
					<Input
						type='select'
						id='project'
						label='Project'
						value={null}
						onChange={() => {}}
					/>
				</FormRow>
				<FormRow>
					<Input
						type='text'
						id='tags'
						label='Tags'
						value={null}
						onChange={() => {}}
					/>
				</FormRow>
				<FormRow>
					<Input
						type='textarea'
						id='description'
						label='Description'
						value={null}
						onChange={() => {}}
					/>
				</FormRow>
			</BaseForm>

			<CreateBtnContainer>
				<Button btnStyle='link_gray' onClick={() => {}}>
					Cancel
				</Button>
				<Button btnStyle='primary' onClick={() => {}}>
					Create Task
				</Button>
			</CreateBtnContainer>
		</div>
	);
};

export { TaskForm };
