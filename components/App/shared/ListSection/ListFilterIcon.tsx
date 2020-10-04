import React from 'react';
import { BiCaretUp, BiCaretDown } from 'react-icons/bi';

import styles from './ListFilterIcon.module.scss';

interface Props {
	sortDesc: boolean;
}

const ListFilterIcon = ({ sortDesc }: Props): JSX.Element => {
	if (sortDesc) {
		return (
			<span className={styles.direction_icon}>
				<BiCaretUp />
			</span>
		);
	}
	return (
		<span className={styles.direction_icon}>
			<BiCaretDown />
		</span>
	);
};

export { ListFilterIcon };
