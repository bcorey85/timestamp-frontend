import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../shared/AppPage/AppPageSection';
import { AppPageTitle } from '../shared/AppPage/AppPageTitle';
import { AppPageHeader } from '../shared/AppPage/AppPageHeader';

import { selectUser } from '../../../redux/user';
import { ListSection } from '../shared/ListSection/ListSection';
import { selectAppData } from '../../../redux/appData';

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
			<AppPageSection>
				<StatsBar>
					<StatCard
						type={IconType.time}
						title={'Hours'}
						stat={'10,000'}
						href={'/app/[userId/activity'}
						as={`/app/${userId}/activity`}
						linkText='View Activity'
					/>
					<StatCard
						type={IconType.project}
						title={'Projects'}
						stat={'4'}
						href={'/app/[userId/projects'}
						as={`/app/${userId}/projects`}
						linkText='View Projects'
					/>
					<StatCard
						type={IconType.task}
						title={'Tasks'}
						stat={'25'}
						href={'/app/[userId/tasks'}
						as={`/app/${userId}/tasks`}
						linkText='View Tasks'
					/>
					<StatCard
						type={IconType.note}
						title={'Notes'}
						stat={'482'}
						href={'/app/[userId/notes'}
						as={`/app/${userId}/notes`}
						linkText='View Notes'
					/>
				</StatsBar>
			</AppPageSection>

			<AppPageSection title='Recent Items'>
				<ListSection type='note' items={appData.notes} />
			</AppPageSection>
		</React.Fragment>
	);
};

export { Activity };
