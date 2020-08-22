import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { CreateNav } from './shared/CreateNav';
import { ProjectForm } from './ProjectForm';
import { DashboardHeader } from '../shared/DashboardHeader';
import { TaskForm } from './TaskForm';
import { NoteForm } from './NoteForm';

import { selectUser } from '../../../redux/user';
import styles from './Create.module.scss';

export enum CreatePage {
	project = 'Project',
	task = 'Task',
	note = 'Note'
}

const Create = () => {
	const { userId } = useSelector(selectUser);
	const router = useRouter();

	const [ currentPage, setCurrentPage ] = useState(CreatePage.project);

	const handlePageChange = (page: CreatePage) => {
		setCurrentPage(page);
	};

	const handleCancel = () => {
		router.push('/app/[userId]/dashboard', `/app/${userId}/dashboard`);
	};

	return (
		<div className={styles.container}>
			<DashboardHeader heading={currentPage} subheading='Create' />
			<div className={styles.form}>
				<CreateNav
					currentPage={currentPage}
					handleClick={handlePageChange}
				/>
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
	);
};

export { Create };
