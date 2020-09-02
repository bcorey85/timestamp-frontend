import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../shared/AppPage/AppPageSection';
import { AppPageTitle } from '../shared/AppPage/AppPageTitle';
import { AppPageHeaderControls } from '../shared/AppPage/AppPageHeaderControls';
import { AppPageHeader } from '../shared/AppPage/AppPageHeader';
import { ListSection } from '../shared/ListSection/ListSection';

import { selectUser } from '../../../redux/user';
import { selectAppData } from '../../../redux/appData';
import { useRouterService } from '../../../hooks/useRouterService';

const Task = (): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();

	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading='All Tasks'
					subheading='Task'
					subheadingType={IconType.task}
				/>

				<AppPageHeaderControls>
					<Button
						btnStyle='secondary'
						onClick={() => router.pushUnique('create?action=task')}>
						<TypeIcon type={IconType.task} />
						New Task
					</Button>
				</AppPageHeaderControls>
			</AppPageHeader>
			{/* <AppPageSection>
				<StatsBar>
					<StatCard
						type={IconType.time}
						title={'Hours'}
						stat={appData.hours}
						href={'/app/[userId/activity'}
						as={`/app/${userId}/activity`}
						linkText='View Activity'
					/>
					<StatCard
						type={IconType.note}
						title={'Notes'}
						stat={appData.notes.length}
						href={'/app/[userId/notes'}
						as={`/app/${userId}/notes`}
						linkText='View Notes'
					/>
				</StatsBar>
			</AppPageSection>
			*/}
			<AppPageSection title='Tasks'>
				<ListSection type='task' items={appData.tasks} />
			</AppPageSection>
		</div>
	);
};

export { Task };
