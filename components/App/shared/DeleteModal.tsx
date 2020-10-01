import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';

import { Modal, ModalControls, ModalContent } from '../../shared/Modal/Modal';
import { Button } from '../../shared/Button';

import styles from './DeleteModal.module.scss';

interface Props {
	isOpen: boolean;
	deleteItem: string;
	title: string;
	toggleModal: () => void;
	handleDelete: () => void;
}

const DeleteModal = ({
	toggleModal,
	isOpen,
	deleteItem,
	title,
	handleDelete
}: Props): JSX.Element => {
	return (
		<Modal toggleModal={toggleModal} isOpen={isOpen}>
			<ModalContent>
				<h1 className={styles.title}>
					<BiInfoCircle className={styles.icon} />
					{title}
				</h1>
				<div className={styles.message}>
					<div className={styles.warning}>
						Do you want to delete the following? :
					</div>
					<div className={styles.delete_item}>
						<strong>{deleteItem}</strong>
					</div>
					<div className={styles.warning}>
						(This action is permanent)
					</div>
				</div>
			</ModalContent>
			<ModalControls>
				<Button btnStyle='outline' onClick={toggleModal}>
					Cancel
				</Button>
				<Button btnStyle='delete' onClick={handleDelete}>
					Confirm Delete
				</Button>
			</ModalControls>
		</Modal>
	);
};

export { DeleteModal };
