import React from 'react';
import { useSelector } from 'react-redux';

import { IconType } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import {
	AppPageSection,
	AppPageTitle,
	AppPageSectionHeading,
	AppPageHeader
} from '../AppPage';
import { ListSection } from '../shared/ListSection/ListSection';
import { ListAddIcon } from '../shared/ListSection/ListAddIcon';
import { AppPageHeaderControls } from '../AppPage/AppPageHeaderControls';
import { OverflowMenu } from '../shared/OverflowMenu/OverflowMenu';
import { OverflowToggleVisible } from '../shared/OverflowMenu/OverflowActions';

import { selectAppData } from '../../../redux/appData';
import { useCreateModal } from '../../../hooks/create/useCreateModal';
import { useVisibilityFilter } from '../../../hooks/useVisibilityFilter';

const TaskList = (): JSX.Element => {
	const { toggleCreateModal } = useCreateModal();
	const appData = useSelector(selectAppData);
	const { selected, handleSelect } = useVisibilityFilter();
	return (
		<React.Fragment>
			<AppPageHeader>
				<AppPageTitle
					heading='All Tasks'
					subheading='Task'
					subheadingType={IconType.task}
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
				<AppPageSectionHeading title='Tasks'>
					<Button
						btnStyle='link_gray'
						onClick={() =>
							toggleCreateModal('new', {
								createModalPage: 'task'
							})}>
						<ListAddIcon />
					</Button>
				</AppPageSectionHeading>
				<ListSection
					type='task'
					items={appData.tasks}
					pagination={true}
					limit={10}
				/>
			</AppPageSection>
		</React.Fragment>
	);
};

export { TaskList };
