import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from './ListItem';

import { assignType } from '../../../../utils/assignType';
import { formatDateTime } from '../../../../utils/formatDateTime';
import { selectUser } from '../../../../redux/user';
import styles from './ListSection.module.scss';
import { generatePathName } from '../../../../utils/generatePathName';

interface Props {
	items: any[];
}

const ListSection = ({ items }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);

	if (items.length === 0) {
		return (
			<div className={styles.container}>
				<span className={styles.empty_list}>( Empty )</span>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			{items.map(item => {
				const type = assignType(item);
				const meta = formatDateTime(item, type);
				const { href, as } = generatePathName(item, type);

				return (
					<ListItem
						href={`/app/[userId]/${href}`}
						as={`/app/${userId}/${as}`}
						type={type}
						title={item.title}
						date={meta.date}
						time={meta.time}
						key={item.created_at}
						pinned={item.pinned}
					/>
				);
			})}
		</div>
	);
};

export { ListSection };
