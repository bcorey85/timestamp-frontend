import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';

import { Modal, ModalControls, ModalContent } from '../../shared/Modal/Modal';
import { Button } from '../../shared/Button';

import styles from './CompleteModal.module.scss';

interface Props {
	isOpen: boolean;
	completeItem: string;
	title: string;
	toggleModal: () => void;
	handleComplete: () => void;
}

const CompleteModal = ({
	toggleModal,
	isOpen,
	completeItem,
	title,
	handleComplete
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
						Are you sure you want to complete the following? :
					</div>
					<div className={styles.delete_item}>
						<strong>{completeItem}</strong>
					</div>
				</div>
			</ModalContent>
			<ModalControls>
				<Button btnStyle='outline' onClick={toggleModal}>
					Cancel
				</Button>
				<Button btnStyle='primary' onClick={handleComplete}>
					Complete
				</Button>
			</ModalControls>
		</Modal>
	);
};

export { CompleteModal };
