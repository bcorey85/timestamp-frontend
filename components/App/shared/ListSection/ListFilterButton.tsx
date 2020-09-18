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
				btnStyle='link_gray_small'
				onClick={() => {
					sortFunction(triggerFilter);
				}}>
				{' '}
				{title}
				<span style={{ position: 'relative' }}>
					{currentFilter === triggerFilter ? (
						<ListFilterIcon sortDesc={sortDesc} />
					) : null}
				</span>
			</Button>
		</div>
	);
};

export { ListFilterButton };
