import React from 'react';
import { ImStarEmpty, ImStarFull } from 'react-icons/im';

import styles from './PinnedIcon.module.scss';

interface Props {
	pinned: boolean;
}

const PinnedIcon = ({ pinned }: Props): JSX.Element => {
	return (
		<React.Fragment>
			{pinned ? (
				<ImStarFull className={styles.icon_pinned} />
			) : (
				<ImStarEmpty className={styles.icon} />
			)}
		</React.Fragment>
	);
};

export { PinnedIcon };
