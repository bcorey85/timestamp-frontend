import React, { SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/router';

import { Input } from '../../shared/Input';
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

interface Props {
	handleCancel: (e: SyntheticEvent) => void;
}

const NoteForm = ({ handleCancel }: Props): JSX.Element => {
	const { userId, token } = useSelector(selectUser);
	const { tags, handleAddTag, handleRemoveTag } = useTags();
	const [ title, setTitle ] = useInputState('');
	const [ description, setDescription ] = useInputState('');
	const [ projectId, setProjectId ] = useInputState('');
	const [ taskId, setTaskId ] = useInputState('');
	const [ start, setStart ] = useInputState('');
	const [ end, setEnd ] = useInputState('');
	const [ pinned, setPinned ] = useState(false);
	const {
		request: createNoteRequest,
		errors: createNoteErrors
	} = useApiRequest();
	const appData = useSelector(selectAppData);
	const router = useRouter();

	const handleSubmit = async () => {
		const payload: NotePayload = {
			title,
			projectId: parseInt(projectId),
			taskId: parseInt(taskId),
			start,
			end,
			description,
			tags,
			pinned
		};

		const config = createNoteApiConfig({ payload, userId, token });
		const res = await createNoteRequest(config);

		if (res.success) {
			router.push(
				`/app/[userId]/dashboard`,
				`/app/${res.data.id}/dashboard`
			);
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
						onChange={setProjectId}>
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
						onChange={setTaskId}>
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
					<Input
						type='datetime-local'
						id='start'
						label='Start'
						value={start}
						onChange={setStart}
					/>
					<Input
						type='datetime-local'
						id='end'
						label='End'
						value={end}
						onChange={setEnd}
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
