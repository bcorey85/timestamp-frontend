import React from 'react';

import { AppPageMeta } from '../../AppPage';
import { CompleteBadge } from '../../shared/CompletedBadge';

import { MathService } from '../../../../utils/MathService';
import { StringService } from '../../../../utils/StringService';
import { TagService } from '../../../../utils/TagService';
import { Item } from '../../../../utils/ItemService';

interface Props {
	task: Item;
}

const TaskSingleMeta = ({ task }: Props): JSX.Element => {
	const taskIsComplete = task.meta.completedOn !== null;

	return (
		<AppPageMeta>
			<p>{TagService.addSpaces(task.tags) || null} </p>
			<p>
				{new Date(
					Date.parse(task.meta.createdAt)
				).toLocaleDateString()}&nbsp; - &nbsp;
				{MathService.round(task.meta.hours, 1)} hr
			</p>
			<p>{task.description}</p>
			<p>
				{StringService.pluralize(task.notes || 0, {
					singular: 'note',
					plural: 'notes'
				})}
			</p>
			{taskIsComplete ? (
				<CompleteBadge date={task.meta.completedOn} />
			) : null}
		</AppPageMeta>
	);
};

export { TaskSingleMeta };
