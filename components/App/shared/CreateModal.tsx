import React, { useState, useEffect } from 'react';

import { CreateNav } from '../Create/shared/CreateNav';
import { ProjectForm } from '../Create/ProjectForm';
import { TaskForm } from '../Create/TaskForm';
import { NoteForm } from '../Create/NoteForm';

import { ItemType } from '../../../utils/ItemService';
import styles from './CreateModal.module.scss';

export enum CreatePage {
	project = 'Project',
	task = 'Task',
	note = 'Note'
}

interface Props {
	isOpen: boolean;
	toggleModal: (config) => void;
	type: keyof ItemType;
	initialTaskId?: string;
	initialProjectId?: string;
}

const CreateModal = ({
	isOpen,
	toggleModal,
	type,
	initialProjectId,
	initialTaskId
}: Props): JSX.Element => {
	const [ currentPage, setCurrentPage ] = useState(CreatePage[type]);

	useEffect(
		() => {
			setCurrentPage(CreatePage[type]);
		},
		[ type ]
	);

	const handlePageChange = (page: CreatePage) => {
		setCurrentPage(page);
	};

	const handleCancel = () => {
		toggleModal(null);
	};

	if (!isOpen) {
		return <div />;
	}

	return (
		<div className={styles.modal}>
			<div className={styles.modal_container}>
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
							<NoteForm
								handleCancel={handleCancel}
								initialProjectId={initialProjectId}
								initialTaskId={initialTaskId}
							/>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export { CreateModal };
