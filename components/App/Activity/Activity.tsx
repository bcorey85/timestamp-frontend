import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { AppPageHeader } from '../AppPage/AppPageHeader';

import { selectUser } from '../../../redux/user';
import { ListSection } from '../shared/ListSection/ListSection';
import { selectAppData } from '../../../redux/appData';
import { AppPageSectionHeading } from '../AppPage/AppPageSectionHeading';

const Activity = (): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const appData = useSelector(selectAppData);

	return (
		<React.Fragment>
			<AppPageHeader>
				<AppPageTitle
					heading='User Stats'
					subheading='Activity'
					subheadingType={IconType.time}
				/>
			</AppPageHeader>
			<AppPageSection>Not yet implemented...</AppPageSection>
		</React.Fragment>
	);
};

export { Activity };
