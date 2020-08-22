import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar';
import { DashboardSection } from '../shared/DashboardSection';
import { DashboardHeader } from '../shared/DashboardHeader';

import { selectUser } from '../../../redux/user';
import styles from './Dashboard.module.scss';
import { PinnedSection } from '../shared/PinnedSection';
import { RecentSection } from '../shared/RecentSection';

const Dashboard = (): JSX.Element => {
	const { userId } = useSelector(selectUser);

	return (
		<div>
			<div className={styles.header}>
				<DashboardHeader
					heading='Welcome to Timestamp'
					subheading='Dashboard'
				/>

				<div className={styles.btn_container}>
					<Link
						href='/app/[userId]/settings'
						as={`/app/${userId}/settings`}>
						<a className='link-gray'>Settings</a>
					</Link>
					<Button btnStyle='outline' onClick={() => {}}>
						<TypeIcon type={IconType.project} />
						New Project
					</Button>
				</div>
			</div>
			<DashboardSection>
				<StatsBar />
			</DashboardSection>
			<DashboardSection title='Pinned Favorites'>
				<PinnedSection />
			</DashboardSection>
			<DashboardSection title='Recent Items'>
				<RecentSection />
			</DashboardSection>
		</div>
	);
};

export { Dashboard };

export interface BreadcrumbLink {
	iconType: IconType;
	href: string;
	text: string;
}
