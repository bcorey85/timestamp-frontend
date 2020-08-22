import React from 'react';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';

const ProjectForm = () => {
	return (
		<div>
			<BaseForm>
				<FormRow>
					<Input
						type='text'
						id='title'
						label='Project Title'
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
					Create Project
				</Button>
			</CreateBtnContainer>
		</div>
	);
};

export { ProjectForm };