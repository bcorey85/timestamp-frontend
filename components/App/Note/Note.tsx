import React from 'react';
import { useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';

import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { AppPageHeader } from '../AppPage/AppPageHeader';
import { AppPageSectionHeading } from '../AppPage/AppPageSectionHeading';
import { AppPageHeaderControls } from '../AppPage/AppPageHeaderControls';
import { ListSection } from '../shared/ListSection/ListSection';
import { ListAddIcon } from '../shared/ListSection/ListAddIcon';
import { OverflowMenu } from '../shared/OverflowMenu/OverflowMenu';
import { OverflowToggleVisible } from '../shared/OverflowMenu/OverflowActions/OverflowToggleVisible';

import { selectAppData } from '../../../redux/appData';
import { useCreateModal } from '../../../hooks/create/useCreateModal';
import { useVisibilityFilter } from '../../../hooks/useVisibilityFilter';

const Note = (): JSX.Element => {
	const { toggleCreateModal } = useCreateModal();
	const appData = useSelector(selectAppData);
	const { selected, handleSelect } = useVisibilityFilter();

	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading='All Notes'
					subheading='Note'
					subheadingType={IconType.note}
				/>
				<AppPageHeaderControls>
					<OverflowMenu>
						<OverflowToggleVisible
							selected={selected}
							handleClick={handleSelect}
						/>
					</OverflowMenu>
				</AppPageHeaderControls>
			</AppPageHeader>
			<AppPageSection>
				<AppPageSectionHeading title='Notes'>
					<Button
						btnStyle='link_gray'
						onClick={() =>
							toggleCreateModal('new', {
								createModalPage: 'note'
							})}>
						<ListAddIcon />
					</Button>
				</AppPageSectionHeading>
				<ListSection type='note' items={appData.notes} />
			</AppPageSection>
		</div>
	);
};

export { Note };
