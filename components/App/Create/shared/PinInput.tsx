import React, { SyntheticEvent } from 'react';

import styles from './PinInput.module.scss';
import { PinnedIcon } from '../../shared/PinnedSection/PinnedIcon';

interface Props {
	pinned: boolean;
	handlePin: () => void;
}

const PinInput = ({ pinned, handlePin }: Props): JSX.Element => {
	const handleClick = (e: SyntheticEvent) => {
		e.preventDefault();
		handlePin();
	};

	return (
		<button className={styles.container} onClick={handleClick}>
			Pin
			<PinnedIcon pinned={pinned} />
		</button>
	);
};

export { PinInput };
