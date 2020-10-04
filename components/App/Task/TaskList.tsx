import React from 'react';

import { AppPageSection, AppPageTitle, AppPageHeader } from '../AppPage';
import { ListSection } from '../shared/ListSection/ListSection';
import { VisibilityFilterToggle } from '../shared/VisibilityFilterToggle';

import { useVisibilityFilter } from '../../../hooks/useVisibilityFilter';

const TaskList = (): JSX.Element => {
	const { selected, handleSelect, visibleItems } = useVisibilityFilter();
	return (
		<React.Fragment>
			<AppPageHeader>
				<AppPageTitle
					heading='All Tasks'
					subheading='Task'
					subheadingType='task'
				/>
			</AppPageHeader>
			<VisibilityFilterToggle
				selected={selected}
				handleClick={handleSelect}
			/>
			<AppPageSection>
				<ListSection
					type='task'
					items={visibleItems.tasks}
					pagination={true}
					limit={10}
					title='Tasks'
					addType='new'
				/>
			</AppPageSection>
		</React.Fragment>
	);
};

export { TaskList };
