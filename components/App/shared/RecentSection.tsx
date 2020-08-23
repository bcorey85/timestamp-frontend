import React from 'react';

import { RecentItem } from './RecentItem';
import { IconType } from './TypeIcon';

import styles from './RecentSection.module.scss';

const RecentSection = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<RecentItem
				type={IconType.note}
				title='Note title'
				date='10/10/2019'
				time='12:00am - 12:00pm'
			/>
			<RecentItem
				type={IconType.note}
				title='Note title'
				date='10/10/2019'
				time='12:00am - 12:00pm'
			/>
			<RecentItem
				type={IconType.note}
				title='Note title'
				date='10/10/2019'
				time='12:00am - 12:00pm'
			/>
			<RecentItem
				type={IconType.note}
				title='Note title'
				date='10/10/2019'
				time='12:00am - 12:00pm'
			/>
			<RecentItem
				type={IconType.note}
				title='Note title'
				date='10/10/2019'
				time='12:00am - 12:00pm'
			/>
			<RecentItem
				type={IconType.note}
				title='Note title'
				date='10/10/2019'
				time='12:00am - 12:00pm'
			/>
			<RecentItem
				type={IconType.note}
				title='Note title'
				date='10/10/2019'
				time='12:04am - 12:00pm'
			/>
			<RecentItem
				type={IconType.note}
				title='Note title'
				date='10/10/2019'
				time='12:00am - 12:00pm'
			/>
			<RecentItem
				type={IconType.note}
				title='Note title'
				date='10/10/2019'
				time='12:00am - 12:00pm'
			/>
		</div>
	);
};

export { RecentSection };
