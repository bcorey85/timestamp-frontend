import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { DashboardSection } from '../shared/DashboardSection';
import { DashboardHeader } from '../shared/DashboardHeader';
import { ListSection } from '../shared/ListSection/ListSection';

import { selectAppData } from '../../../redux/appData';
import { selectUser } from '../../../redux/user';
import styles from './Project.module.scss';
import { useRouterService } from '../../../hooks/useRouterService';

const Project = (): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();

	return (
		<div>
			<div className={styles.header}>
				<DashboardHeader
					heading='All Projects'
					subheading='Project'
					subheadingType={IconType.project}
				/>

				<div className={styles.btn_container}>
					<Button
						btnStyle='secondary'
						onClick={() =>
							router.pushUnique('create?action=project')}>
						<TypeIcon type={IconType.project} />
						New Project
					</Button>
				</div>
			</div>
			{/* <DashboardSection>
				<StatsBar>
					<StatCard
						type={IconType.time}
						title={'Hours'}
						stat={appData.hours}
						href={'/app/[userId/activity'}
						as={`/app/${userId}/activity`}
						linkText='View Activity'
					/>
					<StatCard
						type={IconType.project}
						title={'Projects'}
						stat={appData.projects.length}
						href={'/app/[userId/projects'}
						as={`/app/${userId}/projects`}
						linkText='View Projects'
					/>
					<StatCard
						type={IconType.task}
						title={'Tasks'}
						stat={appData.tasks.length}
						href={'/app/[userId/tasks'}
						as={`/app/${userId}/tasks`}
						linkText='View Tasks'
					/>
					<StatCard
						type={IconType.note}
						title={'Notes'}
						stat={appData.notes.length}
						href={'/app/[userId/notes'}
						as={`/app/${userId}/notes`}
						linkText='View Notes'
					/>
				</StatsBar>
			</DashboardSection> */}
			<DashboardSection title='Projects'>
				<ListSection type='project' items={appData.projects} />
			</DashboardSection>
		</div>
	);
};

export { Project };
