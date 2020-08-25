import React from 'react';

import { DashboardHeader } from '../shared/DashboardHeader';
import { IconType } from '../../App/shared/TypeIcon';
import { UserDetails } from './UserDetails';
import { Interface } from './Interface';
import { DeleteAccount } from './DeleteAccount';

import styles from './Settings.module.scss';

const Settings = (): JSX.Element => {
	return (
		<div>
			<DashboardHeader
				heading='Settings'
				subheading='Account'
				subheadingType={IconType.generic}
			/>
			<section className={styles.section}>
				<UserDetails />
			</section>
			<section className={styles.section}>
				<Interface />
			</section>
			<section className={styles.section}>
				<DeleteAccount />
			</section>
		</div>
	);
};

export { Settings };
