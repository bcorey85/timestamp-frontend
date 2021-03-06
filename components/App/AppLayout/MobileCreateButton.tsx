import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { BiPlus } from 'react-icons/bi';

import { ModalConfig, ModalMode } from '../../../hooks/create/useCreateModal';
import { selectUser } from '../../../redux/user';

import styles from './MobileCreateButton.module.scss';

interface Props {
	toggleCreateModal: (mode: keyof ModalMode, config: ModalConfig) => void;
}

const MobileCreateButton = ({ toggleCreateModal }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);

	return (
		<div className={styles.container}>
			<button
				onClick={() =>
					toggleCreateModal('new', { createModalPage: 'project' })}
				className={styles.button}>
				<BiPlus />
			</button>
		</div>
	);
};

export { MobileCreateButton };
