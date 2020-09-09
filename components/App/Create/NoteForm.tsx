import React, { SyntheticEvent, useState, useEffect } from 'react';

import { Input } from '../../shared/Input';
import { DateTimeInput } from '../../shared/DateTimeInput';
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
		handleCreateSubmit,
		handleEditSubmit,
		errors,
		formState,
		formHandlers
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
					<Input
						type='select'
						id='project'
						label='Project'
						value={formState.projectId}
						onChange={e =>
							formHandlers.setProjectId(e.target.value)}
						error={errors.projectId}>
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
					</Input>
					<Input
						type='select'
						id='task'
						label='Task'
						value={formState.taskId}
						onChange={e => formHandlers.setTaskId(e.target.value)}
						error={errors.taskId}>
						<option value={null} />
						{appData.tasks
							.filter(
								task =>
									task.project_id ===
									parseInt(formState.projectId)
							)
							.map(task => {
								return (
									<option
										value={task.task_id}
										key={task.task_id}>
										{task.title}
									</option>
								);
							})}
					</Input>
				</FormRow>
				<FormRow half>
					<DateTimeInput
						id='start'
						label='Start'
						dateValue={formState.startDate}
						timeValue={formState.startTime}
						handleDate={formHandlers.setStartDate}
						handleTime={formHandlers.setStartTime}
						error={errors.startTime}
					/>
					<DateTimeInput
						id='end'
						label='End'
						dateValue={formState.endDate}
						timeValue={formState.endTime}
						handleDate={formHandlers.setEndDate}
						handleTime={formHandlers.setEndTime}
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

				{!editMode ? (
					<Button btnStyle='primary' onClick={handleCreateSubmit}>
						Create Note
					</Button>
				) : (
					<Button btnStyle='primary' onClick={handleEditSubmit}>
						Save
					</Button>
				)}
			</CreateBtnContainer>
		</React.Fragment>
	);
};

export { NoteForm };
