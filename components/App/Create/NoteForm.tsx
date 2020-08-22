import React, { SyntheticEvent } from 'react';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';

interface Props {
	handleCancel: (e: SyntheticEvent) => void;
}

const NoteForm = ({ handleCancel }: Props): JSX.Element => {
	return (
		<div>
			<BaseForm>
				<FormRow>
					<Input
						type='text'
						id='title'
						label='Note Title'
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
						onChange={() => {}}>
						<option value='One'>One</option>
						<option value='Two'>Two</option>
						<option value='Three'>Three</option>
					</Input>
					<Input
						type='select'
						id='task'
						label='Task'
						value={null}
						onChange={() => {}}>
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
						value={null}
						onChange={() => {}}
					/>
					<Input
						type='datetime-local'
						id='end'
						label='End'
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
				<Button btnStyle='link_gray' onClick={handleCancel}>
					Cancel
				</Button>
				<Button btnStyle='primary' onClick={() => {}}>
					Create Note
				</Button>
			</CreateBtnContainer>
		</div>
	);
};

export { NoteForm };
