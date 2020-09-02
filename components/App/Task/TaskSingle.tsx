import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../shared/AppPage/AppPageSection';
import { AppPageTitle } from '../shared/AppPage/AppPageTitle';
import { AppPageHeaderControls } from '../shared/AppPage/AppPageHeaderControls';
import { AppPageHeader } from '../shared/AppPage/AppPageHeader';
import { AppPageMeta } from '../shared/AppPage/AppPageMeta';
import { ListSection } from '../shared/ListSection/ListSection';

import { selectAppData } from '../../../redux/appData';
import { selectUser } from '../../../redux/user';
import styles from './Task.module.scss';
import { useRouterService } from '../../../hooks/useRouterService';

const TaskSingle = (): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();

	const currentTask = appData.tasks.filter(task => {
		return task.task_id === Number(router.query.taskId);
	})[0];

	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading={currentTask.title}
					subheading='Task'
					subheadingType={IconType.task}>
					<AppPageMeta>
						<p>{currentTask.description}</p>
						<p>Hours: {currentTask.hours}</p>
						<p>
							Started On:
							{new Date(
								Date.parse(currentTask.created_at)
							).toLocaleDateString()}
						</p>
					</AppPageMeta>
				</AppPageTitle>

				<AppPageHeaderControls>
					<Button
						btnStyle='link_gray'
						onClick={() => router.pushUnique('create?action=task')}>
						Edit
					</Button>
					<Button
						btnStyle='secondary'
						onClick={() =>
							router.pushUnique(
								`create?action=note&projectId=${currentTask.project_id}&taskId=${currentTask.task_id}`
							)}>
						<TypeIcon type={IconType.note} />
						Add Note
					</Button>
				</AppPageHeaderControls>
			</AppPageHeader>

			<AppPageSection title='Notes'>
				<ListSection
					type='note'
					items={appData.notes.filter(
						note => note.task_id === currentTask.task_id
					)}
				/>
			</AppPageSection>
		</div>
	);
};

export { TaskSingle };
