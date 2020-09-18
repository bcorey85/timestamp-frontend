import React from 'react';
import { useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { StatsBar } from '../shared/StatsBar/StatsBar';
import { StatCard } from '../shared/StatsBar/StatCard';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { AppPageHeader } from '../AppPage/AppPageHeader';
import { AppPageSectionHeading } from '../AppPage/AppPageSectionHeading';
import { AppPageHeaderControls } from '../AppPage/AppPageHeaderControls';
import { ListSection } from '../shared/ListSection/ListSection';

import { selectAppData } from '../../../redux/appData';
import { useCreateModal } from '../../../hooks/create/useCreateModal';

const Note = (): JSX.Element => {
	const { toggleCreateModal } = useCreateModal();
	const appData = useSelector(selectAppData);

	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading='All Notes'
					subheading='Note'
					subheadingType={IconType.note}
				/>
				<AppPageHeaderControls />
			</AppPageHeader>
			<AppPageSection>
				<AppPageSectionHeading title='Notes'>
					<Button
						btnStyle='link_gray'
						onClick={() =>
							toggleCreateModal('new', {
								createModalPage: 'note'
							})}>
						<TypeIcon type={IconType.note} />
						New Note
					</Button>
				</AppPageSectionHeading>
				<ListSection type='note' items={appData.notes} />
			</AppPageSection>
		</div>
	);
};

export { Note };
