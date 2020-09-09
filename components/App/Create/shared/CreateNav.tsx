import React, { SyntheticEvent } from 'react';

import styles from './CreateNav.module.scss';
import { CreatePage } from '../CreateModal';
import { IconType, TypeIcon } from '../../shared/TypeIcon';
import { useCreateModal } from '../../../../hooks/useCreateModal';

interface Props {
	currentPage: keyof CreatePage;
}

interface BtnProps {
	active: boolean;
	type: IconType;
	text: string;
	handleClick: (e: SyntheticEvent) => void;
}

const CreateBtn = ({ active, type, text, handleClick }: BtnProps) => {
	return (
		<button
			className={active ? styles.btn_active : styles.btn}
			onClick={handleClick}>
			<TypeIcon type={type} />
			{text}
		</button>
	);
};

const CreateNav = ({ currentPage }: Props) => {
	const { setCreateModalPage } = useCreateModal();

	return (
		<div className={styles.container}>
			<CreateBtn
				active={currentPage === 'project'}
				type={IconType.project}
				text='Project'
				handleClick={() => setCreateModalPage('project')}
			/>
			<CreateBtn
				active={currentPage === 'task'}
				type={IconType.task}
				text='Task'
				handleClick={() => setCreateModalPage('task')}
			/>
			<CreateBtn
				active={currentPage === 'note'}
				type={IconType.note}
				text='Note'
				handleClick={() => setCreateModalPage('note')}
			/>
		</div>
	);
};

export { CreateNav };
