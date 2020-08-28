import React from 'react';
import { ImStarEmpty, ImStarFull } from 'react-icons/im';
import { RiStarLine, RiStarFill } from 'react-icons/ri';

import styles from './PinnedIcon.module.scss';

interface Props {
	pinned: boolean;
}

const PinnedIcon = ({ pinned }: Props): JSX.Element => {
	return (
		<React.Fragment>
			{pinned ? (
				<RiStarFill className={styles.icon_pinned} />
			) : (
				<RiStarLine className={styles.icon} />
			)}
		</React.Fragment>
	);
};

export { PinnedIcon };
