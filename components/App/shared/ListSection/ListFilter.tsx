import React from 'react';

import styles from './ListFilter.module.scss';
import { noteBtns, taskBtns, projectBtns } from './ListConfig';
import { ListFilterButton } from './ListFilterButton';
import { ItemType } from '../../../../utils/ItemService';

interface Props {
	sortFunction: (filter: string) => void;
	currentFilter: string;
	sortDesc: boolean;
	type: keyof ItemType;
}

const ListFilter = ({
	sortFunction,
	currentFilter,
	sortDesc,
	type
}: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			{type === 'note' ? (
				noteBtns.map(note => {
					return (
						<ListFilterButton
							type={note.btnType}
							triggerFilter={note.filter}
							title={note.title}
							currentFilter={currentFilter}
							sortDesc={sortDesc}
							sortFunction={sortFunction}
							key={note.filter}
						/>
					);
				})
			) : null}

			{type === 'task' ? (
				taskBtns.map(task => {
					return (
						<ListFilterButton
							type={task.btnType}
							triggerFilter={task.filter}
							title={task.title}
							currentFilter={currentFilter}
							sortDesc={sortDesc}
							sortFunction={sortFunction}
							key={task.filter}
						/>
					);
				})
			) : null}

			{type === 'project' ? (
				projectBtns.map(project => {
					return (
						<ListFilterButton
							type={project.btnType}
							triggerFilter={project.filter}
							title={project.title}
							currentFilter={currentFilter}
							sortDesc={sortDesc}
							sortFunction={sortFunction}
							key={project.filter}
						/>
					);
				})
			) : null}
		</div>
	);
};

export { ListFilter };
