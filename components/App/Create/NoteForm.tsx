import React, { SyntheticEvent, useState, useEffect } from 'react';

import { Input } from '../../shared/Input';
import { DateTimeInput } from '../../shared/DateTimeInput';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';
import { TagInput } from './TagInput';
import { PinInput } from './PinInput';

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
}

const NoteForm = ({ handleCancel }: Props): JSX.Element => {
	const { userId, token } = useSelector(selectUser);
	const { tags, handleAddTag, handleRemoveTag } = useTags();
	const [ title, setTitle ] = useInputState('');
	const [ description, setDescription ] = useInputState('');
	const [ projectId, setProjectId ] = useState('');
	const [ taskId, setTaskId ] = useState('');
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
	const { router } = useRouterService();

	useEffect(() => {
		if (router.query && router.query.projectId) {
			setProjectId(router.query.projectId as string);
		}

		if (router.query && router.query.taskId) {
			setTaskId(router.query.taskId as string);
		}
	}, []);

	const handleTime = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		type: string
	) => {
		const date = e[0];
		console.log(date);

		if (type === 'start') {
			setStartTime(date);
		}

		if (type === 'end') {
			setEndTime(date);
		}
	};

	const handleSubmit = async () => {
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

		if (res.success) {
			router.push.dashboard();
		}
	};

	return (
		<div>
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
					/>
				</FormRow>
				<FormRow half>
					<Input
						type='select'
						id='project'
						label='Project'
						value={projectId}
						onChange={e => setProjectId(e.target.value)}>
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
						onChange={e => setTaskId(e.target.value)}>
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
					/>
					<DateTimeInput
						id='end'
						label='End'
						dateValue={endDate}
						timeValue={endTime}
						handleDate={setEndDate}
						handleTime={setEndTime}
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
		</div>
	);
};

export { NoteForm };
