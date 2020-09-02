import React from 'react';

import { ListFilterIcon } from './ListFilterIcon';
import { Button } from '../../../shared/Button';

import styles from './ListFilterButton.module.scss';

interface Props {
	type: string;
	triggerFilter: string;
	currentFilter: string;
	title: string;
	sortDesc: boolean;
	sortFunction: (filter: string) => void;
}

const ListFilterButton = ({
	type,
	triggerFilter,
	currentFilter,
	title,
	sortDesc,
	sortFunction
}: Props): JSX.Element => {
	return (
		<div className={styles[`btn_container_${type}`]}>
			<Button
				btnStyle='link_gray'
				onClick={() => {
					sortFunction(triggerFilter);
				}}>
				{' '}
				{title}
			</Button>
			<span style={{ position: 'relative' }}>
				{currentFilter === triggerFilter ? (
					<ListFilterIcon sortDesc={sortDesc} />
				) : null}
			</span>
		</div>
	);
};

export { ListFilterButton };
