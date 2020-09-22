import React, { SyntheticEvent, useState, useEffect } from 'react';
import DatePicker from 'react-datetime';

import { DateTimeInput, Input, Select, TextArea } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';
import { TagInput } from './TagInput';
import { PinInput } from './PinInput';

import { useSelector } from 'react-redux';
import { selectAppData } from '../../../redux/appData';
import { useNoteCreateForm } from '../../../hooks/create/useNoteCreateForm';

interface Props {
	handleClose: (e: SyntheticEvent) => void;
}

const NoteForm = ({ handleClose }: Props): JSX.Element => {
	const appData = useSelector(selectAppData);

	const {
		editMode,
		handleSubmit,
		errors,
		formState,
		formHandlers,
		isLoading
	} = useNoteCreateForm(handleClose);

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
						label='Note Title'
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
									value={project.projectId}
									key={project.projectId}>
									{project.title}
								</option>
							);
						})}
					</Select>
					<Select
						type='select'
						id='task'
						label='Task'
						value={formState.taskId}
						onChange={e => formHandlers.setTaskId(e.target.value)}
						error={errors.taskId}
						disabled={editMode}>
						<option value={null} />
						{appData.tasks
							.filter(
								task =>
									task.projectId ===
									parseInt(formState.projectId)
							)
							.map(task => {
								return (
									<option
										value={task.taskId}
										key={task.taskId}>
										{task.title}
									</option>
								);
							})}
					</Select>
				</FormRow>
				<FormRow>
					<DateTimeInput
						id='start'
						label='Start Time'
						dateValue={formState.startDate}
						handleDate={formHandlers.setStartDate}
						error={errors.startTime}
					/>
				</FormRow>
				<FormRow>
					<DateTimeInput
						id='end'
						label='End Time'
						dateValue={formState.endDate}
						handleDate={formHandlers.setEndDate}
						error={errors.endTime}
					/>
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
						onClick={e => handleSubmit(e, 'new')}
						isLoading={isLoading}>
						Create Note
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

export { NoteForm };
