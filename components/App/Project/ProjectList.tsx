import React from 'react';

import { IconType } from '../shared/TypeIcon';
import { AppPageSection, AppPageTitle, AppPageHeader } from '../AppPage';
import { ListSection } from '../shared/ListSection/ListSection';

import { useVisibilityFilter } from '../../../hooks/useVisibilityFilter';
import { VisibilityFilterToggle } from '../shared/VisibilityFilterToggle';

const ProjectList = (): JSX.Element => {
	const { selected, handleSelect, visibleItems } = useVisibilityFilter();

	return (
		<React.Fragment>
			<AppPageHeader>
				<AppPageTitle
					heading='All Projects'
					subheading='Project'
					subheadingType={IconType.project}
				/>
			</AppPageHeader>
			<VisibilityFilterToggle
				selected={selected}
				handleClick={handleSelect}
			/>
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
