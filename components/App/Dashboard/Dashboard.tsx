import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import { Breadcrumb } from '../shared/Breadcrumb';
import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar';
import { DashboardSection } from '../shared/DashboardSection';

import { selectUser } from '../../../redux/user';
import styles from './Dashboard.module.scss';
import { PinnedSection } from '../shared/PinnedSection';
import { RecentSection } from '../shared/RecentSection';

const Dashboard = (): JSX.Element => {
	const { userId } = useSelector(selectUser);

	const breadcrumbLinks = [
		{
			iconType: IconType.none,
			href: `/app/${userId}/dashboard`,
			text: 'Dashboard'
		}
	];

	return (
		<div>
			<Breadcrumb links={breadcrumbLinks} />
			<div className={styles.header}>
				<h1>Welcome to Timestamp</h1>
				<div className={styles.btn_container}>
					<Link
						href='/app/[userId]/settings'
						as={`/app/${userId}/settings`}>
						<a>Settings</a>
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
