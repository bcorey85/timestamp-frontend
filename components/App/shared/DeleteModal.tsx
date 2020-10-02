import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';

import { Modal, ModalControls, ModalContent } from '../../shared/Modal/Modal';
import { Button } from '../../shared/Button';

import styles from './DeleteModal.module.scss';
import { Item } from '../../../utils/ItemService';
import { TypeIcon } from './TypeIcon';
import { StringService } from '../../../utils/StringService';

interface Props {
	item: Item;
	isOpen: boolean;
	toggleModal: () => void;
	handleDelete: () => void;
}

const DeleteModal = ({
	item,
	toggleModal,
	isOpen,
	handleDelete
}: Props): JSX.Element => {
	const capitalizedType = StringService.capitalize(item.type);
	return (
		<Modal toggleModal={toggleModal} isOpen={isOpen}>
			<ModalContent>
				<h1 className={styles.title}>
					<BiInfoCircle className={styles.icon} />
					Delete {capitalizedType}
				</h1>
				<div className={styles.message}>
					<div className={styles.warning}>
						Do you want to delete the following? :
					</div>
					<div className={styles.delete_item}>
						<TypeIcon type={item.type} /> {item.title}
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
					Delete
				</Button>
			</ModalControls>
		</Modal>
	);
};

export { DeleteModal };
