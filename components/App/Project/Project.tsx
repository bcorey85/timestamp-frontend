import React from 'react';
import { useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { AppPageHeader } from '../AppPage/AppPageHeader';
import { AppPageSectionHeading } from '../AppPage/AppPageSectionHeading';
import { ListSection } from '../shared/ListSection/ListSection';

import { selectAppData } from '../../../redux/appData';
import { useCreateModal } from '../../../hooks/create/useCreateModal';

const Project = (): JSX.Element => {
	const { toggleCreateModal } = useCreateModal();
	const appData = useSelector(selectAppData);

	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading='All Projects'
					subheading='Project'
					subheadingType={IconType.project}
				/>
			</AppPageHeader>

			<AppPageSection>
				<AppPageSectionHeading title='Projects'>
					<Button
						btnStyle='link_gray'
						onClick={() =>
							toggleCreateModal('new', {
								createModalPage: 'project'
							})}>
						<TypeIcon type={IconType.project} />
						New Project
					</Button>
				</AppPageSectionHeading>
				<ListSection type='project' items={appData.projects} />
			</AppPageSection>
		</div>
	);
};

export { Project };
