import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/user';

import { PinnedCard } from './PinnedCard';

import styles from './PinnedSection.module.scss';
import { assignType } from '../../../../utils/assignType';
import { generatePathName } from '../../../../utils/generatePathName';
import { formatDateTime } from '../../../../utils/formatDateTime';

interface Props {
	items: any[];
}

const PinnedSection = ({ items }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);

	if (items.length === 0) {
		return <div>( Empty )</div>;
	}

	return (
		<div>
			<section className={styles.container}>
				{items.map(item => {
					const type = assignType(item);
					const { href, as } = generatePathName(item, type);

					const { date, time } = formatDateTime(item, type);
					return (
						<PinnedCard
							href={`/app/[userId]/${href}`}
							as={`/app/${userId}/${as}`}
							title={item.title}
							type={type}
							hours={Number(item.hours).toFixed(1)}
							date={date}
							time={time}
							description={item.description}
							label1={null}
							label2={null}
							stat1={null}
							stat2={null}
							key={item.created_at}
						/>
					);
				})}
			</section>
		</div>
	);
};

export { PinnedSection };
