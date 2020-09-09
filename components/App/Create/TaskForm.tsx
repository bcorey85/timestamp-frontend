import React, { SyntheticEvent, useState, useEffect } from 'react';

import { Input } from '../../shared/Input';
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
import { selectUser } from '../../../redux/user';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { createTaskApiConfig, TaskPayload } from '../../../api/task';
import { useRouterService } from '../../../hooks/useRouterService';
import { selectCreateModal } from '../../../redux/createModal';

interface Props {
	handleCancel: (e: SyntheticEvent) => void;
	initialProjectId?: string;
}

interface Errors {
	title?: string;
	description?: string;
	projectId?: string;
	generic?: ApiError[];
}

const TaskForm = ({ handleCancel }: Props): JSX.Element => {
	const { currentItemId, currentItem } = useSelector(selectCreateModal);

	const [ errors, setErrors ] = useState<Errors>({
		title: null,
		description: null,
		projectId: null,
		generic: []
	});
	const { userId, token } = useSelector(selectUser);
	const { tags, handleAddTag, handleRemoveTag } = useTags(
		currentItem.tags || []
	);
	const [ title, setTitle ] = useInputState(currentItem.title || '');
	const [ description, setDescription ] = useInputState(
		currentItem.description || ''
	);
	const [ projectId, setProjectId ] = useState(currentItemId.projectId || '');
	const [ pinned, setPinned ] = useState(currentItem.pinned || false);
	const {
		request: createTaskRequest,
		errors: createTaskErrors
	} = useApiRequest();
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();

	useEffect(
		() => {
			const errors = ErrorService.formatErrors(
				[ 'title', 'description', 'projectId' ],
				createTaskErrors
			);

			setErrors(errors);
		},
		[ createTaskErrors ]
	);

	const handleSubmit = async e => {
		e.preventDefault();
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
						label='Task Title'
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
					Create Task
				</Button>
			</CreateBtnContainer>
		</React.Fragment>
	);
};

export { TaskForm };
