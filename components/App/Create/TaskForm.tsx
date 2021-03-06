import React, { SyntheticEvent } from 'react';

import { Input, TextArea, Select } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';
import { TagInput } from './shared/TagInput';
import { PinInput } from './shared/PinInput';

import { useSelector } from 'react-redux';
import { selectAppData } from '../../../redux/appData';
import { useTaskCreateForm } from '../../../hooks/create/useTaskCreateForm';
import { Item } from '../../../utils/ItemService';

interface Props {
	handleClose: (e: SyntheticEvent) => void;
}

const TaskForm = ({ handleClose }: Props): JSX.Element => {
	const {
		editMode,
		handleSubmit,
		errors,
		formState,
		formHandlers,
		isLoading
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
						autoComplete='off'
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
						error={errors.projectId}>
						<option value={null} />
						{appData.projects.map((project: Item) => {
							return (
								<option
									value={project.itemId.projectId}
									key={project.itemId.projectId}>
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
						Create Task
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

export { TaskForm };
