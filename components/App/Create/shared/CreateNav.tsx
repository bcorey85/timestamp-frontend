import React, { SyntheticEvent } from 'react';

import styles from './CreateNav.module.scss';
import { CreatePage, Create } from '../Create';
import { IconType, TypeIcon } from '../../shared/TypeIcon';

interface Props {
	currentPage: CreatePage;
	handleClick: (page: CreatePage) => void;
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

const CreateNav = ({ currentPage, handleClick }: Props) => {
	return (
		<div className={styles.container}>
			<CreateBtn
				active={currentPage === CreatePage.project}
				type={IconType.project}
				text='Project'
				handleClick={() => handleClick(CreatePage.project)}
			/>
			<CreateBtn
				active={currentPage === CreatePage.task}
				type={IconType.task}
				text='Task'
				handleClick={() => handleClick(CreatePage.task)}
			/>
			<CreateBtn
				active={currentPage === CreatePage.note}
				type={IconType.note}
				text='Note'
				handleClick={() => handleClick(CreatePage.note)}
			/>
		</div>
	);
};

export { CreateNav };
