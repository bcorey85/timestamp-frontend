import React from 'react';

import styles from './TypeIcon.module.scss';

interface Type {
	project: 'project';
	task: 'task';
	note: 'note';
	time: 'time';
	generic: 'generic';
}

interface Props {
	type: keyof Type;
}

const TypeIcon = ({ type }: Props): JSX.Element => {
	if (type === 'project') {
		return <span className={styles.project} />;
	}

	if (type === 'task') {
		return <span className={styles.task} />;
	}

	if (type === 'time') {
		return <span className={styles.time} />;
	}

	if (type === 'note') {
		return <span className={styles.note} />;
	}

	return <span className={styles.generic} />;
};

export { TypeIcon };
