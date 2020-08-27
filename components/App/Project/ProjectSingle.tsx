import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar';
import { StatCard } from '../shared/StatCard';
import { DashboardSection } from '../shared/DashboardSection';
import { DashboardHeader } from '../shared/DashboardHeader';
import { ListSection } from '../shared/ListSection/ListSection';

import { selectAppData } from '../../../redux/appData';
import { selectUser } from '../../../redux/user';
import styles from './Project.module.scss';
import { current } from '@reduxjs/toolkit';

const ProjectSingle = (): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const router = useRouter();

	const currentProject = appData.projects.filter(project => {
		return project.project_id === Number(router.query.projectId);
	})[0];

	return (
		<div>
			<div className={styles.header}>
				<DashboardHeader
					heading={currentProject.title}
					subheading='Project'
					subheadingType={IconType.project}
				/>
				<div className={styles.meta}>
					<p>{currentProject.description}</p>
					<p>Hours: {currentProject.hours}</p>
					<p>
						Started On:
						{new Date(
							Date.parse(currentProject.created_at)
						).toLocaleDateString()}
					</p>
				</div>

				{console.log(currentProject)}

				<div className={styles.btn_container}>
					<Button
						btnStyle='outline'
						onClick={() => {
							router.push(
								`/app/[userId]/create?action=project`,
								`/app/${userId}/create?action=project`
							);
						}}>
						<TypeIcon type={IconType.project} />
						Edit
					</Button>
				</div>
			</div>

			<DashboardSection title='Tasks'>
				<ListSection
					items={appData.tasks.filter(
						task => task.project_id === currentProject.project_id
					)}
				/>
			</DashboardSection>
		</div>
	);
};

export { ProjectSingle };
