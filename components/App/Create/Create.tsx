import React, { useState } from 'react';

import { CreateNav } from './shared/CreateNav';
import { ProjectForm } from './ProjectForm';
import { DashboardHeader } from '../shared/DashboardHeader';
import { TaskForm } from './TaskForm';
import { NoteForm } from './NoteForm';

import styles from './Create.module.scss';

export enum CreatePage {
	project = 'Project',
	task = 'Task',
	note = 'Note'
}

const Create = () => {
	const [ currentPage, setCurrentPage ] = useState(CreatePage.project);

	const handlePageChange = (page: CreatePage) => {
		setCurrentPage(page);
	};

	return (
		<div className={styles.container}>
			<DashboardHeader heading={currentPage} subheading='Create' />
			<div className={styles.form}>
				<CreateNav
					currentPage={currentPage}
					handleClick={handlePageChange}
				/>
				{currentPage === CreatePage.project ? <ProjectForm /> : null}
				{currentPage === CreatePage.task ? <TaskForm /> : null}
				{currentPage === CreatePage.note ? <NoteForm /> : null}
			</div>
		</div>
	);
};

export { Create };
