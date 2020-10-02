import React from 'react';

import { ListFilterIcon } from './ListFilterIcon';
import { Button } from '../../../shared/Button';

import styles from './ListFilterButton.module.scss';

interface Props {
	type: string;
	columnFilter: string;
	currentFilter: string;
	title: string;
	align: 'left' | 'right' | 'center';
	sortDesc: boolean;
	sortFunction: (
		{ filter, sortDesc }: { filter: string; sortDesc: boolean }
	) => void;
}

const ListFilterButton = ({
	type,
	columnFilter,
	currentFilter,
	title,
	align,
	sortDesc,
	sortFunction
}: Props): JSX.Element => {
	console.log(align);

	return (
		<div className={styles[`btn_container_${type}`]}>
			<Button
				btnStyle='link_gray_small'
				style={{ textAlign: align }}
				onClick={() => {
					sortFunction({ filter: columnFilter, sortDesc: !sortDesc });
				}}>
				{title}
				<span style={{ position: 'relative' }}>
					{currentFilter === columnFilter ? (
						<ListFilterIcon sortDesc={sortDesc} />
					) : null}
				</span>
			</Button>
		</div>
	);
};

export { ListFilterButton };
