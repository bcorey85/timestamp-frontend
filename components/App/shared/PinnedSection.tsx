import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './PinnedSection.module.scss';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PinnedCard } from './PinnedCard';

const PinnedSection = (): JSX.Element => {
	return (
		<section className={styles.container}>
			<button className={styles.left_arrow}>
				<FontAwesomeIcon icon={faArrowLeft} />
			</button>
			<PinnedCard />
			<PinnedCard />
			<PinnedCard />
			<PinnedCard />
			<button className={styles.right_arrow}>
				<FontAwesomeIcon icon={faArrowRight} />
			</button>
		</section>
	);
};

export { PinnedSection };
