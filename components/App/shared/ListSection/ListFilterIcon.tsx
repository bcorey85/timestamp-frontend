import React from 'react';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

import styles from './ListFilterIcon.module.scss';

interface Props {
	sortDesc: boolean;
}

const ListFilterIcon = ({ sortDesc }: Props): JSX.Element => {
	if (sortDesc) {
		return (
			<span className={styles.direction_icon}>
				<BiChevronDown />
			</span>
		);
	}
	return (
		<span className={styles.direction_icon}>
			<BiChevronUp />
		</span>
	);
};

export { ListFilterIcon };
