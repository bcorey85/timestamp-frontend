import React, { SyntheticEvent } from 'react';

import { Input, DateTimeInput, Select, TextArea } from '../../shared/Input';
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
		editMode,
		handleSubmit,
		errors,
		formState,
		formHandlers,
		isLoading
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
						autoComplete='off'
					/>
				</FormRow>
				<FormRow>
					<TextArea
						id='description'
						label='Description'
						value={formState.description}
						onChange={formHandlers.setDescription}
						error={errors.description}
						autoComplete='off'
					/>
				</FormRow>
			</BaseForm>

			<CreateBtnContainer>
				<Button btnStyle='link_gray' onClick={handleClose}>
					Cancel
				</Button>
				{!editMode ? (
					<Button
						btnStyle='primary'
						onClick={e => handleSubmit(e, 'new')}
						isLoading={isLoading}>
						Create Project
					</Button>
				) : (
					<Button
						btnStyle='primary'
						onClick={e => handleSubmit(e, 'edit')}
						isLoading={isLoading}>
						Save
					</Button>
				)}
			</CreateBtnContainer>
		</React.Fragment>
	);
};

export { ProjectForm };
