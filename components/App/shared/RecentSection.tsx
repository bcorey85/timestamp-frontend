import React from 'react';

import { RecentItem } from './RecentItem';

import styles from './RecentSection.module.scss';

const RecentSection = (): JSX.Element => {
	return (
		<div>
			<RecentItem />
			<RecentItem />
			<RecentItem />
			<RecentItem />
		</div>
	);
};

export { RecentSection };
