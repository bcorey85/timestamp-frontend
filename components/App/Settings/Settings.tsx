import React from 'react';

import { AppPageTitle } from '../shared/AppPage/AppPageTitle';
import { IconType } from '../../App/shared/TypeIcon';
import { UserDetails } from './UserDetails';
import { Interface } from './Interface';
import { DeleteAccount } from './DeleteAccount';

import styles from './Settings.module.scss';
import { AppPageHeader } from '../shared/AppPage/AppPageHeader';
import { AppPageSection } from '../shared/AppPage/AppPageSection';

const Settings = (): JSX.Element => {
	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading='Settings'
					subheading='Account'
					subheadingType={IconType.generic}
				/>
			</AppPageHeader>
			<AppPageSection title='User Details'>
				<UserDetails />
			</AppPageSection>
			<AppPageSection title='Interface'>
				<Interface />
			</AppPageSection>
			<AppPageSection title='Delete Account'>
				<DeleteAccount />
			</AppPageSection>
		</div>
	);
};

export { Settings };
