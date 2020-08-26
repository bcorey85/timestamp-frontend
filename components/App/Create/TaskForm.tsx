import React, { SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/router';

import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';
import { CreateBtnContainer } from './shared/CreateBtnContainer';
import { BaseForm, FormRow } from './shared/BaseForm';
import { TagInput } from './TagInput';

import { useInputState } from '../../../hooks/useInputState';
import { useTags } from '../../../hooks/useTags';
import { useSelector } from 'react-redux';
import { selectAppData } from '../../../redux/appData';
import { selectUser } from '../../../redux/user';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { createTaskApiConfig, Task } from '../../../api/task';

interface Props {
	handleCancel: (e: SyntheticEvent) => void;
}

const TaskForm = ({ handleCancel }: Props): JSX.Element => {
	const { userId, token } = useSelector(selectUser);
	const { tags, handleAddTag, handleRemoveTag } = useTags();
	const [ title, setTitle ] = useInputState('');
	const [ description, setDescription ] = useInputState('');
	const [ projectId, setProjectId ] = useInputState('');
	const {
		request: createTaskRequest,
		errors: createTaskErrors
	} = useApiRequest();
	const appData = useSelector(selectAppData);
	const router = useRouter();

	const handleSubmit = async () => {
		const payload = {
			title,
			projectId: parseInt(projectId),
			description,
			tags
		} as Task;

		const config = createTaskApiConfig({ payload, userId, token });

		const res = await createTaskRequest(config);
		console.log(res);

		// handle config, api submit, errors

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
					Create Task
				</Button>
			</CreateBtnContainer>
		</div>
	);
};

export { TaskForm };
