import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';

import {
	Modal,
	ModalControls,
	ModalContent
} from '../../../shared/Modal/Modal';
import { Button } from '../../../shared/Button';

import styles from './CompleteModal.module.scss';
import { Item } from '../../../../utils/ItemService';
import { TypeIcon } from '../TypeIcon';
import { StringService } from '../../../../utils/StringService';

interface Props {
	item: Item;
	isOpen: boolean;
	toggleModal: () => void;
	handleComplete: () => void;
}

const CompleteModal = ({
	item,
	toggleModal,
	isOpen,
	handleComplete
}: Props): JSX.Element => {
	const isComplete = item.meta.completedOn !== null;
	const capitalizedType = StringService.capitalize(item.type);

	return (
		<Modal toggleModal={toggleModal} isOpen={isOpen}>
			<ModalContent>
				<h1 className={styles.title}>
					<BiInfoCircle className={styles.icon} />
					{isComplete ? (
						`Activate ${capitalizedType}`
					) : (
						`Complete ${capitalizedType}`
					)}
				</h1>
				<div className={styles.message}>
					<div className={styles.warning}>
						{isComplete ? (
							'Do you want to activate the following? :'
						) : null}
						{!isComplete ? (
							'Do you want to complete the following? :'
						) : null}
					</div>
					<div className={styles.complete_item}>
						<TypeIcon type={item.type} />
						{item.title}
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
