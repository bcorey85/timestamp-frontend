import React, { SyntheticEvent, useRef, useEffect } from 'react';
const ReactQuill =
	typeof window !== 'undefined' ? require('react-quill') : () => false;

import { DateTimeInput, Input, Select } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';
import { TagInput } from './shared/TagInput';
import { PinInput } from './shared/PinInput';
import { InputLabel } from '../../shared/Input/InputLabel';

import { useSelector } from 'react-redux';
import { selectAppData } from '../../../redux/appData';
import { useNoteCreateForm } from '../../../hooks/create/useNoteCreateForm';
import { Item } from '../../../utils/ItemService';

interface Props {
	handleClose: (e: SyntheticEvent) => void;
}

const NoteForm = ({ handleClose }: Props): JSX.Element => {
	const appData = useSelector(selectAppData);
	const editorRef = useRef();
	const {
		editMode,
		handleSubmit,
		errors,
		formState,
		formHandlers,
		isLoading
	} = useNoteCreateForm(handleClose);

	useEffect(
		() => {
			if (editorRef.current) {
				// @ts-ignore
				const quillDelta = editorRef.current.editor.getContents();
				formHandlers.setEditorDelta(quillDelta.ops);
			}
		},
		[ formState.description ]
	);

	const quillModules = {
		toolbar: [
			[ 'bold', 'italic', 'underline', 'strike' ],
			[ { list: 'ordered' }, { list: 'bullet' } ]
		]
	};

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
					<Select
						type='select'
						id='task'
						label='Task'
						value={formState.taskId}
						onChange={e => formHandlers.setTaskId(e.target.value)}
						error={errors.taskId}>
						<option value={null} />
						{appData.tasks
							.filter(
								(task: Item) =>
									task.itemId.projectId ===
									parseInt(formState.projectId as string)
							)
							.map((task: Item) => {
								return (
									<option
										value={task.itemId.taskId}
										key={task.itemId.taskId}>
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
					<InputLabel id='note'>Note</InputLabel>
					<ReactQuill
						ref={editorRef}
						id='note'
						value={formState.description}
						onChange={formHandlers.setDescription}
						modules={quillModules}
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
