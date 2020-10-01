import React from 'react';
import { useSelector } from 'react-redux';

import { IconType } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';

import {
	AppPageSection,
	AppPageTitle,
	AppPageHeader,
	AppPageSectionHeading,
	AppPageHeaderControls
} from '../AppPage';
import { ListSection } from '../shared/ListSection/ListSection';
import { ListAddIcon } from '../shared/ListSection/ListAddIcon';
import { OverflowMenu } from '../shared/OverflowMenu/OverflowMenu';
import { OverflowToggleVisible } from '../shared/OverflowMenu/OverflowActions';

import { selectAppData } from '../../../redux/appData';
import { useCreateModal } from '../../../hooks/create/useCreateModal';
import { useVisibilityFilter } from '../../../hooks/useVisibilityFilter';

const NoteList = (): JSX.Element => {
	const { toggleCreateModal } = useCreateModal();
	const appData = useSelector(selectAppData);
	const { selected, handleSelect } = useVisibilityFilter();

	return (
		<React.Fragment>
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
				<ListSection
					type='note'
					items={appData.notes}
					pagination={true}
					limit={10}
				/>
			</AppPageSection>
		</React.Fragment>
	);
};

export { NoteList };