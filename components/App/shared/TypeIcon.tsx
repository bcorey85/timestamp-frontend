import React from 'react';

import styles from './TypeIcon.module.scss';

export enum IconType {
	project = 'project',
	task = 'task',
	note = 'note',
	time = 'time',
	generic = 'generic',
	none = 'none'
}

interface ItemType {
	project: 'project';
	task: 'task';
	note: 'note';
	time: 'time';
	generic: 'generic';
	none: 'none';
}

interface Props {
	type: keyof ItemType;
}

const TypeIcon = ({ type }: Props): JSX.Element => {
	return <span className={styles[type]} />;
};

export { TypeIcon };
