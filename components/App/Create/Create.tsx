import React, { useState, useEffect } from 'react';

import { CreateNav } from './shared/CreateNav';
import { ProjectForm } from './ProjectForm';
import { DashboardHeader } from '../shared/DashboardHeader';
import { TaskForm } from './TaskForm';
import { NoteForm } from './NoteForm';
import { IconType } from '../shared/TypeIcon';

import { useRouterService } from '../../../hooks/useRouterService';
import styles from './Create.module.scss';

export enum CreatePage {
	project = 'Project',
	task = 'Task',
	note = 'Note'
}

const Create = () => {
	const { router } = useRouterService();
	const [ currentPage, setCurrentPage ] = useState(CreatePage.project);

	useEffect(() => {
		if (router.query && router.query.action) {
			{
				router.query.action === 'project' &&
					setCurrentPage(CreatePage.project);
			}
			{
				router.query.action === 'task' &&
					setCurrentPage(CreatePage.task);
			}
			{
				router.query.action === 'note' &&
					setCurrentPage(CreatePage.note);
			}
		}
	}, []);

	const handlePageChange = (page: CreatePage) => {
		setCurrentPage(page);
	};

	const handleCancel = () => {
		router.push.dashboard();
	};

	return (
		<div className={styles.container}>
			<DashboardHeader
				heading={`New ${currentPage}`}
				subheading='Create'
				subheadingType={IconType.generic}
			/>
			<div className={styles.form}>
				<CreateNav
					currentPage={currentPage}
					handleClick={handlePageChange}
				/>
				<div className={styles.form_body}>
					{currentPage === CreatePage.project ? (
						<ProjectForm handleCancel={handleCancel} />
					) : null}
					{currentPage === CreatePage.task ? (
						<TaskForm handleCancel={handleCancel} />
					) : null}
					{currentPage === CreatePage.note ? (
						<NoteForm handleCancel={handleCancel} />
					) : null}
				</div>
			</div>
		</div>
	);
};

export { Create };
