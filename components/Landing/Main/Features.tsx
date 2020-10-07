import React from 'react';
import { PinnedCard } from '../../App/shared/PinnedSection/PinnedCard/PinnedCard';

import { demoProject, demoTask, demoNote } from './demoCardData';
import styles from './Features.module.scss';

const Features = () => {
	return (
		<React.Fragment>
			<figure className={styles.arrow_center}>
				<img
					src='/images/landing/features-arrow-spiral.svg'
					alt='arrow'
				/>
			</figure>
			<section>
				<article className={styles.text}>
					<h2>How It Works</h2>
					<p>
						Timestamp is made up of Projects, Tasks and Notes. They
						help you stay organized, focused, and motivated towards
						achieving your goals.
					</p>
				</article>
				<div className={styles.demo_cards}>
					<PinnedCard item={demoProject} />
					<PinnedCard item={demoTask} />
					<PinnedCard item={demoNote} />
				</div>
				<figure className={styles.arrow_cards}>
					<img
						src='images/landing/features-arrow-hook.svg'
						alt='arrow'
					/>
					<img
						src='images/landing/features-arrow-hook.svg'
						alt='arrow'
					/>
				</figure>
			</section>
		</React.Fragment>
	);
};

export { Features };
