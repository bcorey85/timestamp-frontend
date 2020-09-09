import React, { SyntheticEvent } from 'react';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';
import { PinInput } from './PinInput';

import { useProjectCreateForm } from '../../../hooks/create/useProjectCreateForm';

interface Props {
	handleClose: (e: SyntheticEvent) => void;
}

const ProjectForm = ({ handleClose }: Props): JSX.Element => {
	const {
		handleSubmit,
		errors,
		formState,
		formHandlers
	} = useProjectCreateForm(handleClose);

	return (
		<React.Fragment>
			<BaseForm>
				<FormRow>
					<PinInput
						pinned={formState.pinned}
						handlePin={() =>
							formHandlers.setPinned(!formState.pinned)}
					/>
				</FormRow>
				<FormRow>
					<Input
						type='text'
						id='title'
						label='Project Title'
						value={formState.title}
						onChange={formHandlers.setTitle}
						error={errors.title}
					/>
				</FormRow>
				<FormRow>
					<Input
						type='textarea'
						id='description'
						label='Description'
						value={formState.description}
						onChange={formHandlers.setDescription}
						error={errors.description}
					/>
				</FormRow>
			</BaseForm>

			<CreateBtnContainer>
				<Button btnStyle='link_gray' onClick={handleClose}>
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
