import React from 'react';
import { ItemType } from '../../../utils/ItemService';

import styles from './TypeIcon.module.scss';

export enum IconType {
	project = 'project',
	task = 'task',
	note = 'note',
	time = 'time',
	generic = 'generic',
	none = 'none'
}

interface Icon extends ItemType {
	time: 'time';
	generic: 'generic';
	none: 'none';
}

interface Props {
	type: keyof Icon;
}

const TypeIcon = ({ type }: Props): JSX.Element => {
	return <span className={styles[type]} />;
};

export { TypeIcon };
