import React from 'react';
import Div100vh from 'react-div-100vh';

import { CreateNav } from './shared/CreateNav';
import { ProjectForm } from './ProjectForm';
import { TaskForm } from './TaskForm';
import { NoteForm } from './NoteForm';

import { ItemType } from '../../../utils/ItemService';
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

	const handleClose = () => {
		toggleModal(null);
	};

	if (!isOpen) {
		return <div />;
	}

	return (
		<div className={styles.modal}>
			<Div100vh>
				<div className={styles.modal_container}>
					<div className={styles.form}>
						<CreateNav currentPage={createModalPage} />
						<div className={styles.form_body}>
							{createModalPage === 'project' ? (
								<ProjectForm handleClose={handleClose} />
							) : null}
							{createModalPage === 'task' ? (
								<TaskForm
									handleClose={handleClose}
									initialProjectId={initialProjectId}
								/>
							) : null}
							{createModalPage === 'note' ? (
								<NoteForm handleClose={handleClose} />
							) : null}
						</div>
					</div>
				</div>
			</Div100vh>
		</div>
	);
};

export { CreateModal };
