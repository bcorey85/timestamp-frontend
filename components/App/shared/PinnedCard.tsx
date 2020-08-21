import React from 'react';

import styles from './PinnedCard.module.scss';
import { IconType, TypeIcon } from './TypeIcon';

const PinnedCard = (): JSX.Element => {
	return (
		<div className={styles.card}>
			<div className={styles.title}>
				<TypeIcon type={IconType.project} />
				<span>Project Name</span>
			</div>

			<div className={styles.time}>
				<span className={styles.hours}>49</span> hours
			</div>
			<div className={styles.body}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Voluptate labore recusandae sequi maiores, obcaecati hic quis et
				repudianda...
			</div>
			<div className={styles.stats}>
				<div>Tasks</div>
				<div>15</div>
			</div>
			<div className={styles.stats}>
				<div>Notes</div>
				<div>104</div>
			</div>
		</div>
	);
};

export { PinnedCard };
