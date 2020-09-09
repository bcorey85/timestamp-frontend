import React, { useState, useEffect } from 'react';

import { CreateNav } from './shared/CreateNav';
import { ProjectForm } from './ProjectForm';
import { TaskForm } from './TaskForm';
import { NoteForm } from './NoteForm';

import { ItemType } from '../../../utils/ItemService';
import styles from './CreateModal.module.scss';
import { useSelector } from 'react-redux';
import { selectCreateModal } from '../../../redux/createModal';

export interface CreatePage {
	project: 'project';
	task: 'task';
	note: 'note';
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
	const { createModalPage } = useSelector(selectCreateModal);

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
					<CreateNav currentPage={createModalPage} />
					<div className={styles.form_body}>
						{createModalPage === 'project' ? (
							<ProjectForm handleCancel={handleCancel} />
						) : null}
						{createModalPage === 'task' ? (
							<TaskForm
								handleCancel={handleCancel}
								initialProjectId={initialProjectId}
							/>
						) : null}
						{createModalPage === 'note' ? (
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
