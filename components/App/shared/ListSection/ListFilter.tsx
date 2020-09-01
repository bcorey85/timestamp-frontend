import React from 'react';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

import { Button } from '../../../shared/Button';

import styles from './ListFilter.module.scss';

interface Props {
	sortFunction: (param: string) => void;
	currentFilter: string;
	sortDesc: boolean;
}

const ListIcon = ({ sortDesc }: { sortDesc: boolean }) => {
	if (sortDesc) {
		return (
			<span className={styles.direction_icon}>
				<BiChevronDown />
			</span>
		);
	}
	return (
		<span className={styles.direction_icon}>
			<BiChevronUp />
		</span>
	);
};

const ListFilter = ({
	sortFunction,
	currentFilter,
	sortDesc
}: Props): JSX.Element => {
	return (
		<div className={styles.container}>
			<Button
				btnStyle='link_gray'
				onClick={() => {
					sortFunction('date');
				}}>
				<span className={styles.heading}>
					Date
					{currentFilter === 'date' ? (
						<ListIcon sortDesc={sortDesc} />
					) : null}
				</span>
			</Button>

			<Button
				btnStyle='link_gray'
				onClick={() => {
					sortFunction('title');
				}}>
				<span className={styles.heading}>
					Title
					{currentFilter === 'title' ? (
						<ListIcon sortDesc={sortDesc} />
					) : null}
				</span>
			</Button>

			<Button
				btnStyle='link_gray'
				onClick={() => {
					sortFunction('hours');
				}}>
				<span className={styles.heading}>
					Hours
					{currentFilter === 'hours' ? (
						<ListIcon sortDesc={sortDesc} />
					) : null}
				</span>
			</Button>

			<Button
				btnStyle='link_gray'
				onClick={() => {
					sortFunction('pinned');
				}}>
				<span className={styles.heading}>
					Pin
					{currentFilter === 'pinned' ? (
						<ListIcon sortDesc={sortDesc} />
					) : null}
				</span>
			</Button>
		</div>
	);
};

export { ListFilter };
