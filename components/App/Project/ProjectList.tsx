import React from 'react';
import { useSelector } from 'react-redux';

import { IconType } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import {
	AppPageSection,
	AppPageTitle,
	AppPageHeader,
	AppPageSectionHeading
} from '../AppPage';
import { ListSection } from '../shared/ListSection/ListSection';
import { ListAddIcon } from '../shared/ListSection/ListAddIcon';
import { AppPageHeaderControls } from '../AppPage/AppPageHeaderControls';
import { OverflowMenu } from '../shared/OverflowMenu/OverflowMenu';
import { OverflowToggleVisible } from '../shared/OverflowMenu/OverflowActions';

import { selectAppData } from '../../../redux/appData';
import { useCreateModal } from '../../../hooks/create/useCreateModal';
import { useVisibilityFilter } from '../../../hooks/useVisibilityFilter';
import { VisibleItemsHeader } from '../shared/VisibleItemsHeader';

const ProjectList = (): JSX.Element => {
	const { toggleCreateModal } = useCreateModal();
	const { selected, handleSelect, visibleItems } = useVisibilityFilter();

	return (
		<React.Fragment>
			<AppPageHeader>
				<AppPageTitle
					heading='All Projects'
					subheading='Project'
					subheadingType={IconType.project}
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
			<VisibleItemsHeader visible={selected} />
			<AppPageSection>
				<ListSection
					type='project'
					items={visibleItems.projects}
					pagination={true}
					limit={10}
					title='Projects'
					addType='new'
				/>
			</AppPageSection>
		</React.Fragment>
	);
};

export { ProjectList };
