import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './PinnedSection.module.scss';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PinnedCard } from './PinnedCard';
import { IconType } from './TypeIcon';

const PinnedSection = (): JSX.Element => {
	return (
		<div>
			<section className={styles.container}>
				<PinnedCard
					title='Project Name'
					type={IconType.project}
					hours='49'
					body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting...'
					label1='Tasks'
					label2='Notes'
					stat1='15'
					stat2='104'
				/>
				<PinnedCard
					title='Task Name'
					type={IconType.task}
					hours='49'
					body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting...'
					label1='Notes'
					label2='Tags'
					stat1='104'
					stat2='#tag1, #tag2, #tag3'
				/>
				<PinnedCard
					title='Note Name'
					type={IconType.note}
					date='12/12/19'
					time='10:30pm - 12:00am'
					body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting...'
					label1='Hours'
					label2='Tags'
					stat1='3 hr'
					stat2='none'
				/>
				<PinnedCard
					title='Project Name'
					type={IconType.project}
					hours='49'
					body='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting...'
					label1='Tasks'
					label2='Notes'
					stat1='15'
					stat2='104'
				/>
			</section>
			<nav className={styles.nav_container}>
				<button className={styles.left_arrow}>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
				<div className={styles.pagination}>Page 1 / 5</div>

				<button className={styles.right_arrow}>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</nav>
		</div>
	);
};

export { PinnedSection };
