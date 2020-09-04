import React, { SyntheticEvent, useState, useEffect } from 'react';

import { Input } from '../../shared/Input';
import { DateTimeInput } from '../../shared/DateTimeInput';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';
import { TagInput } from './TagInput';
import { PinInput } from './PinInput';

import { ErrorService } from '../../../utils/ErrorService';
import { ApiError } from '../../../api/index';
import { useInputState } from '../../../hooks/useInputState';
import { useTags } from '../../../hooks/useTags';
import { useSelector } from 'react-redux';
import { selectAppData } from '../../../redux/appData';
import { createNoteApiConfig, NotePayload } from '../../../api/note';
import { selectUser } from '../../../redux/user';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { useRouterService } from '../../../hooks/useRouterService';

interface Props {
	handleCancel: (e: SyntheticEvent) => void;
	initialProjectId?: string;
	initialTaskId?: string;
}

interface Errors {
	title?: string;
	description?: string;
	projectId?: string;
	taskId?: string;
	startTime?: string;
	endTime?: string;
	generic?: ApiError[];
}

const NoteForm = ({
	handleCancel,
	initialProjectId,
	initialTaskId
}: Props): JSX.Element => {
	const [ errors, setErrors ] = useState<Errors>({
		title: null,
		description: null,
		projectId: null,
		taskId: null,
		startTime: null,
		endTime: null,
		generic: []
	});
	const { userId, token } = useSelector(selectUser);
	const { tags, handleAddTag, handleRemoveTag } = useTags();
	const [ title, setTitle ] = useInputState('');
	const [ description, setDescription ] = useInputState('');
	const [ projectId, setProjectId ] = useState(initialProjectId || '');
	const [ taskId, setTaskId ] = useState(initialTaskId || '');
	const [ startTime, setStartTime ] = useInputState('');
	const [ endTime, setEndTime ] = useInputState('');
	const [ startDate, setStartDate ] = useInputState('');
	const [ endDate, setEndDate ] = useInputState('');

	const [ pinned, setPinned ] = useState(false);
	const {
		request: createNoteRequest,
		errors: createNoteErrors
	} = useApiRequest();
	const appData = useSelector(selectAppData);

	useEffect(
		() => {
			const errors = ErrorService.formatErrors(
				[
					'title',
					'description',
					'startTime',
					'endTime',
					'projectId',
					'taskId'
				],
				createNoteErrors
			);

			setErrors(errors);
		},
		[ createNoteErrors ]
	);

	const handleSubmit = async e => {
		e.preventDefault();
		const start = new Date(startDate + ' ' + startTime);
		const end = new Date(endDate + ' ' + endTime);

		const payload: NotePayload = {
			title,
			projectId: parseInt(projectId),
			taskId: parseInt(taskId),
			startTime: start,
			endTime: end,
			description,
			tags,
			pinned
		};

		const config = createNoteApiConfig({ payload, userId, token });
		const res = await createNoteRequest(config);

		if (res.success === false) {
			return;
		}

		if (res.success) {
			handleCancel(e);
		}
	};

	return (
		<React.Fragment>
			<BaseForm>
				<FormRow>
					<PinInput
						pinned={pinned}
						handlePin={() => setPinned(!pinned)}
					/>
				</FormRow>
				<FormRow>
					<Input
						type='text'
						id='title'
						label='Note Title'
						value={title}
						onChange={setTitle}
						error={errors.title}
					/>
				</FormRow>
				<FormRow half>
					<Input
						type='select'
						id='project'
						label='Project'
						value={projectId}
						onChange={e => setProjectId(e.target.value)}
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
						value={taskId}
						onChange={e => setTaskId(e.target.value)}
						error={errors.taskId}>
						<option value={null} />
						{appData.tasks
							.filter(
								task => task.project_id === parseInt(projectId)
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
						dateValue={startDate}
						timeValue={startTime}
						handleDate={setStartDate}
						handleTime={setStartTime}
						error={errors.startTime}
					/>
					<DateTimeInput
						id='end'
						label='End'
						dateValue={endDate}
						timeValue={endTime}
						handleDate={setEndDate}
						handleTime={setEndTime}
						error={errors.endTime}
					/>
				</FormRow>
				<FormRow>
					<TagInput
						handleAddTag={handleAddTag}
						handleRemoveTag={handleRemoveTag}
						tags={tags}
					/>
				</FormRow>
				<FormRow>
					<Input
						type='textarea'
						id='description'
						label='Description'
						value={description}
						onChange={setDescription}
						error={errors.description}
					/>
				</FormRow>
			</BaseForm>
			<CreateBtnContainer>
				<Button btnStyle='link_gray' onClick={handleCancel}>
					Cancel
				</Button>
				<Button btnStyle='primary' onClick={handleSubmit}>
					Create Note
				</Button>
			</CreateBtnContainer>
		</React.Fragment>
	);
};

export { NoteForm };
