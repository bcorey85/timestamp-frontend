import React, { SyntheticEvent, useState, useEffect } from 'react';

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
import { selectUser } from '../../../redux/user';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { createTaskApiConfig, TaskPayload } from '../../../api/task';
import { useRouterService } from '../../../hooks/useRouterService';

interface Props {
	handleCancel: (e: SyntheticEvent) => void;
}

const TaskForm = ({ handleCancel }: Props): JSX.Element => {
	const { userId, token } = useSelector(selectUser);
	const { tags, handleAddTag, handleRemoveTag } = useTags();
	const [ title, setTitle ] = useInputState('');
	const [ description, setDescription ] = useInputState('');
	const [ projectId, setProjectId ] = useState('');
	const [ pinned, setPinned ] = useState(false);
	const {
		request: createTaskRequest,
		errors: createTaskErrors
	} = useApiRequest();
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();

	useEffect(() => {
		if (router.query && router.query.projectId) {
			setProjectId(router.query.projectId as string);
		}
	}, []);

	const handleSubmit = async () => {
		const payload: TaskPayload = {
			title,
			projectId: parseInt(projectId),
			description,
			tags,
			pinned
		};

		const config = createTaskApiConfig({ payload, userId, token });

		const res = await createTaskRequest(config);

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
						label='Task Title'
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
						label='Goal'
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
					Create Task
				</Button>
			</CreateBtnContainer>
		</div>
	);
};

export { TaskForm };
