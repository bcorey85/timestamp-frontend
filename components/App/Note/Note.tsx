import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar';
import { StatCard } from '../shared/StatCard';
import { DashboardSection } from '../shared/DashboardSection';
import { DashboardHeader } from '../shared/DashboardHeader';
import { RecentSection } from '../shared/RecentSection';

import { selectUser } from '../../../redux/user';
import styles from './Note.module.scss';

const Note = (): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const router = useRouter();

	return (
		<div>
			<div className={styles.header}>
				<DashboardHeader
					heading='All Notes'
					subheading='Note'
					subheadingType={IconType.note}
				/>

				<div className={styles.btn_container}>
					<Link
						href='/app/[userId]/settings'
						as={`/app/${userId}/settings`}>
						<a className='link-gray'>Edit Note</a>
					</Link>
					<Button
						btnStyle='outline'
						onClick={() => {
							router.push(
								`/app/[userId]/create?action=note`,
								`/app/${userId}/create?action=note`
							);
						}}>
						<TypeIcon type={IconType.note} />
						New Note
					</Button>
				</div>
			</div>
			<DashboardSection>
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
			</DashboardSection>
			Filter
			<DashboardSection title='Recent Items'>
				<RecentSection />
			</DashboardSection>
		</div>
	);
};

export { Note };
