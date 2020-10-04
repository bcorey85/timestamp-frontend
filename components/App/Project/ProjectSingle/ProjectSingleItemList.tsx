import React from 'react';

import { ListSection } from '../../shared/ListSection/ListSection';
import { AppPageSection } from '../../AppPage';

import { Item } from '../../../../utils/ItemService';

interface Props {
	itemSource: {
		tasks: Item[];
		notes: Item[];
	};
	project: Item;
}

const ProjectSingleItemList = ({ itemSource, project }: Props): JSX.Element => {
	return (
		<React.Fragment>
			<AppPageSection>
				<ListSection
					type='task'
					items={itemSource.tasks.filter(
						(task: Item) =>
							task.itemId.projectId === project.itemId.projectId
					)}
					pagination={true}
					limit={6}
					title='Tasks'
					addType='addChild'
					item={project}
				/>
			</AppPageSection>
			<AppPageSection>
				<ListSection
					type='note'
					items={itemSource.notes.filter(
						(note: Item) =>
							note.itemId.projectId === project.itemId.projectId
					)}
					pagination={true}
					limit={6}
					title='Notes'
					addType='addChild'
					item={project}
				/>
			</AppPageSection>
		</React.Fragment>
	);
};

export { ProjectSingleItemList };
