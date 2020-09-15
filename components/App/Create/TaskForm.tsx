import React, { SyntheticEvent } from 'react';

import { Input, TextArea, Select } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';
import { TagInput } from './TagInput';
import { PinInput } from './PinInput';

import { useSelector } from 'react-redux';
import { selectAppData } from '../../../redux/appData';
import { useTaskCreateForm } from '../../../hooks/create/useTaskCreateForm';

interface Props {
	handleClose: (e: SyntheticEvent) => void;
	initialProjectId?: string;
}

const TaskForm = ({ handleClose }: Props): JSX.Element => {
	const {
		editMode,
		handleSubmit,
		errors,
		formState,
		formHandlers
	} = useTaskCreateForm(handleClose);
	const appData = useSelector(selectAppData);

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
						label='Task Title'
						value={formState.title}
						onChange={formHandlers.setTitle}
						error={errors.title}
					/>
				</FormRow>
				<FormRow half>
					<Select
						type='select'
						id='project'
						label='Project'
						value={formState.projectId}
						onChange={e =>
							formHandlers.setProjectId(e.target.value)}
						error={errors.projectId}
						disabled={editMode}>
						<option value={null} />
						{appData.projects.map(project => {
							return (
								<option
									value={project.project_id}
									key={project.project_id}>
									{project.title}
								</option>
							);
						})}
					</Select>
				</FormRow>
				<FormRow>
					<TagInput
						handleAddTag={formHandlers.handleAddTag}
						handleRemoveTag={formHandlers.handleRemoveTag}
						tags={formState.tags}
					/>
				</FormRow>
				<FormRow>
					<TextArea
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

				{!editMode ? (
					<Button
						btnStyle='primary'
						onClick={e => handleSubmit(e, 'new')}>
						Create Task
					</Button>
				) : (
					<Button
						btnStyle='primary'
						onClick={e => handleSubmit(e, 'edit')}>
						Save
					</Button>
				)}
			</CreateBtnContainer>
		</React.Fragment>
	);
};

export { TaskForm };
