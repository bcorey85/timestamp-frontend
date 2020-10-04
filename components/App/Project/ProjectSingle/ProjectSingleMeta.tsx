import React from 'react';

import { AppPageMeta } from '../../AppPage';
import { CompleteBadge } from '../../shared/CompletedBadge';

import { Item } from '../../../../utils/ItemService';
import { MathService } from '../../../../utils/MathService';
import { StringService } from '../../../../utils/StringService';

interface Props {
	project: Item;
}

const ProjectSingleMeta = ({ project }: Props): JSX.Element => {
	const projectIsComplete = project.meta.completedOn !== null;

	return (
		<AppPageMeta>
			<p>
				{new Date(
					Date.parse(project.meta.createdAt)
				).toLocaleDateString()}&nbsp; - &nbsp;{MathService.round(project.meta.hours, 1)}{' '}
				hr
			</p>
			<p>{project.description}</p>
			<p>
				{StringService.pluralize(project.tasks || 0, {
					singular: 'task',
					plural: 'tasks'
				})}&nbsp; - &nbsp;
				{StringService.pluralize(project.notes || 0, {
					singular: 'note',
					plural: 'notes'
				})}
			</p>
			{projectIsComplete ? (
				<CompleteBadge date={project.meta.completedOn} />
			) : null}
		</AppPageMeta>
	);
};

export { ProjectSingleMeta };
