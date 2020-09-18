import React from 'react';
import { useSelector } from 'react-redux';

import { IconType, TypeIcon } from '../shared/TypeIcon';
import { Button } from '../../shared/Button';
import { AppPageSection } from '../AppPage/AppPageSection';
import { AppPageTitle } from '../AppPage/AppPageTitle';
import { AppPageSectionHeading } from '../AppPage/AppPageSectionHeading';
import { AppPageHeader } from '../AppPage/AppPageHeader';
import { ListSection } from '../shared/ListSection/ListSection';

import { selectAppData } from '../../../redux/appData';

import { useCreateModal } from '../../../hooks/create/useCreateModal';

const Task = (): JSX.Element => {
	const { toggleCreateModal } = useCreateModal();
	const appData = useSelector(selectAppData);

	return (
		<div>
			<AppPageHeader>
				<AppPageTitle
					heading='All Tasks'
					subheading='Task'
					subheadingType={IconType.task}
				/>
			</AppPageHeader>
			<AppPageSection>
				<AppPageSectionHeading title='Tasks'>
					<Button
						btnStyle='link_gray'
						onClick={() =>
							toggleCreateModal('new', {
								createModalPage: 'task'
							})}>
						<TypeIcon type={IconType.task} />
						New Task
					</Button>
				</AppPageSectionHeading>
				<ListSection type='task' items={appData.tasks} />
			</AppPageSection>
		</div>
	);
};

export { Task };
