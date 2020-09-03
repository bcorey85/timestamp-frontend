import React from 'react';

import styles from './Modal.module.scss';
import { BiX } from 'react-icons/bi';

interface Props {
	children?: any;
	toggleModal: (boolean: boolean) => void;
	isOpen: boolean;
}

const Modal = ({ toggleModal, isOpen, children }: Props): JSX.Element => {
	if (!isOpen) {
		return <div />;
	}

	return (
		<div className={styles.modal}>
			<div className={styles.modal_container}>
				<div className={styles.modal_close}>
					<div onClick={() => toggleModal(false)}>
						<BiX />
					</div>
				</div>
				{children}
			</div>
		</div>
	);
};

export { Modal };
export { ModalContent } from './ModalContent';
export { ModalControls } from './ModalControls';
