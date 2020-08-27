import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar';
import { StatCard } from '../shared/StatCard';
import { DashboardSection } from '../shared/DashboardSection';
import { DashboardHeader } from '../shared/DashboardHeader';

import { selectUser } from '../../../redux/user';
import styles from './Dashboard.module.scss';
import { PinnedSection } from '../shared/PinnedSection';
import { ListSection } from '../shared/ListSection/ListSection';
import { Loading } from '../../shared/Loading';
import { useApiRequest } from '../../../hooks/useApiRequest';
import { getUserApiConfig } from '../../../api/user';
import { selectAppData, setAppData } from '../../../redux/appData';
import { useRouter } from 'next/router';

const Dashboard = (): JSX.Element => {
	const {
		request: getUserRequest,
		data: getUserData,
		errors: getUserErrors
	} = useApiRequest();
	const [ isLoading, setIsLoading ] = useState(true);
	const { userId, token } = useSelector(selectUser);
	const appData = useSelector(selectAppData);
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(() => {
		const getUserData = async () => {
			const config = getUserApiConfig({ userId, token });
			const res = await getUserRequest(config);

			if (res.success === true) {
				setIsLoading(false);
				console.log(res.data.user);

				dispatch(setAppData({ appData: res.data.user }));
			}
		};

		getUserData();
	}, []);

	if (isLoading) {
		return (
			<div>
				<Loading />
			</div>
		);
	}

	return (
		<div>
			<div className={styles.header}>
				<DashboardHeader
					heading='Welcome to Timestamp'
					subheading='Dashboard'
					subheadingType={IconType.generic}
				/>

				<div className={styles.btn_container}>
					<Button
						btnStyle='outline'
						onClick={() => {
							router.push(
								`/app/[userId]/create`,
								`/app/${userId}/create?action=project`
							);
						}}>
						<TypeIcon type={IconType.project} />
						New Project
					</Button>
				</div>
			</div>
			<DashboardSection>
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
						type={IconType.project}
						title={'Projects'}
						stat={appData.projects.length}
						href={'/app/[userId/projects'}
						as={`/app/${userId}/projects`}
						linkText='View Projects'
					/>
					<StatCard
						type={IconType.task}
						title={'Tasks'}
						stat={appData.tasks.length}
						href={'/app/[userId/tasks'}
						as={`/app/${userId}/tasks`}
						linkText='View Tasks'
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
			</DashboardSection>
			<DashboardSection title='Pinned Favorites'>
				<PinnedSection />
			</DashboardSection>
			<DashboardSection title='Recent Items'>
				<ListSection items={[]} />
			</DashboardSection>
		</div>
	);
};

export { Dashboard };
