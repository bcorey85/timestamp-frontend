import React from 'react';
import { useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../shared/AppPage/AppPageSection';
import { AppPageTitle } from '../shared/AppPage/AppPageTitle';
import { AppPageHeader } from '../shared/AppPage/AppPageHeader';
import { AppPageHeaderControls } from '../shared/AppPage/AppPageHeaderControls';
import { CreateModal } from '../Create/CreateModal';
import { ListSection } from '../shared/ListSection/ListSection';

import { selectUser } from '../../../redux/user';
import { selectAppData } from '../../../redux/appData';
import { useRouterService } from '../../../hooks/useRouterService';
import { useToggle } from '../../../hooks/useToggle';

const Note = (): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const [ createModalOpen, toggleCreateModal ] = useToggle(false);
	const appData = useSelector(selectAppData);
	const { router } = useRouterService();

	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading='All Notes'
					subheading='Note'
					subheadingType={IconType.note}
				/>

				<AppPageHeaderControls>
					<Button btnStyle='secondary' onClick={toggleCreateModal}>
						<TypeIcon type={IconType.note} />
						New Note
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
			</AppPageSection> */}

			<AppPageSection title='Notes'>
				<ListSection type='note' items={appData.notes} />
			</AppPageSection>

			<CreateModal
				toggleModal={toggleCreateModal}
				isOpen={createModalOpen}
				type='note'
			/>
		</div>
	);
};

export { Note };
