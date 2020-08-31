import React from 'react';
import { useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { DashboardSection } from '../shared/DashboardSection';
import { DashboardHeader } from '../shared/DashboardHeader';
import { ListSection } from '../shared/ListSection/ListSection';

import { selectUser } from '../../../redux/user';
import { selectAppData } from '../../../redux/appData';
import { useRouterService } from '../../../hooks/useRouterService';
import styles from './Note.module.scss';

const Note = (): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();

	return (
		<div>
			<div className={styles.header}>
				<DashboardHeader
					heading='All Notes'
					subheading='Note'
					subheadingType={IconType.note}
				/>

				<div className={styles.btn_container}>
					<Button
						btnStyle='outline'
						onClick={() => router.pushUnique('create?action=note')}>
						<TypeIcon type={IconType.note} />
						New Note
					</Button>
				</div>
			</div>
			{/* <DashboardSection>
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
			</DashboardSection> */}

			<DashboardSection title='Notes'>
				<ListSection items={appData.notes} />
			</DashboardSection>
		</div>
	);
};

export { Note };
