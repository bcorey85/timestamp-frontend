import React from 'react';

import styles from './ListFilter.module.scss';
import { noteBtns, taskBtns, projectBtns, ButtonConfig } from './ListConfig';
import { ListFilterButton } from './ListFilterButton';
import { ItemType } from '../../../../utils/ItemService';

interface Props {
	sortFunction: (
		{ filter, sortDesc }: { filter: string; sortDesc: boolean }
	) => void;
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
	let buttons: ButtonConfig[];
	if (type === 'project') {
		buttons = projectBtns;
	} else if (type === 'task') {
		buttons = taskBtns;
	} else {
		buttons = noteBtns;
	}

	return (
		<div className={styles.container}>
			{buttons.map(item => {
				return (
					<ListFilterButton
						type={item.btnType}
						columnFilter={item.filter}
						title={item.title}
						align={item.align}
						currentFilter={currentFilter}
						sortDesc={sortDesc}
						sortFunction={sortFunction}
						key={item.filter}
					/>
				);
			})}
		</div>
	);
};

export { ListFilter };
