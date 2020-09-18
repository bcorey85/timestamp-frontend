import React from 'react';

import { AppPageTitle } from '../AppPage/AppPageTitle';
import { IconType } from '../../App/shared/TypeIcon';
import { UserDetails } from './UserDetails';
import { Interface } from './Interface';
import { DeleteAccount } from './DeleteAccount';

import styles from './Settings.module.scss';
import { AppPageHeader } from '../AppPage/AppPageHeader';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageSectionHeading } from '../AppPage/AppPageSectionHeading';

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
			<AppPageSection>
				<AppPageSectionHeading title='User Details' />
				<UserDetails />
			</AppPageSection>
			<AppPageSection>
				<AppPageSectionHeading title='Interface' />
				<Interface />
			</AppPageSection>
			<AppPageSection>
				<AppPageSectionHeading title='Delete Account' />
				<DeleteAccount />
			</AppPageSection>
		</div>
	);
};

export { Settings };
