import React, { SyntheticEvent } from 'react';

import { Button } from '../../shared/Button';
import { Select } from '../../shared/Input';

import styles from './YearToggle.module.scss';

interface Props {
	years: any[];
	toggleYear: (year: number | string) => void;
	selectedYear: number;
}

const YearToggle = ({
	years,
	toggleYear,
	selectedYear
}: Props): JSX.Element => {
	const handleChange = (
		e: React.MouseEvent<HTMLSelectElement, MouseEvent>
	) => {
		toggleYear(e.currentTarget.value);
	};
	return (
		<div className={styles.container}>
			<div className={styles.input}>
				<Select
					id='year'
					label='Select Year'
					onChange={handleChange}
					value={selectedYear}>
					{years.map(year => {
						return (
							<option key={year} value={year}>
								{year}
							</option>
						);
					})}
				</Select>
			</div>
		</div>
	);
};

export { YearToggle };
