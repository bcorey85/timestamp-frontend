import React from 'react';

import { AppPageSection, AppPageTitle, AppPageHeader } from '../AppPage';
import { ListSection } from '../shared/ListSection/ListSection';

import { useVisibilityFilter } from '../../../hooks/useVisibilityFilter';
import { VisibilityFilterToggle } from '../shared/VisibilityFilterToggle';

const NoteList = (): JSX.Element => {
	const { selected, handleSelect, visibleItems } = useVisibilityFilter();

	return (
		<React.Fragment>
			<AppPageHeader>
				<AppPageTitle
					heading='All Notes'
					subheading='Note'
					subheadingType='note'
				/>
			</AppPageHeader>
			<VisibilityFilterToggle
				selected={selected}
				handleClick={handleSelect}
			/>
			<AppPageSection>
				<ListSection
					type='note'
					items={visibleItems.notes}
					pagination={true}
					limit={10}
					title='Notes'
					addType='new'
				/>
			</AppPageSection>
		</React.Fragment>
	);
};

export { NoteList };
