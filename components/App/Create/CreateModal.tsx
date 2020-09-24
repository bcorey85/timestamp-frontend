import React from 'react';
import { BiX } from 'react-icons/bi';

import { CreateNav } from './shared/CreateNav';
import { ProjectForm } from './ProjectForm';
import { TaskForm } from './TaskForm';
import { NoteForm } from './NoteForm';

import { useSelector } from 'react-redux';
import { selectCreateModal } from '../../../redux/createModal';
import { ModalConfig, ModalMode } from '../../../hooks/create/useCreateModal';

import styles from './CreateModal.module.scss';

export interface CreatePage {
	project: 'project';
	task: 'task';
	note: 'note';
}

interface Props {
	isOpen: boolean;
	toggleModal: (mode?: keyof ModalMode, config?: ModalConfig) => void;
}

const CreateModal = ({ isOpen, toggleModal }: Props): JSX.Element => {
	const { createModalPage } = useSelector(selectCreateModal);

	const handleClose = () => {
		toggleModal(null);
	};

	if (!isOpen) {
		return <div />;
	}

	return (
		<div className={styles.modal}>
			<div className={styles.modal_container}>
				<div className={styles.modal_close}>
					<button onClick={handleClose}>
						<BiX />
					</button>
				</div>

				<div className={styles.form}>
					<CreateNav currentPage={createModalPage} />
					<div className={styles.form_body}>
						{createModalPage === 'project' ? (
							<ProjectForm handleClose={handleClose} />
						) : null}
						{createModalPage === 'task' ? (
							<TaskForm handleClose={handleClose} />
						) : null}
						{createModalPage === 'note' ? (
							<NoteForm handleClose={handleClose} />
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export { CreateModal };
